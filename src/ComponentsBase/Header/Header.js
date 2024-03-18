import { useState } from 'react';
import Nav from '../Nav/Nav';
import './Header.scss';

function Header() {

    const [isMenuOpen, setMenuOpen] = useState(false);

    // Fonction qui prend en argument la nouvelle valeur de l'état. le ! permet de basculer entre ouverture/fermeture
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen)
    }

    return (
        <header >
            <div className='nav-desktop'>
                <img src="../assets/images/sunshine.png" alt="sunshine" className='logo' />
                <div id="burger-button" onClick={toggleMenu}>
                    <div className={`burger-icon ${isMenuOpen ? 'open' : 'close'}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                {/* Appel du props dans le composant Nav */}
                <Nav isOpen={isMenuOpen} />
            </div>
        </header>
    )
}

export default Header;