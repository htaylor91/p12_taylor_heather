import { useState, useEffect } from 'react';
import { useCurrentUser } from '../contexts/CurrentUserContext';
import { useService } from '../contexts/ServiceContext';

export default function useAxios(subService) {
    const userId = useCurrentUser();
    const serviceContext = useService();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        serviceContext[subService].getData(userId, setData, setLoading, setError);
    }, [userId]);

    return [loading, error, data];
}
