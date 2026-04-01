/**
 * Stress-test the meal deal combination logic by simulating 1000 random
 * preference combinations across all shops and reporting every failure.
 */

// ── Import data inline (mirrors src/data) ─────────────────────────────────

const ALL_MAIN_CATEGORIES  = ['sandwich','wrap','salad','sushi','pasta','soup','hot food','baguette','roll','bowl'];
const ALL_SNACK_CATEGORIES = ['crisps','savoury snack','chocolate','sweet snack','fruit','cake/pastry','cereal bar','nuts'];
const ALL_DRINK_CATEGORIES = ['water','juice','fizzy drink','hot drink','smoothie','energy drink','iced coffee'];

const DIETARY_TYPES = ['none','vegetarian','vegan','pescetarian'];

// Dynamically import compiled shop data via tsx / direct TS isn't available,
// so we reproduce the logic from source here.
// We'll load each shop's data file using a quick require-like approach.

// Instead, run via tsx so we can use TS imports directly.
// This file is called via: node --input-type=module < scripts/stress-test.mjs
// But we need the actual item data — let's just inline a minimal representation
// by reading the built JS. Actually let's just spawn tsx.

// ── Pure logic (mirrors AppContext.tsx) ───────────────────────────────────

function matchesDietary(item, prefs) {
  if (prefs.glutenFree  && !item.isGlutenFree)   return false;
  if (prefs.dairyFree   && !item.isDairyFree)    return false;
  if (prefs.lactoseFree && !item.isLactoseFree)  return false;
  if (prefs.halal       && !item.isHalal)        return false;
  if (prefs.nutFree     && !item.isNutFree)      return false;
  if (prefs.highProtein && item.slot !== 'drink' && !item.isHighProtein)  return false;
  if (prefs.lowCalorie  && !item.isLowCalorie)   return false;
  switch (prefs.dietary) {
    case 'vegan':       return !!item.isVegan;
    case 'vegetarian':  return !!item.isVegetarian || !!item.isVegan;
    case 'pescetarian': return !!item.isPescetarian || !!item.isVegetarian || !!item.isVegan;
    default:            return true;
  }
}

function buildCombination(shop, prefs) {
  const mains  = shop.items.filter(i => i.slot === 'main'  && prefs.mains.includes(i.category)  && matchesDietary(i, prefs));
  const snacks = shop.items.filter(i => i.slot === 'snack' && prefs.snacks.includes(i.category) && matchesDietary(i, prefs));
  const drinks = shop.items.filter(i => i.slot === 'drink' && prefs.drinks.includes(i.category) && matchesDietary(i, prefs));
  return { mains, snacks, drinks, ok: mains.length > 0 && snacks.length > 0 && drinks.length > 0 };
}

// ── Load shop data ─────────────────────────────────────────────────────────

import { createRequire } from 'module';
import { pathToFileURL } from 'url';
import path from 'path';
import { readFileSync } from 'fs';

// We'll parse the TS source files by stripping TS-specific syntax minimally.
// Actually the cleanest approach: use node with tsx to run a .ts version.
// Let's just output a note and use a different approach below.

// Read raw item data by eval'ing a simplified version of each shop file.
function loadShopItems(filePath) {
  let src = readFileSync(filePath, 'utf8');
  // Strip TS type imports and annotations
  src = src.replace(/import type .+;\n/g, '');
  src = src.replace(/import .+;\n/g, '');
  src = src.replace(/: ShopDefinition/g, '');
  src = src.replace(/export const /g, 'const ');
  // Append export
  const varName = filePath.split('/').pop().replace('.ts','');
  src += `\nexport default ${varName};`;
  return src;
}

// Use dynamic import with data: URL
async function loadShop(filePath) {
  let src = readFileSync(filePath, 'utf8');
  src = src.replace(/import type .+;\n/g, '');
  src = src.replace(/import .+;\n/g, '');
  src = src.replace(/: ShopDefinition/g, '');
  src = src.replace(/export const (\w+)/g, 'const $1');
  // get the variable name
  const match = src.match(/^const (\w+) = \{/m);
  if (!match) throw new Error('Could not find shop var in ' + filePath);
  const varName = match[1];
  src += `\nexport default ${varName};`;
  const encoded = Buffer.from(src).toString('base64');
  const mod = await import(`data:text/javascript;base64,${encoded}`);
  return mod.default;
}

// ── Helpers ────────────────────────────────────────────────────────────────

function pickSubset(arr, minSize = 0) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  const size = Math.floor(Math.random() * (arr.length - minSize + 1)) + minSize;
  return shuffled.slice(0, size);
}

function randomPrefs(requireAtLeastOne = true, shop = null) {
  const min = requireAtLeastOne ? 1 : 0;
  // Use only categories that exist at this shop (mirrors the UI fix)
  const availMains  = shop ? [...new Set(shop.items.filter(i => i.slot === 'main').map(i => i.category))]  : ALL_MAIN_CATEGORIES;
  const availSnacks = shop ? [...new Set(shop.items.filter(i => i.slot === 'snack').map(i => i.category))] : ALL_SNACK_CATEGORIES;
  const availDrinks = shop ? [...new Set(shop.items.filter(i => i.slot === 'drink').map(i => i.category))] : ALL_DRINK_CATEGORIES;
  return {
    dietary:    DIETARY_TYPES[Math.floor(Math.random() * DIETARY_TYPES.length)],
    mains:      pickSubset(availMains, min),
    snacks:     pickSubset(availSnacks, min),
    drinks:     pickSubset(availDrinks, min),
    glutenFree:  Math.random() < 0.2,
    dairyFree:   Math.random() < 0.2,
    lactoseFree: Math.random() < 0.15,
    halal:       Math.random() < 0.1,
    nutFree:     Math.random() < 0.2,
    highProtein: Math.random() < 0.15,
    lowCalorie:  Math.random() < 0.15,
  };
}

// ── Main ──────────────────────────────────────────────────────────────────

const shopFiles = [
  'tesco', 'sainsburys', 'morrisons', 'boots', 'coop', 'marks_spencer', 'waitrose'
];

const base = path.resolve(process.cwd(), 'src/data');

const shops = await Promise.all(
  shopFiles.map(name => loadShop(path.join(base, `${name}.ts`)))
);

const RUNS = 5000;
const failures = [];
const zeroSlotCounts = { main: 0, snack: 0, drink: 0, multiple: 0 };
let totalNoCombo = 0;
let totalOk = 0;

// Also check: items with price = 0
const itemIssues = [];
for (const shop of shops) {
  for (const item of shop.items) {
    if (!item.price || item.price <= 0) {
      itemIssues.push(`[${shop.displayName}] ${item.name}: price=${item.price}`);
    }
    if (!item.slot) {
      itemIssues.push(`[${shop.displayName}] ${item.name}: missing slot`);
    }
    if (!item.category) {
      itemIssues.push(`[${shop.displayName}] ${item.name}: missing category`);
    }
    if (!ALL_MAIN_CATEGORIES.includes(item.category) &&
        !ALL_SNACK_CATEGORIES.includes(item.category) &&
        !ALL_DRINK_CATEGORIES.includes(item.category)) {
      itemIssues.push(`[${shop.displayName}] ${item.name}: unknown category "${item.category}"`);
    }
    // Check slot/category mismatch
    if (item.slot === 'main'  && !ALL_MAIN_CATEGORIES.includes(item.category))  {
      itemIssues.push(`[${shop.displayName}] ${item.name}: slot=main but category="${item.category}" not in main categories`);
    }
    if (item.slot === 'snack' && !ALL_SNACK_CATEGORIES.includes(item.category)) {
      itemIssues.push(`[${shop.displayName}] ${item.name}: slot=snack but category="${item.category}" not in snack categories`);
    }
    if (item.slot === 'drink' && !ALL_DRINK_CATEGORIES.includes(item.category)) {
      itemIssues.push(`[${shop.displayName}] ${item.name}: slot=drink but category="${item.category}" not in drink categories`);
    }
    // isDairyFree should imply isLactoseFree
    if (item.isDairyFree && !item.isLactoseFree) {
      itemIssues.push(`[${shop.displayName}] ${item.name}: isDairyFree=true but isLactoseFree not set`);
    }
  }
}

// Run random tests
for (let i = 0; i < RUNS; i++) {
  for (const shop of shops) {
    const prefs = randomPrefs(true, shop);
    const result = buildCombination(shop, prefs);
    if (!result.ok) {
      totalNoCombo++;
      const emptySlots = [
        result.mains.length  === 0 ? 'main'  : null,
        result.snacks.length === 0 ? 'snack' : null,
        result.drinks.length === 0 ? 'drink' : null,
      ].filter(Boolean);

      if (emptySlots.length > 1) zeroSlotCounts.multiple++;
      else if (emptySlots[0]) zeroSlotCounts[emptySlots[0]]++;

      failures.push({ shop: shop.displayName, prefs, emptySlots,
        mainCount: result.mains.length, snackCount: result.snacks.length, drinkCount: result.drinks.length });
    } else {
      totalOk++;
    }
  }
}

// ── Report ────────────────────────────────────────────────────────────────

console.log('═══════════════════════════════════════════════');
console.log(`  MEAL DEAL STRESS TEST  —  ${RUNS} runs × ${shops.length} shops = ${RUNS * shops.length} total`);
console.log('═══════════════════════════════════════════════\n');

console.log(`✅ Successful combinations : ${totalOk}`);
console.log(`❌ No combo found          : ${totalNoCombo} (${((totalNoCombo / (RUNS * shops.length)) * 100).toFixed(1)}%)\n`);

if (itemIssues.length > 0) {
  console.log('⚠️  DATA ISSUES:');
  itemIssues.forEach(issue => console.log('   ', issue));
  console.log('');
}

// Most common failure patterns
const failureByFilter = {};
for (const f of failures) {
  const key = [
    f.prefs.dietary !== 'none' ? f.prefs.dietary : null,
    f.prefs.glutenFree  ? 'glutenFree'  : null,
    f.prefs.dairyFree   ? 'dairyFree'   : null,
    f.prefs.lactoseFree ? 'lactoseFree' : null,
    f.prefs.halal       ? 'halal'       : null,
    f.prefs.nutFree     ? 'nutFree'     : null,
    f.prefs.highProtein ? 'highProtein' : null,
    f.prefs.lowCalorie  ? 'lowCalorie'  : null,
  ].filter(Boolean).join('+') || 'categories only';
  failureByFilter[key] = (failureByFilter[key] || 0) + 1;
}

const topFailures = Object.entries(failureByFilter).sort((a,b) => b[1]-a[1]).slice(0, 15);
if (topFailures.length > 0) {
  console.log('Top failure-causing filter combos:');
  topFailures.forEach(([key, count]) => {
    console.log(`   ${count.toString().padStart(5)}x  ${key}`);
  });
  console.log('');
}

// Which slots go empty most often?
console.log('Empty-slot breakdown:');
console.log(`   main empty   : ${zeroSlotCounts.main}`);
console.log(`   snack empty  : ${zeroSlotCounts.snack}`);
console.log(`   drink empty  : ${zeroSlotCounts.drink}`);
console.log(`   multiple     : ${zeroSlotCounts.multiple}`);
console.log('');

// Failures by shop
const failureByShop = {};
for (const f of failures) {
  failureByShop[f.shop] = (failureByShop[f.shop] || 0) + 1;
}
console.log('Failures by shop:');
Object.entries(failureByShop).sort((a,b) => b[1]-a[1]).forEach(([shop, count]) => {
  const pct = ((count / (RUNS)) * 100).toFixed(1);
  console.log(`   ${shop.padEnd(16)} ${count.toString().padStart(5)}  (${pct}% of runs)`);
});
console.log('');

// Sample a few representative failures for debugging
if (failures.length > 0) {
  console.log('── Sample failures (up to 10) ──────────────────');
  const seen = new Set();
  let shown = 0;
  for (const f of failures) {
    const sig = `${f.shop}|${f.emptySlots.join(',')}|${f.prefs.dietary}`;
    if (seen.has(sig) || shown >= 10) continue;
    seen.add(sig);
    shown++;
    console.log(`\n  Shop: ${f.shop}  |  Empty slots: ${f.emptySlots.join(', ')}`);
    console.log(`  Dietary: ${f.prefs.dietary}`);
    console.log(`  Flags: ${[
      f.prefs.glutenFree?'GF':null, f.prefs.dairyFree?'DF':null,
      f.prefs.lactoseFree?'LF':null, f.prefs.halal?'Halal':null,
      f.prefs.nutFree?'NF':null, f.prefs.highProtein?'HP':null,
      f.prefs.lowCalorie?'LC':null
    ].filter(Boolean).join(', ') || 'none'}`);
    if (f.emptySlots.includes('main'))  console.log(`  Selected main cats : ${f.prefs.mains.join(', ')}`);
    if (f.emptySlots.includes('snack')) console.log(`  Selected snack cats: ${f.prefs.snacks.join(', ')}`);
    if (f.emptySlots.includes('drink')) console.log(`  Selected drink cats: ${f.prefs.drinks.join(', ')}`);
    console.log(`  Pool sizes: main=${f.mainCount} snack=${f.snackCount} drink=${f.drinkCount}`);
  }
}

console.log('\n═══════════════════════════════════════════════');
