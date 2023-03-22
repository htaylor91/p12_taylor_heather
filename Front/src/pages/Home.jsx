import '../styles/Home.css'
import { useCurrentUser, useCurrentUserUpdate } from '../contexts/CurrentUserContext';
import { useService, useServiceUpdate } from '../contexts/ServiceContext';
import Toggle from '../components/Toggle';

function Home() {
    const currentUser = useCurrentUser();
    const toggleCurrentUser = useCurrentUserUpdate();

    const currentService = useService();
    const toggleService = useServiceUpdate();

    return (
        <main className='Home'>
            <div>
                <Toggle
                    handleChange={toggleService} 
                    labelText="Service:" 
                    toggleId="toggle-service" 
                    checked={currentService.constructor.name === 'APIService'}
                /> 
                <span>{currentService.constructor.name}</span>
            </div>
            <div>
                <Toggle 
                    handleChange={toggleCurrentUser}
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