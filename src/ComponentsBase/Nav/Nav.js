import { Link } from 'react-router-dom';
import './Nav.scss';
function Nav(props) {
    return (

        <nav className={`menu ${props.isOpen ? 'active' : ''}`}>   { /* Fonction ternaire pour ajouter la classe activ */}
            <ul className='nav-link'>
                <Link to="/"><li>Bienvenue</li></Link>
                <Link to="/ParcoursPro"><li>Parcours Pro</li></Link>
                <Link to="Apropos"><li>À Propos</li></Link>
            </ul>
        </nav>
    );
}

export default Nav;