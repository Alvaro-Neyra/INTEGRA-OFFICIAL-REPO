import { Link, useLocation } from "react-router-dom";
import ButtonLink from "./ButtonLink";
import "../styles/Footer.css";

function Footer() {

    const { pathname } = useLocation();

    return (
        <footer className="footer">
            <div className="footer-row-section">
                <section className="details">
                    <div className="details-main">
                        <Link to="/"><img src="svg/integra-logo-blanco.svg" alt="integra-logo" className="details-img" loading="lazy" /></Link>
                        <p className="details-p">Desarrollamos estrategias a la medida de sus proyectos.</p>
                    </div>
                    <ul className="social-medias">
                        <li><i className="fa-brands fa-facebook"><Link></Link></i></li>
                        <li><i className="fa-brands fa-linkedin"><Link></Link></i></li>
                    </ul>
                </section>
                <section className="main-footer">
                    <nav className="nav-footer">
                        <section className="menu-footer">
                            <h2>Menú</h2>
                            <ul>
                                <li><ButtonLink active={pathname === '/'} to="/">Inicio</ButtonLink></li>
                                <li><ButtonLink active={pathname === '/nosotros'} to="/nosotros">Nosotros</ButtonLink></li>
                                <li><ButtonLink active={pathname === '/servicios'} to="/servicios">Servicios</ButtonLink></li>
                                <li><ButtonLink active={pathname === '/portfolio'} to="/portfolio">Portfolio</ButtonLink></li>
                                <li><ButtonLink active={pathname === ''} to="">Metodología de Gestión</ButtonLink></li>
                                <li><ButtonLink active={pathname === '/contacto'} to="/contacto">Contacto</ButtonLink></li>
                            </ul>
                        </section>
                        <section className="services-footer">
                            <h2>Servicios</h2>
                            <ul>
                                <li><ButtonLink active={pathname === '/servicios/construccion'} to="/servicios/construccion">Construcción</ButtonLink></li>
                                <li><ButtonLink active={pathname === '/servicios/gerencia-de-proyectos'} to="/servicios/gerencia-de-proyectos">Gerencia de Proyectos</ButtonLink></li>
                                <li><ButtonLink active={pathname === '/servicios/inmobiliaria'} to="/servicios/inmobiliaria">Inmobiliaria</ButtonLink></li>
                                <li><ButtonLink active={pathname === '/servicios/expediente-tecnico'} to="/servicios/expediente-tecnico">Expediente técnico</ButtonLink></li>
                            </ul>
                        </section>
                        <section className="contacts-footer">
                            <h2>Contacto</h2>
                            <ul>
                                <li>
                                    <div className="title-list">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <h3 className="heading-list">DIRECCIÓN:</h3>
                                    </div>
                                    <p>Av. Caminos del Inca 3120, Santiago De Surco</p>
                                </li>
                                <li>
                                    <div className="title-list">
                                        <i className="fa-solid fa-envelope"></i>
                                        <h3 className="heading-list">CORREO:</h3>
                                    </div>
                                    <p>comercial@integraconstructores.com</p>
                                </li>
                                <li>
                                    <div className="title-list">
                                        <i className="fa-solid fa-mobile"></i>
                                        <h3 className="heading-list">CELULAR:</h3>
                                    </div>
                                    <p>(51) 940 982 514</p>
                                </li>
                            </ul>
                        </section>
                    </nav>
                </section>
            </div>
            <footer className="copyright">&copy; 2024 INTEGRA | Todos los derechos reservados.</footer>
        </footer>
    );
}

export default Footer;