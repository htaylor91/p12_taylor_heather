import { useState, useEffect } from 'react';
import { useCurrentUser } from '../hooks/useCurrentUser';
import { useCurrentService } from '../hooks/useCurrentService';

/**
 * A custom React hook to call the getData method of the current service
 * @param {String} subService "activityService, userService, performanceService, sessionsService"
 * @returns {{loading: boolean, error: boolean, data: Object | null}} - An object containing 3 properties: loading, error, and data
 */
function useAxios(subService) {
    const {currentService} = useCurrentService();
    const {currentUser} = useCurrentUser();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        currentService[subService].getData(currentUser, setData, setLoading, setError);
    }, []);

    return {loading, error, data};
}

export default useAxios;