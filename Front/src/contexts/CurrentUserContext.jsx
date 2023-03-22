import { createContext, useState, useContext} from "react";

const CurrentUserContext = createContext();
const CurrentUserUpdateContext = createContext();

export function useCurrentUser() {
    return useContext(CurrentUserContext);
}

export function useCurrentUserUpdate() {
    return useContext(CurrentUserUpdateContext);
}

export function CurrentUserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(12);

    function toggleCurrentUser() {
        return currentUser === 12 ? setCurrentUser(18) : setCurrentUser(12)
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <CurrentUserUpdateContext.Provider value={toggleCurrentUser}>
                {children}
            </CurrentUserUpdateContext.Provider>
        </CurrentUserContext.Provider>
    );
}