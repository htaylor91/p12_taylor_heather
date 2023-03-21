import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/user/",
});

class DataService {
    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    async getData(userId, setData, setLoading, setError) {
        try {
            const response = await axiosInstance.get(`${userId}${this.endpoint}`);
            const responseData = await response.data;
            const data = await responseData.data;
            setData(data);
            setLoading(false);
        } catch (error) {
            console.log(error)
            setError(true);
            setLoading(false);
        }
    }
}

export default DataService;