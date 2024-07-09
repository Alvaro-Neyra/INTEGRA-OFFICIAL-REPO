import "../styles/Data.css";

function Data({ services }) {
    return (
        <div className="services-section">
            <h1 className="services-title">Nuestros servicios</h1>
            <div className="services-container">
                {services.map((service, index) => {
                    return (
                    <div className="service-container" key={index} style={{ backgroundImage: `url(${service.image})`}}>
                        <i className={service.icon}></i>
                        <h2 className="service-title">{service.nombre}</h2>
                        <p className="service-description">{service.descripcion}</p>
                        <button className="service-mas-informacion">
                            <span>
                                &rsaquo; 
                            </span>
                            <span>
                                Más información
                            </span>
                        </button>
                    </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Data;