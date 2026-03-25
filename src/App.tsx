import { AppProvider, useApp } from './context/AppContext';
import { ShopScreen } from './screens/ShopScreen';
import { PreferencesScreen } from './screens/PreferencesScreen';
import { CombinationScreen } from './screens/CombinationScreen';
import { SavedScreen } from './screens/SavedScreen';
import { NavBar } from './components/NavBar';

function AppContent() {
  const { state } = useApp();

  return (
    <div className="bg-gray-50 min-h-svh">
      <NavBar />
      {/* offset for desktop top nav */}
      <div className="md:pt-14">
        {state.screen === 'shop'        && <ShopScreen />}
        {state.screen === 'preferences' && <PreferencesScreen />}
        {state.screen === 'combination' && <CombinationScreen />}
        {state.screen === 'saved'       && <SavedScreen />}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
