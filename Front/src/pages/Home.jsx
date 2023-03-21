import { useContext } from 'react';
import '../styles/Home.css'
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { ServiceContext } from '../contexts/ServiceContext';
import toggleService from '../utils/toggleService';
import toggleUser from '../utils/toggleUser';
import Toggle from '../components/Toggle';
import { SportSeeAPI } from '../services/APIService';

function Home() {
    const {currentUser, setCurrentUser} = useContext(CurrentUserContext);
    const {currentService, setCurrentService} = useContext(ServiceContext);

    return (
        <main className='Home'>
            <div>
                <Toggle
                    handleChange={()=> toggleService({currentService, setCurrentService})} 
                    labelText="Service:" 
                    toggleId="toggle-service" 
                    checked={currentService === SportSeeAPI}
                /> 
                <span>{currentService.constructor.name}</span>
            </div>
            <div>
                <Toggle 
                    handleChange={()=> toggleUser({currentUser, setCurrentUser})} 
                    labelText="Utilisateur:" 
                    toggleId="toggle-user" 
                    checked={currentUser === 18}
                />
                <span>{currentUser}</span>
            </div>
        </main>
    );
}

export default Home;

