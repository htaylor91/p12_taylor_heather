import * as React from 'react';
import '../styles/App.css';
import { Outlet } from "react-router-dom";
import { CurrentUserProvider } from '../contexts/CurrentUserContext';
import { ServiceProvider } from '../contexts/ServiceContext';

import HeaderNavigation from '../components/HeaderNavigation';
import SideNavigation from '../components/SideNavigation';

function App() {
  return (
    <div className="App">
      <CurrentUserProvider>
        <ServiceProvider>
          <HeaderNavigation />
          <SideNavigation />
            <Outlet />
        </ServiceProvider>
      </CurrentUserProvider>
    </div>
  )
}

export default App