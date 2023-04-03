/**
 * Model for the performance data
 * @property {Object[]} performance - The formatted performance data
 */
class PerformanceModel {
    /**
     * @param {Object} params
     * @param {Object[]} params.data - The performance data
     */
    constructor({data}) {
        this.performance = this.getFormattedPerformance(data);
    }

    /**
     * Format the performance data received from the API
     * @param {Object[]} data 
     * @returns {Object[] | null}
     */
    getFormattedPerformance(data){
        if(data){
            const performanceLabels = {
                1: 'Cardio', 
                2: 'Energie', 
                3: 'Endurance', 
                4: 'Force', 
                5: 'Vitesse', 
                6: 'Intensité'
            }

            return data.map((d, index) => {
                return {
                    value: d.value,
                    kind: performanceLabels[index + 1]
                };
            });
        }
        return null;
    }
}

export default PerformanceModel;