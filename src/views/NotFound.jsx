import { Link } from "react-router-dom";
import "../styles/NotFound.css";

function NotFound() {
    return (
        <main>
            <section className="notfound-container">
                <div className="main-notfound">
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
                            <Link to="/servicios" className="blue-btn">SERVICIOS</Link>
                            <Link to="/contacto" className="yellow-btn">CONTACTO</Link>
                        </div>
                        <img src="svg/flecha-notfound.svg" alt="flecha" className="arrow-notfound" loading="lazy" />
                    </div>
                </div>
                <div className="design"></div>
                <div className="design-circle"></div>
                <img src="svg/404.svg" alt="errorImage" className="notfound-img" loading="lazy" />
            </section>
        </main>
    );
}

export default NotFound;