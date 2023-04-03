/**
 * Model for activity data
 * @property {Object[]} activity - The formatted activity data
 */
class ActivityModel {
    /**
     * @param {Object} params
     * @param {Object[]} params.sessions - The sessions data
     */
    constructor({ sessions }) {
        this.activity = this.getFormattedActivity(sessions);
    }

    /**
     * Format the activity data received from the API
     * @param {Object[]} sessions 
     * @returns {Object[] | null}
     */
    getFormattedActivity(sessions) {
        if (sessions) {
            return sessions.map((session, index) => {
                return {
                    day: index + 1,
                    calories: session.calories,
                    kilograms: session.kilogram,
                };
            });
        }
        return null;
    }
}

export default ActivityModel;