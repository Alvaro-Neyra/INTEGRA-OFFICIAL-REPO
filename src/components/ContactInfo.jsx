import "../styles/ContactInfo.css";

function ContactInfo() {
    return (
        <section className="contact-info">
            <h2><span>Contacte con nosotros!</span><span>Información de contacto</span></h2>
            <div className="contact-information-container">
                <ul>
                    <li>
                        <div>
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <article>
                            <h3>DIRECCIÓN:</h3>
                            <p>Av. Caminos del Inca 3120, Santiago De Surco</p>
                        </article>
                    </li>
                    <li>
                        <div>
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <article>
                            <h3>CELULAR:</h3>
                            <a href="tel: +940982514">
                                <p>(51) 940 982 514</p>
                            </a>
                        </article>
                    </li>
                    <li>
                        <div>
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <article>
                            <h3>CORREO:</h3>
                            <a href="mailto:contacto@integra.pe">
                                <p>comercial@integraconstructores.com</p>
                            </a>
                        </article>
                    </li>
                </ul>
                <div className="social-media-container">
                    <ul>
                        <li><i className="fa-brands fa-facebook"><a href=""></a></i></li>
                        <li><i className="fa-brands fa-linkedin"><a href=""></a></i></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default ContactInfo;