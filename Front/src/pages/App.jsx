import '../styles/App.css';
import { Outlet } from "react-router-dom";
import CurrentUserProvider from '../contexts/CurrentUserProvider';
import CurrentServiceProvider from '../contexts/CurrentServiceProvider';
import HeaderNavigation from '../components/HeaderNavigation';
import SideNavigation from '../components/SideNavigation';

/**
 * @external Outlet
 * @see {@link https://reactrouter.com/en/main/components/outlet}
 */
/**
 * @component
 * @see {@link external:Outlet}
 */
function App() {
  return (
    <div className="App">
      <CurrentUserProvider>
          <CurrentServiceProvider>
            <HeaderNavigation />
            <SideNavigation />
            <Outlet />
          </CurrentServiceProvider>
      </CurrentUserProvider>
    </div>
  )
}

export default App