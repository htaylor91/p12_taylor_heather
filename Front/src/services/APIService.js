import DataService from './DataService';

export const apiEndpoints = {
    user: "",
    activity: "/activity",
    average_sessions: "/average-sessions",
    performance: "/performance"
}

class APIService {
    constructor() {
        this.userService = new DataService(apiEndpoints.user);
        this.activityService = new DataService(apiEndpoints.activity);
        this.sessionsService = new DataService(apiEndpoints.average_sessions);
        this.performanceService = new DataService(apiEndpoints.performance);
    }
}

export const SportSeeAPI = new APIService();