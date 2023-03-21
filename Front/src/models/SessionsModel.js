
export default class SessionsModel {
    constructor({userId, sessions}) {
        this.userId = userId;
        this.sessions = this.getFormattedSessions(sessions);
    }
    
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
