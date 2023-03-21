
export default class PerformanceModel {
    constructor({ userId, data }) {
        this.userId = userId;
        this.performance = this.getFormattedPerformance(data);
    }

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