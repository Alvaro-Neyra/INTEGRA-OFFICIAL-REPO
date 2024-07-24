import { useRef, useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import ButtonLink from './ButtonLink';
import integraLogo from '../images/integra-logo-color.svg';
import "../styles/NavBar.css"

function NavBar({ active, position }) {

    const { pathname } = useLocation();

    const [navBar, setNavBar] = useState(false);

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    };

    useEffect(() => {
        if (!active) {
            window.addEventListener('scroll', changeBackground);
            return () => {
                window.removeEventListener('scroll', changeBackground);
            };
        } else {
            setNavBar(true);
        }
    }, [active]);

    const headerStyle = { position: position };

    return (
        <header className={navBar ? "navbar active" : "navbar"} style={headerStyle}>
            <Link to="/">
                <img src={integraLogo} alt="integra-logo" className='integra-img'/>
            </Link>
            <nav ref={navRef}>
                <Link to="/">
                    <img src={integraLogo} alt="integra-logo" className='integra-img'/>
                </Link>
                <div>
                    <ul>
                        <div>
                            <li>
                                <ButtonLink active={pathname === '/'} onClick={showNavbar} to="/">Home</ButtonLink>
                            </li>
                            <li>
                                <ButtonLink active={pathname === '/nosotros'} onClick={showNavbar} to="/nosotros">Nosotros</ButtonLink>
                            </li>
                            <li>
                                <ButtonLink active={pathname === '/servicios'} onClick={showNavbar} to="/servicios">Servicios</ButtonLink>
                            </li>
                            <li>
                                <ButtonLink active={pathname === '/portfolio'} onClick={showNavbar} to="/portfolio">Portfolio</ButtonLink>
                            </li>
                        </div>
                        <Link to="/contacto" className='contact-btn'>Contáctenos</Link>
                    </ul>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}> <FaTimes /> </button>
                </div>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    )
}

export default NavBar;
