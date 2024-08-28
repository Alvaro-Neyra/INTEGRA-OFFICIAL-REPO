import { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NavBarAside from "../components/NavBarAside";
import ImagenAndTextService from "../components/ImageAndTextService";
import projectPhases from "../assets/ProjectPhases";
import "../styles/Servicios.css";
import ResponsiveAsideDiv from "../components/ResponsiveAsideDiv";
import AbsoluteElements from "../components/AbsoluteElements";

const inmobiliariaImages = {
    webp: {
        xsmall: "images/servicios-images/webp/inmobiliaria-servicios-320px.webp",
        small: "images/servicios-images/webp/inmobiliaria-servicios-480px.webp",
        medium: "images/servicios-images/webp/inmobiliaria-servicios-600px.webp",
        large: "images/servicios-images/webp/inmobiliaria-servicios-1024px.webp",
        original: "images/servicios-images/webp/inmobiliaria-servicios-original.webp"
    },
    jpg: {
        xsmall: "images/servicios-images/jpg/inmobiliaria-servicios-320px.jpg",
        small: "images/servicios-images/jpg/inmobiliaria-servicios-480px.jpg",
        medium: "images/servicios-images/jpg/inmobiliaria-servicios-600px.jpg",
        large: "images/servicios-images/jpg/inmobiliaria-servicios-1024px.jpg",
        original: "images/servicios-images/jpg/inmobiliaria-servicios-original.jpg"
    }
};


function ServiciosInmobiliaria() {
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
                        <ImagenAndTextService heading={"INMOBILIARIA"} text={"En nuestro servicio inmobiliario, ofrecemos soluciones integrales para la compra, venta y gestión de propiedades. Contamos con un equipo de expertos que asesoran y apoyan a nuestros clientes en cada paso del proceso inmobiliario, asegurando transacciones seguras y exitosas. Nos comprometemos a proporcionar un servicio personalizado, adaptado a las necesidades específicas de cada cliente, y a maximizar el valor de sus inversiones en bienes raíces."} img={inmobiliariaImages} backgroundColor={"hsl(0, 0%, 95%)"} widthImg={"40vw"} widthDiv={"30vw"} paddingDiv={"3vw"} textColor={"#012E40"} borderColor={"#012E40"}></ImagenAndTextService>
                        <article className="servicios-content">
                            <p>INTEGRA desarrolla todo el ciclo de vida del proyecto,  desde la evaluación de la compra del terreno hasta la entrega del producto al usuario final logrando la rentabilidad esperada.</p>
                            <p>Por la experiencia del equipo de INTEGRA orientamos la mejor estrategia según la ubicación del proyecto con el objetivo de satisfacer la necesidades de los clientes.</p>

                            {projectPhases.map((phase, index) => {
                                return (
                                    <ul key={index} className="service-list">
                                        <h2>{phase.title}</h2>
                                        {phase.tasks.map((task, index) => {
                                            return <li key={index}>{task}</li>
                                        })}
                                    </ul>
                                );
                            })}
                        </article>
                    </section>
                </main>
            </section>
            <Footer></Footer>
            <AbsoluteElements></AbsoluteElements>
        </>);
}

export default ServiciosInmobiliaria;