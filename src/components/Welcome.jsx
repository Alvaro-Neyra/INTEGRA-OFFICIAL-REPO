import rayLightImage from "../images/rayos-de-luz.png";
import Blob from "./Blob";
import "../styles/Welcome.css";

function Welcome() {
    return (
        <section className="welcome-container">
            <div className="we">
                <div className="we-text">
                    <h1><span>Bienvenido!</span><span>Somos INTEGRA 😊</span></h1>
                    <div className="us-text">
                        <p>Somos una empresa peruana que ofrece servicios de construcción, ingeniería y gestión, comprometidos con el desarrollo de soluciones sostenibles.</p>
                        <p>Estamos enfocados en construir confianza con nuestros clientes, logrando con nuestra experiencia y equipo de trabajo el desarrollo de estrategias eficaces que maximizan la rentabilidad del proyecto.</p>
                        <p>Continúe leyendo para obtener más información sobre la historia de Integra y su objetivo.</p>
                    </div>
                </div>
                <div className="we-image">
                    {/*AQUI VA LA IMAGEN SVG ANIMADA*/}
                    <div className="blob-container">
                        <img src={rayLightImage} alt="light-ray1" className="light-ray" aria-hidden="true" />
                        <img src={rayLightImage} alt="light-ray2" className="light-ray" aria-hidden="true" />
                        <div className="image-container"></div>
                        <Blob />
                        <Blob />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Welcome;