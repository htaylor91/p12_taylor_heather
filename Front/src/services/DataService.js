import axios from 'axios';
/**
 * @external axios
 * @see {@link https://axios-http.com/docs/intro}
 */

/**
 * axiosInstance
 * @memberof DataService
 * @see {@link external:axios}
 */
const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/user/",
});

/**
 * @property {string} this.endpoint
 */
class DataService {
    /**
     * @param {string} endpoint - The endpoint of the API call 
     */
    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    /**
     * Request data from the given endpoint
     * 
     * @async
     * @param {Number} userId - The user id
     * @param {Function} setData - The function to set the data state
     * @param {Function} setLoading - The function to set the loading state
     * @param {Function} setError - The function to set the error state
     * @returns {Promise<void>}
     */ 
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