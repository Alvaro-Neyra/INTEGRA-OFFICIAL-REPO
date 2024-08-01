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
    const servicesRef = useRef();

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

    const showServices = () => {
        if (window.innerWidth <= 1024) return;
        if (servicesRef.current) {
            servicesRef.current.classList.add('servicios-popup-active');
        }
    };

    const hideServices = () => {
        if (window.innerWidth <= 1024) return;
        if (servicesRef.current) {
            servicesRef.current.classList.remove('servicios-popup-active');
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
                <img src={integraLogo} alt="integra-logo" className='integra-img-first' />
            </Link>
            <nav ref={navRef}>
                <Link to="/">
                    <img src={integraLogo} alt="integra-logo" className='integra-img' />
                </Link>
                <div>
                    <ul>
                        <div>
                            <li>
                                <ButtonLink active={pathname === '/'} onClick={showNavbar} to="/" className='navbar-link'>Home</ButtonLink>
                            </li>
                            <li>
                                <ButtonLink active={pathname === '/nosotros'} onClick={showNavbar} to="/nosotros" className='navbar-link'>Nosotros</ButtonLink>
                            </li>
                            <li className="li-services-container" onMouseOver={showServices} onMouseOut={hideServices}>
                                <ButtonLink
                                    active={pathname === '/servicios'}
                                    onClick={showNavbar}
                                    to="/servicios"
                                    className='navbar-link navbar-accordion'
                                >
                                    Servicios
                                </ButtonLink>
                                <div className="servicios-popup" ref={servicesRef}>
                                    <ButtonLink width={"100%"} active={pathname === '/servicios/construccion'} to="/servicios/construccion" onClick={showNavbar} className='navbar-link'>Construcción</ButtonLink>
                                    <ButtonLink width={"100%"} active={pathname === '/servicios/gerencia-de-proyectos'} to="/servicios/gerencia-de-proyectos" onClick={showNavbar} className='navbar-link'>Gerencia de proyectos</ButtonLink>
                                    <ButtonLink width={"100%"} active={pathname === '/servicios/inmobiliaria'} to="/servicios/inmobiliaria" onClick={showNavbar} className='navbar-link'>Inmobiliaria</ButtonLink>
                                    <ButtonLink width={"100%"} active={pathname === '/servicios/expediente-tecnico'} to="/servicios/expediente-tecnico" onClick={showNavbar} className='navbar-link'>Expediente Técnico</ButtonLink>
                                    <ButtonLink width={"100%"} active={pathname === '/servicios/inspeccion-tecnica'} to="/servicios/inspeccion-tecnica" onClick={showNavbar} className='navbar-link'>Inspección Técnica</ButtonLink>
                                    <ButtonLink width={"100%"} active={pathname === '/servicios/supervision-de-obra'} to="/servicios/supervision-de-obra" onClick={showNavbar} className='navbar-link'>Supervisión de Obra</ButtonLink>
                                </div>
                            </li>
                            <li>
                                <ButtonLink active={pathname === '/portfolio'} onClick={showNavbar} to="/portfolio" className='navbar-link'>Portfolio</ButtonLink>
                            </li>
                        </div>
                        <Link to="/contacto" className='contact-btn' onClick={showNavbar}>Contáctenos</Link>
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
