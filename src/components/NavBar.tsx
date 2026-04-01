import { useApp } from '../context/AppContext';
import type { Screen } from '../context/AppContext';

export function NavBar() {
  const { state, dispatch } = useApp();
  const savedCount = state.savedCombinations.length;

  function goToPicker() {
    if (state.currentCombination) {
      dispatch({ type: 'NAVIGATE', payload: 'combination' });
    } else {
      dispatch({ type: 'NAVIGATE', payload: 'shop' });
    }
  }

  function nav(screen: Screen) {
    dispatch({ type: 'NAVIGATE', payload: screen });
  }

  const isPickerActive = state.screen !== 'saved';
  const isSavedActive  = state.screen === 'saved';

  return (
    <>
      {/* Mobile: bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex z-10">
        <button
          onClick={goToPicker}
          className={`flex-1 flex flex-col items-center py-3 gap-0.5 text-xs font-medium transition-colors ${
            isPickerActive ? 'text-gray-900' : 'text-gray-400'
          }`}
        >
          <span className="text-xl">🥪</span>
          <span>Oracle</span>
        </button>
        <button
          onClick={() => nav('saved')}
          className={`flex-1 flex flex-col items-center py-3 gap-0.5 text-xs font-medium transition-colors relative ${
            isSavedActive ? 'text-gray-900' : 'text-gray-400'
          }`}
        >
          <span className="text-xl relative">
            ❤️
            {savedCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold leading-none">
                {savedCount > 9 ? '9+' : savedCount}
              </span>
            )}
          </span>
          <span>Saved</span>
        </button>
      </nav>

      {/* Desktop: top nav */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10 h-14 items-center px-6 gap-6">
        <button
          onClick={() => dispatch({ type: 'NAVIGATE', payload: 'shop' })}
          className="text-lg font-bold text-gray-900 mr-4"
        >
          🥪 Meal Deal Oracle
        </button>

        <button
          onClick={goToPicker}
          className={`text-sm font-medium px-3 py-1.5 rounded-lg transition-colors ${
            isPickerActive ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:text-gray-900'
          }`}
        >
          Oracle
        </button>

        <button
          onClick={() => nav('saved')}
          className={`text-sm font-medium px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
            isSavedActive ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:text-gray-900'
          }`}
        >
          Saved
          {savedCount > 0 && (
            <span className="bg-red-500 text-white text-[10px] rounded-full min-w-4 h-4 px-1 flex items-center justify-center font-bold leading-none">
              {savedCount > 9 ? '9+' : savedCount}
            </span>
          )}
        </button>
      </nav>
    </>
  );
}
