import * as React from 'react';
import '../styles/App.css'
import PropTypes from "prop-types";
import { useState} from "react";
import { Outlet } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { ServiceContext } from "../contexts/ServiceContext";


import HeaderNavigation from '../components/HeaderNavigation'
import SideNavigation from '../components/SideNavigation'

function App({userId, service}) {
  const [currentUser, setCurrentUser] = useState(userId);
  const [currentService, setCurrentService] = useState(service);
  
  return (
    <div className="App">
      <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
        <ServiceContext.Provider value={{currentService, setCurrentService}}>
          <HeaderNavigation />
          <SideNavigation />
          <Outlet />
        </ServiceContext.Provider>
      </CurrentUserContext.Provider>

    </div>
  )
}

App.propTypes = {
  userId: PropTypes.number.isRequired,
  service: PropTypes.object.isRequired
}

export default App
