/**
 * Find specific gaps: which shop+slot+category combos have 0 items
 * for each dietary filter. These are the root causes of failures.
 */

import { readFileSync } from 'fs';
import path from 'path';

const ALL_MAIN_CATEGORIES  = ['sandwich','wrap','salad','sushi','pasta','soup','hot food','baguette','roll','bowl'];
const ALL_SNACK_CATEGORIES = ['crisps','savoury snack','chocolate','sweet snack','fruit','cake/pastry','cereal bar','nuts'];
const ALL_DRINK_CATEGORIES = ['water','juice','fizzy drink','hot drink','smoothie','energy drink','iced coffee'];

function matchesDietary(item, prefs) {
  if (prefs.glutenFree  && !item.isGlutenFree)   return false;
  if (prefs.dairyFree   && !item.isDairyFree)    return false;
  if (prefs.lactoseFree && !item.isLactoseFree)  return false;
  if (prefs.halal       && !item.isHalal)        return false;
  if (prefs.nutFree     && !item.isNutFree)      return false;
  if (prefs.highProtein && !item.isHighProtein)  return false;
  if (prefs.lowCalorie  && !item.isLowCalorie)   return false;
  switch (prefs.dietary) {
    case 'vegan':       return !!item.isVegan;
    case 'vegetarian':  return !!item.isVegetarian || !!item.isVegan;
    case 'pescetarian': return !!item.isPescetarian || !!item.isVegetarian || !!item.isVegan;
    default:            return true;
  }
}

async function loadShop(filePath) {
  let src = readFileSync(filePath, 'utf8');
  src = src.replace(/import type .+;\n/g, '');
  src = src.replace(/import .+;\n/g, '');
  src = src.replace(/: ShopDefinition/g, '');
  src = src.replace(/export const (\w+)/g, 'const $1');
  const match = src.match(/^const (\w+) = \{/m);
  const varName = match[1];
  src += `\nexport default ${varName};`;
  const encoded = Buffer.from(src).toString('base64');
  const mod = await import(`data:text/javascript;base64,${encoded}`);
  return mod.default;
}

const shopFiles = ['tesco','sainsburys','morrisons','boots','coop','marks_spencer','greggs'];
const base = path.resolve(process.cwd(), 'src/data');
const shops = await Promise.all(shopFiles.map(n => loadShop(path.join(base, `${n}.ts`))));

const FILTERS = [
  { label: 'vegan',        prefs: { dietary:'vegan', glutenFree:false, dairyFree:false, lactoseFree:false, halal:false, nutFree:false, highProtein:false, lowCalorie:false } },
  { label: 'vegetarian',   prefs: { dietary:'vegetarian', glutenFree:false, dairyFree:false, lactoseFree:false, halal:false, nutFree:false, highProtein:false, lowCalorie:false } },
  { label: 'highProtein',  prefs: { dietary:'none', glutenFree:false, dairyFree:false, lactoseFree:false, halal:false, nutFree:false, highProtein:true, lowCalorie:false } },
  { label: 'lowCalorie',   prefs: { dietary:'none', glutenFree:false, dairyFree:false, lactoseFree:false, halal:false, nutFree:false, highProtein:false, lowCalorie:true } },
  { label: 'glutenFree',   prefs: { dietary:'none', glutenFree:true, dairyFree:false, lactoseFree:false, halal:false, nutFree:false, highProtein:false, lowCalorie:false } },
  { label: 'lactoseFree',  prefs: { dietary:'none', glutenFree:false, dairyFree:false, lactoseFree:true, halal:false, nutFree:false, highProtein:false, lowCalorie:false } },
  { label: 'vegan+GF',     prefs: { dietary:'vegan', glutenFree:true, dairyFree:false, lactoseFree:false, halal:false, nutFree:false, highProtein:false, lowCalorie:false } },
];

const ALL_CATS = { main: ALL_MAIN_CATEGORIES, snack: ALL_SNACK_CATEGORIES, drink: ALL_DRINK_CATEGORIES };

for (const { label, prefs } of FILTERS) {
  console.log(`\n── ${label} ──────────────────────────────`);
  for (const shop of shops) {
    const gaps = [];
    for (const [slot, cats] of Object.entries(ALL_CATS)) {
      for (const cat of cats) {
        const count = shop.items.filter(i => i.slot === slot && i.category === cat && matchesDietary(i, prefs)).length;
        const total = shop.items.filter(i => i.slot === slot && i.category === cat).length;
        if (total > 0 && count === 0) gaps.push(`${slot}/${cat}`);
      }
    }
    if (gaps.length > 0) {
      console.log(`  ${shop.displayName.padEnd(14)} gaps: ${gaps.join(', ')}`);
    }
  }
}

// Also show full item counts per shop
console.log('\n\n── Item counts per shop ─────────────────────────────');
for (const shop of shops) {
  const mains  = shop.items.filter(i => i.slot === 'main').length;
  const snacks = shop.items.filter(i => i.slot === 'snack').length;
  const drinks = shop.items.filter(i => i.slot === 'drink').length;
  const vegan  = shop.items.filter(i => i.isVegan).length;
  const hp     = shop.items.filter(i => i.isHighProtein).length;
  const lc     = shop.items.filter(i => i.isLowCalorie).length;
  console.log(`  ${shop.displayName.padEnd(14)} mains=${mains} snacks=${snacks} drinks=${drinks} | vegan=${vegan} highProtein=${hp} lowCalorie=${lc}`);
}
