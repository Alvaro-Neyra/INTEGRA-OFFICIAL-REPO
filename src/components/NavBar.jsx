import { useRef, useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
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
            <a href="./#">
                <img src={integraLogo} alt="integra-logo" className='integra-img'/>
            </a>
            <nav ref={navRef}>
                <a href="./#">
                    <img src={integraLogo} alt="integra-logo" className='integra-img'/>
                </a>
                <div>
                    <ul>
                        <div>
                            <li>
                                <a onClick={showNavbar} href="./#">Home</a>
                            </li>
                            <li>
                                <a onClick={showNavbar} href="./#">Nosotros</a>
                            </li>
                            <li>
                                <a onClick={showNavbar} href="./#">Servicios</a>
                            </li>
                            <li>
                                <a onClick={showNavbar} href="./#">Portfolio</a>
                            </li>
                            <li>
                                <a onClick={showNavbar} href="./#">Contacto</a>
                            </li>
                        </div>
                        <button>Contáctenos</button>
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
