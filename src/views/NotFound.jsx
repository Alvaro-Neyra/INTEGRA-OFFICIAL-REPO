import errorImage from "../images/404.svg";
import arrowNotFound from "../images/flecha-notfound.png";
import { Link } from "react-router-dom";
import "../styles/NotFound.css";

function NotFound() {
    return(
        <>
            <main>
                <section className="notfound-container">
                    <div className="error-container">
                        <div>Oops!</div>
                        <h1>404</h1>
                        <div className="page-notfound">Página no encontrada</div>
                    </div>
                    <p className="text-notfound">No pudimos encontrar esa página.</p>
                    <div className="suggest-container">
                        <p>Tal vez puedas encontrar lo que necesitas aquí:</p>
                        <div className="anchors">
                            <Link to="/" className="red-btn">INICIO</Link>
                            <Link to="/services" className="blue-btn">SERVICIOS</Link>
                            <Link to="/contacts" className="yellow-btn">CONTACTO</Link>
                        </div>
                        <img src={arrowNotFound} alt="flecha" className="arrow-notfound" />
                    </div>
                    <div className="design"></div>
                    <div className="design-circle"></div>
                    <img src={errorImage} alt="errorImage" className="notfound-img" />
                </section>
            </main>
        </>
    );
}

export default NotFound;