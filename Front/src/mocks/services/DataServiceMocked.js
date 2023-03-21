class DataServiceMocked {
    constructor(endpoint) {
        this.endpoint = endpoint;
    }

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