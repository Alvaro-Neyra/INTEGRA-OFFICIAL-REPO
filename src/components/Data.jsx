import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Data.css";

function Data({ services }) {
    return (
        <section className="services-section">
            <h2 className="services-title">Nuestros servicios</h2>
            <div className="services-container">
                {services.map((service, index) => {
                    return (
                    <article className="service-container" key={index} style={{ backgroundImage: `url(${service.image})`}}>
                        <i className={service.icon + " service-icon"}></i>
                        <h3 className="service-title">{service.nombre}</h3>
                        <p className="service-description">{service.descripcion}</p>
                        <Link to="" className="service-mas-informacion">
                                <FaArrowRight />
                            <span>
                                Más información
                            </span>
                        </Link>
                    </article>
                    )
                })}
            </div>
        </section>
    );
}

export default Data;