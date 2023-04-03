import { useContext } from 'react';
import { CurrentServiceContext } from '../contexts/contexts.js';

/**
 * A custom React hook to access the current service (APIService or MockedService) and the toggleCurrentService function.
 * @returns {{currentService : object, toggleCurrentService: function}} - A context object with two properties: currentService and toggleCurrentService.
 */
export function useCurrentService(){
    return useContext(CurrentServiceContext);
}
