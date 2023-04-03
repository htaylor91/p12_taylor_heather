import DataService from './DataService';

/**
 * Class to handle API calls to any of the 4 endpoints.
 * @property {DataService} userService
 * @property {DataService} activityService
 * @property {DataService} sessionsService
 * @property {DataService} performanceService
 */
class APIService {
    constructor() {
        this.userService = new DataService(this.apiEndpoints.user);
        this.activityService = new DataService(this.apiEndpoints.activity);
        this.sessionsService = new DataService(this.apiEndpoints.average_sessions);
        this.performanceService = new DataService(this.apiEndpoints.performance);
    }

    /**
     * @property {string} user - The main user data endpoint.
     * @property {string} activity - The activity data endpoint.
     * @property {string} average_sessions - The average sessions data endpoint.
     * @property {string} performance - The performance data endpoint.
     */
    apiEndpoints = {
        user: "",
        activity: "/activity",
        average_sessions: "/average-sessions",
        performance: "/performance"
    }
}

/**
 * @const {APIService} SportSeeAPI
 */
export const SportSeeAPI = new APIService();