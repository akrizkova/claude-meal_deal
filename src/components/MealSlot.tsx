import type { MealDealItem, SlotType } from '../types';
import { formatPrice } from '../types';

const slotLabel: Record<SlotType, string> = {
  main: 'Main',
  snack: 'Snack',
  drink: 'Drink',
};

const slotEmoji: Record<SlotType, string> = {
  main: '🥙',
  snack: '🍫',
  drink: '🥤',
};

interface Props {
  slot: SlotType;
  item: MealDealItem;
  onShuffle: () => void;
}

export function MealSlot({ slot, item, onShuffle }: Props) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-3 h-full">
      <div className="flex flex-col items-center min-w-10">
        <span className="text-2xl">{slotEmoji[slot]}</span>
        <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wide mt-0.5">
          {slotLabel[slot]}
        </span>
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-semibold text-gray-900 text-sm leading-snug">{item.name}</p>
        <div className="flex items-center gap-2 mt-1 flex-wrap">
          <span className="text-[11px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full capitalize">
            {item.category}
          </span>
          <span className="text-[11px] font-semibold text-gray-700">{formatPrice(item.price)}</span>
          {item.kcal !== undefined && (
            <span className="text-[11px] text-gray-400">{item.kcal} kcal</span>
          )}
          {item.isVegan && (
            <span className="text-[11px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Vegan</span>
          )}
          {!item.isVegan && item.isVegetarian && (
            <span className="text-[11px] bg-green-50 text-green-600 px-2 py-0.5 rounded-full">Veggie</span>
          )}
          {item.isGlutenFree && (
            <span className="text-[11px] bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">GF</span>
          )}
          {item.isDairyFree && (
            <span className="text-[11px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">DF</span>
          )}
        </div>
      </div>

      <button
        onClick={onShuffle}
        aria-label={`Shuffle ${slotLabel[slot]}`}
        className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 active:bg-gray-200 transition-colors flex-shrink-0"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 3 21 3 21 8" />
          <line x1="4" y1="20" x2="21" y2="3" />
          <polyline points="21 16 21 21 16 21" />
          <line x1="15" y1="15" x2="21" y2="21" />
        </svg>
      </button>
    </div>
  );
}
