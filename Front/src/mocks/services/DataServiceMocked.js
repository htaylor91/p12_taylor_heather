
/**
 * A data service class for mocked api data
 */
class DataServiceMocked {
    /**
     * @param {Array<Object>} endpoint 
     */
    constructor(endpoint) {
        /**
         * @property {Array<Object>} this.endpoint - The mocked api endpoint
         */
        this.endpoint = endpoint;
    }

    /**
     * Get data from a mocked api endpoint
     * @async
     * @param {Number} userId 
     * @param {Function} setData 
     * @param {Function} setLoading 
     * @param {Function} setError
     * @returns {Promise<void>}
     */
    async getData(userId, setData, setLoading, setError) {
        try {
            const mockedData = this.endpoint;
            const data = mockedData.find(data => data.userId === userId || data.id === userId);
            setData(data);
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    }
}

export default DataServiceMocked;