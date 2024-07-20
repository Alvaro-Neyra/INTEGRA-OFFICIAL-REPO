import { useRef, useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import integraLogo from '../images/integra-logo-color.svg';
import "../styles/NavBar.css"

function NavBar({ active, fixed }) {
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

    const headerStyle = fixed ? {} : { position: "static" };

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
                                <Link onClick={showNavbar} to="/">Home</Link>
                            </li>
                            <li>
                                <Link onClick={showNavbar} to="/us">Nosotros</Link>
                            </li>
                            <li>
                                <Link onClick={showNavbar} to="/services">Servicios</Link>
                            </li>
                            <li>
                                <Link onClick={showNavbar} to="/portfolio">Portfolio</Link>
                            </li>
                        </div>
                        <Link to="/contacts" className='contact-btn'>Contáctenos</Link>
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
