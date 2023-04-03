import { useState } from 'react';
import PropTypes from 'prop-types';
import { SportSeeAPIMocked } from "../mocks/services/MockedService";
import { SportSeeAPI } from "../services/APIService";
import { CurrentServiceContext } from './contexts.js';


/**
 * @component
 */
function CurrentServiceProvider({ children }) {
    const [currentService, setCurrentService] = useState(SportSeeAPIMocked);

    /**
     * Toggle the current service between SportSeeAPIMocked and SportSeeAPI.
     */
    function toggleCurrentService() {
        return currentService === SportSeeAPIMocked ? 
        setCurrentService(SportSeeAPI) : setCurrentService(SportSeeAPIMocked);
    }
    return (
        <CurrentServiceContext.Provider value={{currentService, toggleCurrentService}}>
            {children}
        </CurrentServiceContext.Provider>
    );
}

CurrentServiceProvider.propTypes = {
    /**
     * Array of child components to be wrapped by CurrentServiceContext.Provider
     */
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export default CurrentServiceProvider;