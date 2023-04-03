import { useState} from 'react';
import PropTypes from 'prop-types';
import { CurrentUserContext } from './contexts.js';

/**
 * @component
 */
function CurrentUserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(12);

    /**
     * Toggle the current user id between user 12 and user 18.
     */
    function toggleCurrentUser() {
        return currentUser === 12 ? setCurrentUser(18) : setCurrentUser(12)
    }

    return (
        <CurrentUserContext.Provider value={{currentUser, toggleCurrentUser}}>
            {children}
        </CurrentUserContext.Provider>
    );
}

CurrentUserProvider.propTypes = {
    /**
     * Child component wrapped by CurrentUserContext.Provider
     */
    children: PropTypes.element.isRequired,
}

export default CurrentUserProvider;