import { shops } from '../data';
import { useApp } from '../context/AppContext';
import { formatPrice } from '../types';

export function ShopScreen() {
  const { dispatch } = useApp();

  return (
    <div className="flex flex-col min-h-svh pb-20">
      {/* Hero */}
      <div className="px-5 pt-12 pb-8 text-center max-w-lg mx-auto w-full">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
          Meal Deal Picker
        </h1>
        <p className="text-gray-500 text-base leading-relaxed">
          Can't decide what to get? Pick a shop, set your preferences, and we'll build your perfect meal deal combo. Shuffle anything you don't fancy, or save deals to revisit later.
        </p>
      </div>

      {/* How it works */}
      <div className="px-5 max-w-lg mx-auto w-full mb-8">
        <div className="flex justify-between gap-4 text-center">
          {[
            { step: '1', text: 'Choose your shop' },
            { step: '2', text: 'Set preferences' },
            { step: '3', text: 'Get your combo' },
          ].map(({ step, text }) => (
            <div key={step} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-8 h-8 rounded-full bg-gray-900 text-white text-sm font-bold flex items-center justify-center">
                {step}
              </div>
              <p className="text-xs text-gray-500">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Shop list */}
      <div className="flex flex-col gap-3 px-5 max-w-lg mx-auto w-full sm:grid sm:grid-cols-2 sm:max-w-2xl lg:grid-cols-4 lg:max-w-5xl">
        {shops.map((shop) => (
          <button
            key={shop.id}
            onClick={() => dispatch({ type: 'SELECT_SHOP', payload: shop.id })}
            className="flex items-stretch bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md active:scale-[0.98] transition-all text-left"
          >
            <div className={`w-1.5 shrink-0 ${shop.colour}`} />
            <div className="flex flex-col justify-center px-4 py-4 flex-1 min-w-0">
              <span className={`font-bold text-base ${shop.textColour}`}>{shop.displayName}</span>
              <span className="text-xs text-gray-400 mt-0.5">Meal deal from {formatPrice(shop.mealDealPrice)}</span>
            </div>
            <div className="flex items-center pr-4 text-gray-300 text-lg">›</div>
          </button>
        ))}
      </div>

      <div className="mt-auto px-5 pt-8 pb-4 max-w-lg mx-auto w-full text-center">
        <p className="text-xs text-gray-400 leading-relaxed">
          <span className="font-semibold text-gray-500">Data disclaimer:</span> Item names, prices, and dietary information are hand-curated based on publicly available supermarket data and general UK meal deal knowledge as of early 2025. They are illustrative and <span className="italic">not</span> sourced from live store systems. Availability, prices, and ranges vary by location and change regularly — always check in-store before purchasing.
        </p>
      </div>
    </div>
  );
}
