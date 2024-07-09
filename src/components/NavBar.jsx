import { useRef } from 'react';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import "../styles/NavBar.css"

function NavBar() {

    const [navBar, setNavBar] = useState(false);

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <header className={navBar ? "navbar active" : "navbar"}>
            <a href="./#">
                <img src="https://faro51.com/wp-content/uploads/2018/07/logo-faro51-web.png" alt="integra-logo" />
            </a>
            <nav ref={navRef}>
                <a href="./#">
                    <img src="https://faro51.com/wp-content/uploads/2018/07/logo-faro51-web.png" alt="integra-logo" />
                </a>
                <div>
                    <ul>
                        <div>
                            <li>
                                <a href="./#">Home</a>
                            </li>
                            <li>
                                <a href="./#">Nosotros</a>
                            </li>
                            <li>
                                <a href="./#">Servicios</a>
                            </li>
                            <li>
                                <a href="./#">Portfolio</a>
                            </li>
                            <li>
                                <a href="./#">Contacto</a>
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