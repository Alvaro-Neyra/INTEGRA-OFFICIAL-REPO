import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Data.css";

function Data({ services }) {
    return (
        <section id="services" className="services-section">
            <h2 className="services-title heading-2">Nuestros servicios</h2>
            <div className="services-container">
                {services.map((service, index) => {
                    return (
                        <article className="service-container" key={index}>
                            <picture>
                                <source srcSet={service.image.webp.small} media="(max-width: 320px)" type="image/webp" />
                                <source srcSet={service.image.webp.medium} media="(max-width: 480px)" type="image/webp" />
                                <source srcSet={service.image.webp.large} media="(max-width: 600px)" type="image/webp" />

                                <source srcSet={service.image.jpg.small} media="(max-width: 320px)" type="image/jpeg" />
                                <source srcSet={service.image.jpg.medium} media="(max-width: 480px)" type="image/jpeg" />
                                <source srcSet={service.image.jpg.large} media="(max-width: 600px)" type="image/jpeg" />

                                <img src={service.image.jpg.large} alt={service.nombre} className="service-image" />
                            </picture>
                            <div className="service-overlay">
                                <i className={service.icon + " service-icon"}></i>
                                <h3 className="service-title">{service.nombre}</h3>
                                <p className="service-description">{service.descripcion}</p>
                                <Link to={service.route} className="service-mas-informacion">
                                    <FaArrowRight />
                                    <span>
                                        Más información
                                    </span>
                                </Link>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    );
}

export default Data;