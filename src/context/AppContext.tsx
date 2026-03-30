import { createContext, useContext, useReducer, useEffect, type ReactNode } from 'react';
import type { ShopId, Preferences, Combination, SlotType, MealDealItem } from '../types';
import type { MainCategory, SnackCategory, DrinkCategory } from '../types';
import { ALL_MAIN_CATEGORIES, ALL_SNACK_CATEGORIES, ALL_DRINK_CATEGORIES } from '../types';
import { shopById } from '../data';

// ── State ─────────────────────────────────────────────────────────────────────

export type Screen = 'shop' | 'preferences' | 'combination' | 'saved';

interface AppState {
  screen: Screen;
  selectedShop: ShopId | null;
  preferences: Preferences;
  currentCombination: Combination | null;
  savedCombinations: Combination[];
  noComboError: boolean;
}

// ── Actions ───────────────────────────────────────────────────────────────────

type AppAction =
  | { type: 'SELECT_SHOP'; payload: ShopId }
  | { type: 'SET_PREFERENCES'; payload: Preferences }
  | { type: 'GENERATE_COMBINATION' }
  | { type: 'SHUFFLE_SLOT'; payload: SlotType }
  | { type: 'SAVE_COMBINATION' }
  | { type: 'DELETE_COMBINATION'; payload: string }
  | { type: 'NAVIGATE'; payload: Screen }
  | { type: 'RESET' };

// ── Helpers ───────────────────────────────────────────────────────────────────

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function matchesDietary(item: MealDealItem, prefs: Preferences): boolean {
  if (prefs.glutenFree  && !item.isGlutenFree)   return false;
  if (prefs.dairyFree   && !item.isDairyFree)    return false;
  if (prefs.lactoseFree && !item.isLactoseFree)  return false;
  if (prefs.halal       && !item.isHalal)        return false;
  if (prefs.nutFree     && !item.isNutFree)      return false;
  // highProtein is a food filter — drinks aren't expected to be high-protein
  if (prefs.highProtein && item.slot !== 'drink' && !item.isHighProtein) return false;
  if (prefs.lowCalorie  && !item.isLowCalorie)   return false;
  switch (prefs.dietary) {
    case 'vegan':       return !!item.isVegan;
    case 'vegetarian':  return !!item.isVegetarian || !!item.isVegan;
    case 'pescetarian': return !!item.isPescetarian || !!item.isVegetarian || !!item.isVegan;
    default:            return true;
  }
}

function buildCombination(shopId: ShopId, preferences: Preferences): Combination | null {
  const shop = shopById[shopId];

  const mainItems = shop.items.filter(
    (i) =>
      i.slot === 'main' &&
      preferences.mains.includes(i.category as MainCategory) &&
      matchesDietary(i, preferences),
  );
  const snackItems = shop.items.filter(
    (i) =>
      i.slot === 'snack' &&
      preferences.snacks.includes(i.category as SnackCategory) &&
      matchesDietary(i, preferences),
  );
  const drinkItems = shop.items.filter(
    (i) =>
      i.slot === 'drink' &&
      preferences.drinks.includes(i.category as DrinkCategory) &&
      matchesDietary(i, preferences),
  );

  if (!mainItems.length || !snackItems.length || !drinkItems.length) return null;

  return {
    id: generateId(),
    shopId,
    main: pickRandom(mainItems),
    snack: pickRandom(snackItems),
    drink: pickRandom(drinkItems),
  };
}

function shuffleSlot(combination: Combination, slot: SlotType, preferences: Preferences): Combination {
  const shop = shopById[combination.shopId];
  let pool: MealDealItem[] = [];

  if (slot === 'main') {
    pool = shop.items.filter(
      (i) =>
        i.slot === 'main' &&
        preferences.mains.includes(i.category as MainCategory) &&
        matchesDietary(i, preferences),
    );
  } else if (slot === 'snack') {
    pool = shop.items.filter(
      (i) =>
        i.slot === 'snack' &&
        preferences.snacks.includes(i.category as SnackCategory) &&
        matchesDietary(i, preferences),
    );
  } else {
    pool = shop.items.filter(
      (i) =>
        i.slot === 'drink' &&
        preferences.drinks.includes(i.category as DrinkCategory) &&
        matchesDietary(i, preferences),
    );
  }

  if (pool.length <= 1) return combination;
  const current = combination[slot];
  const filtered = pool.filter((i) => i.id !== current.id);
  return { ...combination, [slot]: pickRandom(filtered.length ? filtered : pool) };
}

// ── Reducer ───────────────────────────────────────────────────────────────────

const defaultPreferences: Preferences = {
  mains: [...ALL_MAIN_CATEGORIES],
  snacks: [...ALL_SNACK_CATEGORIES],
  drinks: [...ALL_DRINK_CATEGORIES],
  dietary: 'none',
  glutenFree: false,
  dairyFree: false,
  lactoseFree: false,
  halal: false,
  nutFree: false,
  highProtein: false,
  lowCalorie: false,
};

function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SELECT_SHOP':
      return {
        ...state,
        selectedShop: action.payload,
        preferences: { ...defaultPreferences },
        screen: 'preferences',
        noComboError: false,
      };

    case 'SET_PREFERENCES': {
      if (!state.selectedShop) return state;
      const combo = buildCombination(state.selectedShop, action.payload);
      return {
        ...state,
        preferences: action.payload,
        currentCombination: combo,
        screen: combo ? 'combination' : state.screen,
        noComboError: combo === null,
      };
    }

    case 'GENERATE_COMBINATION': {
      if (!state.selectedShop) return state;
      const combo = buildCombination(state.selectedShop, state.preferences);
      return { ...state, currentCombination: combo, screen: combo ? 'combination' : state.screen, noComboError: combo === null };
    }

    case 'SHUFFLE_SLOT': {
      if (!state.currentCombination) return state;
      return {
        ...state,
        currentCombination: shuffleSlot(state.currentCombination, action.payload, state.preferences),
      };
    }

    case 'SAVE_COMBINATION': {
      if (!state.currentCombination) return state;
      const alreadySaved = state.savedCombinations.some(
        (c) =>
          c.main.id === state.currentCombination!.main.id &&
          c.snack.id === state.currentCombination!.snack.id &&
          c.drink.id === state.currentCombination!.drink.id,
      );
      if (alreadySaved) return state;
      const saved = { ...state.currentCombination, savedAt: Date.now(), id: generateId() };
      return { ...state, savedCombinations: [saved, ...state.savedCombinations] };
    }

    case 'DELETE_COMBINATION':
      return {
        ...state,
        savedCombinations: state.savedCombinations.filter((c) => c.id !== action.payload),
      };

    case 'NAVIGATE':
      return { ...state, screen: action.payload, noComboError: false };

    case 'RESET':
      return { ...state, screen: 'shop', selectedShop: null, currentCombination: null, noComboError: false };

    default:
      return state;
  }
}

// ── Initial state ─────────────────────────────────────────────────────────────

function loadSaved(): Combination[] {
  try {
    const raw = localStorage.getItem('mealDealSaved');
    return raw ? (JSON.parse(raw) as Combination[]) : [];
  } catch {
    return [];
  }
}

const initialState: AppState = {
  screen: 'shop',
  selectedShop: null,
  preferences: { ...defaultPreferences },
  currentCombination: null,
  savedCombinations: loadSaved(),
  noComboError: false,
};

// ── Context ───────────────────────────────────────────────────────────────────

interface AppContextValue {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('mealDealSaved', JSON.stringify(state.savedCombinations));
  }, [state.savedCombinations]);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
