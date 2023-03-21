
export default class ActivityModel {
    constructor({ userId, sessions }) {
        this.userId = userId;
        this.activity = this.getFormattedActivity(sessions);
    }

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