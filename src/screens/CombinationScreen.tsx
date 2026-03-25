import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MealSlot } from '../components/MealSlot';
import { shopById } from '../data';
import type { SlotType } from '../types';

export function CombinationScreen() {
  const { state, dispatch } = useApp();
  const combo = state.currentCombination!;
  const shop = shopById[combo.shopId];
  const [justSaved, setJustSaved] = useState(false);

  const isSaved = state.savedCombinations.some(
    (c) =>
      c.main.id === combo.main.id &&
      c.snack.id === combo.snack.id &&
      c.drink.id === combo.drink.id,
  );

  function handleSave() {
    if (isSaved) return;
    dispatch({ type: 'SAVE_COMBINATION' });
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 1500);
  }

  function handleShuffle(slot: SlotType) {
    dispatch({ type: 'SHUFFLE_SLOT', payload: slot });
  }

  return (
    <div className="flex flex-col min-h-svh pb-20">
      <div className={`${shop.colour} px-5 pt-10 pb-6`}>
        <button
          onClick={() => dispatch({ type: 'NAVIGATE', payload: 'preferences' })}
          className="text-white/80 text-sm mb-3 flex items-center gap-1"
        >
          ‹ Back
        </button>
        <h2 className="text-2xl font-bold text-white">Your meal deal</h2>
        <p className="text-white/80 text-sm mt-1">{shop.displayName} · Tap 🔀 to shuffle any item</p>
      </div>

      <div className="flex-1 max-w-4xl w-full mx-auto px-5 pt-5">
        {/* On desktop: 3 slots side by side */}
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1">
            <MealSlot slot="main"  item={combo.main}  onShuffle={() => handleShuffle('main')}  />
          </div>
          <div className="flex-1">
            <MealSlot slot="snack" item={combo.snack} onShuffle={() => handleShuffle('snack')} />
          </div>
          <div className="flex-1">
            <MealSlot slot="drink" item={combo.drink} onShuffle={() => handleShuffle('drink')} />
          </div>
        </div>
      </div>

      <div className="px-5 pt-4 max-w-4xl w-full mx-auto flex flex-col gap-3 md:flex-row-reverse">
        <button
          onClick={handleSave}
          disabled={isSaved}
          className={`flex-1 py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 transition-all ${
            isSaved
              ? 'bg-red-50 text-red-500 border-2 border-red-200'
              : 'bg-red-500 text-white active:opacity-80'
          }`}
        >
          {isSaved ? <>❤️ Saved</> : justSaved ? <>✓ Saved!</> : <>🤍 Save this deal</>}
        </button>

        <button
          onClick={() => dispatch({ type: 'GENERATE_COMBINATION' })}
          className="flex-1 py-3 rounded-2xl border-2 border-gray-200 text-gray-700 font-medium text-sm active:bg-gray-50 transition-colors"
        >
          Shuffle everything
        </button>

        <button
          onClick={() => dispatch({ type: 'RESET' })}
          className="text-center text-sm text-gray-400 py-1 md:self-center md:px-3"
        >
          Start over
        </button>
      </div>
    </div>
  );
}
