import integraLogoBlanco from "../../public/svg/integra-logo-blanco.svg";
import { Link, useLocation } from "react-router-dom";
import ButtonLink from "./ButtonLink";
import "../styles/Footer.css";

function Footer() {

    const { pathname } = useLocation();

    return (
        <>
            <footer className="footer">
                <div className="footer-row-section">
                    <section className="details">
                        <div className="details-main">
                            <Link to="/"><img src={integraLogoBlanco} alt="integra-logo" className="details-img" loading="lazy"/></Link>
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
                                    <li><ButtonLink active={pathname === '/servicios/inspeccion-tecnica'} to="/servicios/inspeccion-tecnica">Inspección técnica</ButtonLink></li>
                                    <li><ButtonLink active={pathname === '/servicios/supervision-de-obra'} to="/servicios/supervision-de-obra">Supervisión de obra</ButtonLink></li>
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
                                        <p>Los Ingenieros 580 – La Molina</p>
                                    </li>
                                    <li>
                                        <div className="title-list">
                                            <i className="fa-solid fa-envelope"></i>
                                            <h3 className="heading-list">CORREO:</h3>
                                        </div>
                                        <p>Contacto@faro51.com</p>
                                    </li>
                                    <li>
                                        <div className="title-list">
                                            <i className="fa-solid fa-mobile"></i>
                                            <h3 className="heading-list">CELULAR:</h3>
                                        </div>
                                        <p>(51) 975 975 183</p>
                                    </li>
                                </ul>
                            </section>
                        </nav>
                    </section>
                </div>
                <footer className="copyright">&copy; 2024 INTEGRA | Todos los derechos reservados.</footer>
            </footer>
        </>
    );
}

export default Footer;