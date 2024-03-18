import { NavLink } from 'react-router-dom';
import './Nav.scss';
function Nav(props) {
    return (

        <nav className={`menu ${props.isOpen ? 'active' : ''}`}>   { /* Fonction ternaire pour ajouter la classe activ */}
            <ul className='nav-link'>
                <NavLink to="/"><li>Bienvenue</li></NavLink>
                <NavLink to="/ParcoursPro"><li>Parcours Pro</li></NavLink>
                <NavLink to="Apropos"><li>À Propos</li></NavLink>
            </ul>
        </nav>
    );
}

export default Nav;