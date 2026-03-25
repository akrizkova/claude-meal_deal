import { useApp } from '../context/AppContext';
import { SavedCombinationCard } from '../components/SavedCombinationCard';

export function SavedScreen() {
  const { state, dispatch } = useApp();

  return (
    <div className="flex flex-col min-h-svh pb-20">
      <div className="px-5 pt-10 pb-6 max-w-5xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-gray-900">Saved deals</h2>
        <p className="text-gray-500 text-sm mt-1">
          {state.savedCombinations.length === 0
            ? 'None saved yet'
            : `${state.savedCombinations.length} saved`}
        </p>
      </div>

      {state.savedCombinations.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center gap-4 px-5 pb-20">
          <span className="text-5xl">🤍</span>
          <p className="text-gray-500 text-center text-sm">
            Save combinations you like and they'll appear here.
          </p>
          <button
            onClick={() => dispatch({ type: 'NAVIGATE', payload: 'shop' })}
            className="bg-gray-900 text-white px-6 py-3 rounded-2xl font-medium text-sm"
          >
            Start picking
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-5 max-w-5xl mx-auto w-full">
          {state.savedCombinations.map((combo) => (
            <SavedCombinationCard
              key={combo.id}
              combo={combo}
              onDelete={(id) => dispatch({ type: 'DELETE_COMBINATION', payload: id })}
            />
          ))}
        </div>
      )}
    </div>
  );
}
