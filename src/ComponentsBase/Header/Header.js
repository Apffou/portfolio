import { useEffect, useRef, useState } from 'react';
import Nav from '../Nav/Nav';
import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {

    const [isMenuOpen, setMenuOpen] = useState(false);

    // Fonction qui prend en argument la nouvelle valeur de l'état. le ! permet de basculer entre ouverture/fermeture
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen)
    }

    //Référence pour le menu pour detecter les clics en dehors du menu
    const menuRef = useRef(null);

    // Gestion de la fermeture du menu lorsqu'on clique en dehors de celui-ci
    const handleOutsideClick = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    // Ecoute des clics en dehors du menu et appel de la fonction handleOutsideClick 
    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
        //Tableau vide pour s'assurer que l'effet ne se déclenche qu'une seule fois
    }, []);

    return (
        <header >
            <div className='nav-desktop'>
                <img src="../portfolio/assets/images/sunshine.png" alt="picto demi soleil" className='logo' />
                <div id="burger-button" onClick={toggleMenu}>
                    <div ref={menuRef} className={`burger-icon ${isMenuOpen ? 'open' : 'close'}`}>
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