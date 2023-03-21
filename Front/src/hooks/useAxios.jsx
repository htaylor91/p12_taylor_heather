import { useContext, useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { ServiceContext } from '../contexts/ServiceContext';

export default function useAxios(subService) {
    const userId = useContext(CurrentUserContext).currentUser;
    const serviceContext = useContext(ServiceContext).currentService;

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        serviceContext[subService].getData(userId, setData, setLoading, setError);
    }, [userId]);

    return [data, loading, error];
}
