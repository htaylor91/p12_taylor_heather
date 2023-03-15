import logo from '../assets/logo.svg';
import '../styles/Navigation.css'
import IconTile from './IconTile'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function HeaderNavigation() {
    const {currentUser} = useContext(CurrentUserContext);
    
    return (
        <header className='header'>
            <div className='logo-wrapper'>
                <IconTile source={logo} alt="Sportsee logo" iconData="logo"></IconTile>
                <h1>SportSee</h1>
            </div>
            <nav>
                <ul>
                    <li>
                    <NavLink 
                    className="navlink text-shadow"
                    style={({ isActive }) => {
                        return {
                            textDecorationColor: isActive ? "var(--color-white)" : "transparent",
                        };
                    }}
                    to="/">Accueil</NavLink>
                    </li>
                    <li>
                    <NavLink 
                    className="navlink text-shadow"
                    style={({ isActive }) => {
                        return {
                            textDecorationColor: isActive ? "var(--color-white)" : "transparent",
                        };
                    }}
                    to={`/profil/user/${currentUser}`}>Profil</NavLink>
                    </li>
                    <li>
                    <NavLink 
                    className="navlink text-shadow"
                    style={({ isActive }) => {
                        return {
                            textDecorationColor: isActive ? "var(--color-white)" : "transparent",
                        };
                    }}
                    to="/reglage">Réglage</NavLink>
                    </li>
                    <li>
                    <NavLink 
                    className="navlink text-shadow"
                    style={({ isActive }) => {
                        return {
                            textDecorationColor: isActive ? "var(--color-white)" : "transparent",
                        };
                    }}
                    to="/communaute">Communauté</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderNavigation
