import '../styles/Home.css'
import { useCurrentUser} from '../hooks/useCurrentUser';
import { useCurrentService } from '../hooks/useCurrentService';
import Toggle from '../components/Toggle';

/**
 * @component
 */
function Home() {
    const {currentUser, toggleCurrentUser} = useCurrentUser();
    const {currentService, toggleCurrentService} = useCurrentService();

    return (
        <main className='Home'>
            <div>
                <Toggle
                    handleChange={toggleCurrentService}
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