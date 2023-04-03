import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/contexts.js';

/**
 * A custom React hook to access the current userId (12 or 18) and the toggleCurrentUser function.
 * @returns {{currentUser : number, toggleCurrentUser: function}} - A context object with two properties: currentUser and toggleCurrentUser
 */
export function useCurrentUser(){
    return useContext(CurrentUserContext);
}