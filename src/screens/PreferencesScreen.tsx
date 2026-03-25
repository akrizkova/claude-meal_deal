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

const EXTRA_FILTERS: { key: 'glutenFree' | 'dairyFree' | 'halal' | 'nutFree'; label: string; emoji: string }[] = [
  { key: 'glutenFree', label: 'Gluten-free', emoji: '🌾' },
  { key: 'dairyFree',  label: 'Dairy-free',  emoji: '🥛' },
  { key: 'halal',      label: 'Halal',       emoji: '☪️' },
  { key: 'nutFree',    label: 'Nut-free',    emoji: '🥜' },
];

export function PreferencesScreen() {
  const { state, dispatch } = useApp();
  const shop = shopById[state.selectedShop!];

  const [mains, setMains]       = useState<MainCategory[]>([...ALL_MAIN_CATEGORIES]);
  const [snacks, setSnacks]     = useState<SnackCategory[]>([...ALL_SNACK_CATEGORIES]);
  const [drinks, setDrinks]     = useState<DrinkCategory[]>([...ALL_DRINK_CATEGORIES]);
  const [dietary, setDietary]   = useState<DietaryType>('none');
  const [extras, setExtras]     = useState({ glutenFree: false, dairyFree: false, halal: false, nutFree: false });

  function toggleExtra(key: keyof typeof extras) {
    setExtras((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function handleGenerate() {
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
        <button
          onClick={handleGenerate}
          className={`w-full py-4 rounded-2xl text-white font-bold text-base ${shop.colour} active:opacity-80 transition-opacity`}
        >
          Build my meal deal →
        </button>
      </div>
    </div>
  );
}
