import {USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from '../data/mocked_data.js';
import DataServiceMocked from './DataServiceMocked.js';

/**
 * Class to handle mocked API calls to any of the 4 mocked endpoints.
 * @property {DataServiceMocked} userService
 * @property {DataServiceMocked} activityService
 * @property {DataServiceMocked} sessionsService
 * @property {DataServiceMocked} performanceService
 */
class MockedService {
    constructor() {
        this.userService = new DataServiceMocked(this.mockedEndpoints.user);
        this.activityService = new DataServiceMocked(this.mockedEndpoints.activity);
        this.sessionsService = new DataServiceMocked(this.mockedEndpoints.average_sessions);
        this.performanceService = new DataServiceMocked(this.mockedEndpoints.performance);
    }

    /**
     * @property {Object} user - Mocked user data
     * @property {Object} activity - Mocked activity data
     * @property {Object} average_sessions - Mocked average sessions data
     * @property {Object} performance - Mocked performance data
     */
    mockedEndpoints = {
        user: USER_MAIN_DATA,
        activity: USER_ACTIVITY,
        average_sessions: USER_AVERAGE_SESSIONS,
        performance: USER_PERFORMANCE
    }
}

/**
 * @const {MockedService} SportSeeAPIMocked
 */
export const SportSeeAPIMocked = new MockedService();