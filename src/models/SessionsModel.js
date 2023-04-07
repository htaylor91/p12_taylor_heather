/**
 * Model for the average sessions data
 * @property {Object[]} sessions - The formatted sessions data
 */
class SessionsModel {
    /**
     * @param {Object} params
     * @param {Object[]} params.sessions - The sessions data
     */
    constructor({sessions}) {
        this.sessions = this.getFormattedSessions(sessions);
    }
    
    /**
     * Format the sessions data received from the API
     * @param {Object[]} sessions 
     * @returns {Object[] | null}
     */
    getFormattedSessions(sessions){
        if(sessions){
            const weekdays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
            return sessions.map((session, index) => {
                return {
                    weekday: `${weekdays[index]}`,
                    sessionLength: session.sessionLength,
                }
            });
        }
        return null;
    }
}

export default SessionsModel;