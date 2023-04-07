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
    
    let serviceName;
    if(currentService.constructor.name === 'APIService' || currentService.constructor.name === 'DN') {
        serviceName = 'SportSee API';
    } else {
        serviceName = 'Mocked API';
    }

    return (
        <main className='Home'>
            <div>
                <Toggle
                    handleChange={toggleCurrentService}
                    labelText="Service:" 
                    toggleId="toggle-service" 
                    checked={serviceName === 'SportSee API'}
                />
                <span>{serviceName}</span>
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