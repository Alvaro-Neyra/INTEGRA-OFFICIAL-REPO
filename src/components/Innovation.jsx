import image1 from "../images/innovation1.webp";
import image2 from "../images/innovation2.webp";
import image3 from "../images/innovation3.webp";
import image4 from "../images/innovation4.webp";
import blueArrow from "../images/blueCurveArrow.png";
import ButtonLink from "./ButtonLink";
import "../styles/Innovation.css";

function Innovation() {
    return(
        <>
            <section className="innovation-section">
                <div className="images-container">
                    <img className="blue-arrow" src={blueArrow} alt="blue-arrow" />
                    <img className="image1" src={image1} alt="image1-innovacion" />
                    <img className="image2" src={image2} alt="image2-innovacion" />
                    <img className="image3" src={image3} alt="image3-innovacion" />
                    <img className="image4" src={image4} alt="image4-innovacion" />
                </div>
                <div className="innovation-text-container">
                    <h2>Innovación</h2>
                    <p>Nuestro enfoque principal es del desarrollo de proyectos inmobiliarios de edificaciones (viviendas, comercio y oficinas), habilitaciones urbanas con fines inmobiliarios (lotizaciones de vivienda, comercio e industria) y sistemas de utilización de media y baja tensión (redes de distribución y alumbrado, subestaciones eléctricas) , logramos proyectos con alta rentabilidad y aseguramos la inversión de nuestros clientes y agregando valor al usuario final. contamos con certificación iso 9001-2015 lo que garantiza la calidad de nuestros servicios a nuestro cliente.</p>
                    <p>Conoce nuestros servicios:</p>
                    <ButtonLink className="innovation-btn" route="/servicios" text="Ver Servicios" backgroundColor="rgb(100, 179, 244)" backgroundHover="#6f7fc7" colorText="hsl(0, 0%, 100%)" ></ButtonLink>
                </div>
            </section>
        </>
    );
}

export default Innovation;