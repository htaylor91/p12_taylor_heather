import {NavLink} from 'react-router-dom'
import '../styles/ErrorPage.css'
/**
 * @component
 * Page to render when the user tries to access a page that doesn't exist
 */
function ErrorPage(){
    return (
        <div className="ErrorPage">
            <h1>Erreur 404</h1>
            <p>Page non trouvée</p>
            <NavLink 
                className="navlink-return"
                to="/">Retour à la page d'accueil
            </NavLink>
        </div>
    )
}

export default ErrorPage