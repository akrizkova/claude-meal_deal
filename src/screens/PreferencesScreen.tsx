import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PreferenceCategoryGroup } from '../components/PreferenceCategoryGroup';
import { shopById } from '../data';
import {
  ALL_MAIN_CATEGORIES,
  ALL_SNACK_CATEGORIES,
  ALL_DRINK_CATEGORIES,
} from '../types';
import type { MainCategory, SnackCategory, DrinkCategory, DietaryType } from '../types';

const DIETARY_OPTIONS: { value: DietaryType; label: string; emoji: string }[] = [
  { value: 'none',         label: 'No preference', emoji: '🍽️' },
  { value: 'vegetarian',  label: 'Vegetarian',     emoji: '🥗' },
  { value: 'vegan',       label: 'Vegan',          emoji: '🌱' },
  { value: 'pescetarian', label: 'Pescetarian',    emoji: '🐟' },
];

type ExtraKey = 'glutenFree' | 'dairyFree' | 'lactoseFree' | 'halal' | 'nutFree' | 'highProtein' | 'lowCalorie';

const EXTRA_FILTERS: { key: ExtraKey; label: string; emoji: string }[] = [
  { key: 'glutenFree',   label: 'Gluten-free',    emoji: '🌾' },
  { key: 'dairyFree',    label: 'Dairy-free',     emoji: '🥛' },
  { key: 'lactoseFree',  label: 'Lactose-free',   emoji: '🧀' },
  { key: 'halal',        label: 'Halal',          emoji: '☪️' },
  { key: 'nutFree',      label: 'Nut-free',       emoji: '🥜' },
  { key: 'highProtein',  label: 'High protein',   emoji: '💪' },
  { key: 'lowCalorie',   label: 'Low calorie',    emoji: '🔥' },
];

export function PreferencesScreen() {
  const { state, dispatch } = useApp();
  const shop = shopById[state.selectedShop!];

  const [mains, setMains]     = useState<MainCategory[]>(state.preferences.mains);
  const [snacks, setSnacks]   = useState<SnackCategory[]>(state.preferences.snacks);
  const [drinks, setDrinks]   = useState<DrinkCategory[]>(state.preferences.drinks);
  const [dietary, setDietary] = useState<DietaryType>(state.preferences.dietary);
  const [extras, setExtras]   = useState<Record<ExtraKey, boolean>>({
    glutenFree:  state.preferences.glutenFree,
    dairyFree:   state.preferences.dairyFree,
    lactoseFree: state.preferences.lactoseFree,
    halal:       state.preferences.halal,
    nutFree:     state.preferences.nutFree,
    highProtein: state.preferences.highProtein,
    lowCalorie:  state.preferences.lowCalorie,
  });

  function toggleExtra(key: ExtraKey) {
    setExtras((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  const canGenerate = mains.length > 0 && snacks.length > 0 && drinks.length > 0;

  function handleGenerate() {
    if (!canGenerate) return;
    dispatch({
      type: 'SET_PREFERENCES',
      payload: { mains, snacks, drinks, dietary, ...extras },
    });
  }

  return (
    <div className="flex flex-col min-h-svh pb-20">
      {/* Header */}
      <div className={`${shop.colour} px-5 pt-10 pb-6`}>
        <button
          onClick={() => dispatch({ type: 'NAVIGATE', payload: 'shop' })}
          className="text-white/80 text-sm mb-3 flex items-center gap-1"
        >
          ‹ Back
        </button>
        <h2 className="text-2xl font-bold text-white">{shop.displayName}</h2>
        <p className="text-white/80 text-sm mt-1">Pick your preferences</p>
      </div>

      <div className="flex-1 px-5 pt-6 max-w-4xl w-full mx-auto">
        {/* Dietary requirements */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 text-base mb-3">🥦 Dietary requirements</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {DIETARY_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setDietary(opt.value)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  dietary === opt.value
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'bg-white text-gray-600 border-gray-300'
                }`}
              >
                <span>{opt.emoji}</span>
                <span>{opt.label}</span>
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {EXTRA_FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => toggleExtra(f.key)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  extras[f.key]
                    ? 'bg-amber-600 text-white border-amber-600'
                    : 'bg-white text-gray-600 border-gray-300'
                }`}
              >
                <span>{f.emoji}</span>
                <span>{f.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* On desktop: 3 columns */}
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <PreferenceCategoryGroup
            label="Main"
            emoji="🥙"
            options={[...ALL_MAIN_CATEGORIES]}
            selected={mains}
            onChange={(v) => setMains(v as MainCategory[])}
          />
          <PreferenceCategoryGroup
            label="Snack"
            emoji="🍫"
            options={[...ALL_SNACK_CATEGORIES]}
            selected={snacks}
            onChange={(v) => setSnacks(v as SnackCategory[])}
          />
          <PreferenceCategoryGroup
            label="Drink"
            emoji="🥤"
            options={[...ALL_DRINK_CATEGORIES]}
            selected={drinks}
            onChange={(v) => setDrinks(v as DrinkCategory[])}
          />
        </div>
      </div>

      <div className="px-5 pt-2 max-w-4xl w-full mx-auto">
        {!canGenerate && (
          <p className="text-sm text-red-500 mb-2 text-center">
            Please select at least one option for each category.
          </p>
        )}
        <button
          onClick={handleGenerate}
          disabled={!canGenerate}
          className={`w-full py-4 rounded-2xl text-white font-bold text-base transition-opacity ${
            canGenerate ? `${shop.colour} active:opacity-80` : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          Build my meal deal →
        </button>
      </div>
    </div>
  );
}
