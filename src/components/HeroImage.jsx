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
        <div className="hero-image">
            <picture>
                <source srcSet={image.webp.xsmall} media="(max-width: 320px)" type="image/webp" />
                <source srcSet={image.webp.small} media="(max-width: 480px)" type="image/webp" />
                <source srcSet={image.webp.medium} media="(max-width: 768px)" type="image/webp" />
                <source srcSet={image.webp.large} media="(max-width: 1024px)" type="image/webp" />
                <source srcSet={image.webp.xlarge} media="(max-width: 1200px)" type="image/webp" />
                <source srcSet={image.webp.xxlarge} media="(max-width: 1600px)" type="image/webp" />
                <source srcSet={image.webp.giant} media="(max-width: 1900px)" type="image/webp" />
                <source srcSet={image.webp.xgiant} media="(max-width: 2100px)" type="image/webp" />
                <source srcSet={image.webp.xxgiant} media="(max-width: 2400px)" type="image/webp" />
                <source srcSet={image.webp.original} type="image/webp" />

                <source srcSet={image.jpg.xsmall} media="(max-width: 320px)" type="image/jpeg" />
                <source srcSet={image.jpg.small} media="(max-width: 480px)" type="image/jpeg" />
                <source srcSet={image.jpg.medium} media="(max-width: 768px)" type="image/jpeg" />
                <source srcSet={image.jpg.large} media="(max-width: 1024px)" type="image/jpeg" />
                <source srcSet={image.jpg.xlarge} media="(max-width: 1200px)" type="image/jpeg" />
                <source srcSet={image.jpg.xxlarge} media="(max-width: 1600px)" type="image/jpeg" />
                <source srcSet={image.jpg.giant} media="(max-width: 1900px)" type="image/jpeg" />
                <source srcSet={image.jpg.xgiant} media="(max-width: 2100px)" type="image/jpeg" />
                <source srcSet={image.jpg.xxgiant} media="(max-width: 2400px)" type="image/jpeg" />
                <source srcSet={image.jpg.original} type="image/jpeg" />

                <img src={image.jpg.original} alt={"imagen de " + heading} className="contacto-hero-image" loading='lazy' />
            </picture>
            <h1>{heading}</h1>
            <p>{heroRoute(pathname)}</p>
        </div>
    );
}

export default HeroImage;