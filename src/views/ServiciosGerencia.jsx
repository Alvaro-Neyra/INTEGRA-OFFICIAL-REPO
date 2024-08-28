import { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NavBarAside from "../components/NavBarAside";
import ResponsiveAsideDiv from "../components/ResponsiveAsideDiv";
import ImagenAndTextService from "../components/ImageAndTextService";
import AccordionSet from "../components/AccordionSet";
import GoToTop from "../components/GoToTop";
import { AccordionsGerencia } from "../assets/AccordionArrays";
import "../styles/Servicios.css";
import AbsoluteElements from "../components/AbsoluteElements";

const gerenciaImages = {
    webp: {
        xsmall: "images/servicios-images/webp/gerencia-de-proyectos-servicios-320px.webp",
        small: "images/servicios-images/webp/gerencia-de-proyectos-servicios-480px.webp",
        medium: "images/servicios-images/webp/gerencia-de-proyectos-servicios-600px.webp",
        original: "images/servicios-images/webp/gerencia-de-proyectos-servicios-original.webp"
    },
    jpg: {
        xsmall: "images/servicios-images/jpg/gerencia-de-proyectos-servicios-320px.jpg",
        small: "images/servicios-images/jpg/gerencia-de-proyectos-servicios-480px.jpg",
        medium: "images/servicios-images/jpg/gerencia-de-proyectos-servicios-600px.jpg",
        original: "images/servicios-images/jpg/gerencia-de-proyectos-servicios-original.jpg"
    }
};

function ServiciosGerencia() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }
        , []);


    return (
        <>
            <section>
                <div className="navbars">
                    <NavBar active={true} position={"sticky"}></NavBar>
                    <ResponsiveAsideDiv></ResponsiveAsideDiv>
                </div>
                <main className="servicios-main">
                    <NavBarAside></NavBarAside>
                    <section>
                        <ImagenAndTextService heading={"GERENCIA DE PROYECTOS"} text={"Nuestro equipo especializado en gerencia de proyectos se dedica a la gestión de proyectos de construcción de alta calidad. Desde la planificación inicial hasta la entrega final, nos aseguramos de cumplir con los más altos estándares y expectativas. Cada proyecto es manejado con precisión y compromiso para garantizar resultados excepcionales, cumpliendo con los plazos y el presupuesto establecidos."} img={gerenciaImages} backgroundColor={"hsl(0, 0%, 95%)"} widthImg={"40vw"} widthDiv={"30vw"} paddingDiv={"3vw"} textColor={"#012E40"} borderColor={"#012E40"}></ImagenAndTextService>
                        <article className="servicios-content">
                            <p>La infraestructura representa gran porcentaje de la inversión para iniciar un negocio. INTEGRA a través de herramientas de gestión de proyecto que se circunscriben dentro del marco del estándar internacional del Project Management Institute PMI, diseña la mejor estrategia  para que sus proyectos puedan alcanzar el máximo rendimiento.</p>
                            <p>Nuestra prioridad es ofrecer ingeniería de valor desarrollando  proyectos rentables y funcionales contribuyendo a lograr los objetivos de nuestros clientes.</p>
                            <p>Por la experiencia de nuestros profesionales y el conocimiento del mercado de la construcción, nuestra propuesta de Gestión engloba una variedad de servicios que se puede aplicar en cualquier etapa de la vida del proyecto garantizando el alcance, plazo, costo y calidad.</p>
                            <div className="accordions">
                                <AccordionSet content={AccordionsGerencia}></AccordionSet>
                            </div>
                        </article>
                    </section>
                </main>
            </section>
            <Footer></Footer>
            <AbsoluteElements></AbsoluteElements>
        </>);
}

export default ServiciosGerencia;