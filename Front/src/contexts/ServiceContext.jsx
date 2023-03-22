import { createContext, useState, useContext} from "react";
import { SportSeeAPIMocked } from "../mocks/services/MockedService";
import { SportSeeAPI } from "../services/APIService";

const ServiceContext = createContext();
const ServiceUpdateContext = createContext();

export function useService() {
    return useContext(ServiceContext);
}

export function useServiceUpdate() {
    return useContext(ServiceUpdateContext);
}

export function ServiceProvider({ children }) {
    const [currentService, setCurrentService] = useState(SportSeeAPIMocked);

    function toggleService() {
        return currentService === SportSeeAPIMocked
        ? setCurrentService(SportSeeAPI) 
        : setCurrentService(SportSeeAPIMocked)
    }

    return (
        <ServiceContext.Provider value={currentService}>
            <ServiceUpdateContext.Provider value={toggleService}>
                {children}
            </ServiceUpdateContext.Provider>
        </ServiceContext.Provider>
    );
}
