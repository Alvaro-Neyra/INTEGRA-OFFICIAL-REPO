import { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NavBarAside from "../components/NavBarAside";
import ImagenAndTextService from "../components/ImageAndTextService";
import ArticleService from "../components/ArticleService";
import AccordionSet from "../components/AccordionSet";
import { AccordionsConstruccion } from "../assets/AccordionArrays";
import "../styles/Servicios.css";
import ResponsiveAsideDiv from "../components/ResponsiveAsideDiv";

const paragraphs = [
    "Nuestro equipo de expertos en implementación y equipamiento se encarga de cada detalle, desde el diseño inicial hasta la finalización del proyecto. Nos esforzamos por superar las expectativas de nuestros clientes y entregar proyectos a tiempo y dentro del presupuesto.",
    "Ofrecemos una amplia gama de servicios de implementación y equipamiento, incluyendo la instalación de sistemas de iluminación, mobiliario, equipos de oficina, sistemas de seguridad y mucho más. Nuestro equipo de expertos en implementación y equipamiento se encarga de cada detalle, desde el diseño inicial hasta la finalización del proyecto.",
    "Nos esforzamos por superar las expectativas de nuestros clientes y entregar proyectos a tiempo y dentro del presupuesto. Nuestro equipo de expertos en implementación y equipamiento se encarga de cada detalle, desde el diseño inicial hasta la finalización del proyecto.",
    "Aunque nuestra propuesta de servicio se realiza desde la concepción del proyecto hasta la entrega, también es flexible para incorporarse en cualquier etapa de la siguiente manera:"
];



function ServiciosConstruccion() {
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
                        <ImagenAndTextService heading={"CONSTRUCCIÓN"} text={"Construimos proyectos de construcción de alta calidad en todo el país. Nuestro equipo de expertos en construcción se encarga de cada detalle, desde el diseño inicial hasta la finalización del proyecto. Nos esforzamos por superar las expectativas de nuestros clientes y entregar proyectos a tiempo y dentro del presupuesto."} img={"https://faro51.com/wp-content/uploads/2018/07/servicio-construccion-faro51.jpg"} backgroundColor={"hsl(0, 0%, 95%)"} widthImg={"40vw"} widthDiv={"30vw"} paddingDiv={"3vw"} textColor={"#012E40"} borderColor={"#012E40"}></ImagenAndTextService>
                        <article className="servicios-content">
                            <p>Uno de nuestros principales servicios es la construcción de obras de infraestructura en general. Empleamos procesos eficientes y contamos con profesionales altamente calificados para asegurar la calidad a lo largo de la vida de la obra.</p>
                            <p>Ofrecemos generar valor permanentemente en todas nuestras obras reduciendo los costos  y los tiempos de ejecución a través de metodologías constructivas como Lean Construction.</p>
                            <p>Disponemos de un equipo de técnicos y profesionales con experiencia certificada para ofrecer una propuesta acorde a las expectativas del cliente.</p>
                            <p>Ejecutamos Obras de construcción tales como:</p>
                            <ul className="service-list">
                                <li>Edificios Unifamiliares y Multifamiliares.</li>
                                <li>Edificios de Oficinas.</li>
                                <li>Hoteles.</li>
                                <li>Laboratorios.</li>
                                <li>Clínicas y Hospitales.</li>
                                <li>Locales Comerciales.</li>
                                <li>Fabricas Industriales.</li>
                                <li>Demoliciones.</li>
                            </ul>
                            <ArticleService heading={"Implementación, Equipamiento y Remodelación."} img={"https://faro51.com/wp-content/uploads/2018/07/servicio-implementacion-faro51.jpg"} paragraphs={paragraphs}></ArticleService>
                            <AccordionSet content={AccordionsConstruccion}></AccordionSet>
                        </article>
                    </section>
                </main>
            </section>
            <Footer></Footer>
        </>);
}

export default ServiciosConstruccion;