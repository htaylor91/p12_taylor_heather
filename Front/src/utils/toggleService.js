import {SportSeeAPI} from '../services/APIService.js'
import {SportSeeAPIMocked} from '../mocks/services/MockedService.js'

export default function toggleService({currentService, setCurrentService}) {
    if(currentService === SportSeeAPI) {
        return setCurrentService(SportSeeAPIMocked)
    }
    if(currentService === SportSeeAPIMocked) {
        return setCurrentService(SportSeeAPI)
    }
}
