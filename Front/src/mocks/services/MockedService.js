import {USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from '../data/mocked_data.js';
import DataServiceMocked from './DataServiceMocked.js';

const mockedEndpoints = {
    user: USER_MAIN_DATA,
    activity: USER_ACTIVITY,
    average_sessions: USER_AVERAGE_SESSIONS,
    performance: USER_PERFORMANCE
}

class MockedService {
    constructor() {
        this.userService = new DataServiceMocked(mockedEndpoints.user);
        this.activityService = new DataServiceMocked(mockedEndpoints.activity);
        this.sessionsService = new DataServiceMocked(mockedEndpoints.average_sessions);
        this.performanceService = new DataServiceMocked(mockedEndpoints.performance);
    }
}

export const SportSeeAPIMocked = new MockedService();