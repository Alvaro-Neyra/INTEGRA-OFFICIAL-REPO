import integraLogoBlanco from "../images/integra-logo-blanco.png";
import "../styles/Footer.css";

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-row-section">
                    <section className="details">
                        <div className="details-main">
                            <img src={integraLogoBlanco} alt="integra-logo" className="details-img" />
                            <p className="details-p">Desarrollamos estrategias a la medida de sus proyectos.</p>
                        </div>
                        <ul className="social-medias">
                            <li><i className="fa-brands fa-facebook"><a></a></i></li>
                            <li><i className="fa-brands fa-linkedin"><a></a></i></li>
                        </ul>
                    </section>
                    <section className="main-footer">
                        <nav className="nav-footer">
                            <section className="menu-footer">
                                <h2>Menú</h2>
                                <ul>
                                    <li><a href="">Inicio</a></li>
                                    <li><a href="">Nosotros</a></li>
                                    <li><a href="">Servicios</a></li>
                                    <li><a href="">Proyectos Faro</a></li>
                                    <li><a href="">Metodología de Gestión</a></li>
                                    <li><a href="">Contacto</a></li>
                                </ul>
                            </section>
                            <section className="services-footer">
                                <h2>Servicios</h2>
                                <ul>
                                    <li><a href="">Construcción</a></li>
                                    <li><a href="">Gerencia de Proyectos</a></li>
                                    <li><a href="">Inmobiliaria</a></li>
                                    <li><a href="">Expediente técnico</a></li>
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