import { useLocation } from "react-router-dom";
import "../styles/HeroImage.css";

function HeroImage({ image, heading }) {

    const { pathname } = useLocation();

    const heroRoute = ((pathname) => {
        switch (pathname) {
            case "/":
                return "home";
            case "/nosotros":
                return "nosotros";
            case "/servicios":
                return "servicios";
            case "/servicios/construccion":
                return "construccion";
            case "/servicios/gerencia-de-proyectos":
                return "gerencia";
            case "/servicios/inmobiliaria":
                return "inmobiliaria";
            case "/servicios/expediente-tecnico":
                return "expediente";
            case "/servicios/inspeccion-tecnica":
                return "inspeccion";
            case "/servicios/supervision-de-obra":
                return "supervision";
            case "/portfolio":
                return "portfolio";
            case "/contacto":
                return "/Home/contacto";
            default:
                return "home";
        }
    });

    return (
        <div className="hero-image" style={{backgroundImage: `url(${image})`}}>
            <h1>{heading}</h1>
            <p>{heroRoute(pathname)}</p>
        </div>
    );
}

export default HeroImage;