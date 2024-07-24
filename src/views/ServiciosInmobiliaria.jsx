import { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NavBarAside from "../components/NavBarAside";
import ImagenAndTextService from "../components/ImageAndTextService";
import projectPhases from "../assets/ProjectPhases";
import "../styles/Servicios.css";
import ResponsiveAsideDiv from "../components/ResponsiveAsideDiv";

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
                        <ImagenAndTextService heading={"INMOBILIARIA"} text={"En nuestro servicio inmobiliario, ofrecemos soluciones integrales para la compra, venta y gestión de propiedades. Contamos con un equipo de expertos que asesoran y apoyan a nuestros clientes en cada paso del proceso inmobiliario, asegurando transacciones seguras y exitosas. Nos comprometemos a proporcionar un servicio personalizado, adaptado a las necesidades específicas de cada cliente, y a maximizar el valor de sus inversiones en bienes raíces."} img={"https://faro51.com/wp-content/uploads/2018/07/servicio-de-inmobiliaria-faro-51.jpg"} backgroundColor={"hsl(0, 0%, 95%)"} widthImg={"40vw"} widthDiv={"30vw"} paddingDiv={"3vw"} textColor={"#012E40"} borderColor={"#012E40"}></ImagenAndTextService>
                        <article className="servicios-content">
                            <p>FARO 51 desarrolla todo el ciclo de vida del proyecto,  desde la evaluación de la compra del terreno hasta la entrega del producto al usuario final logrando la rentabilidad esperada.</p>
                            <p>Por la experiencia del equipo de FARO 51 orientamos la mejor estrategia según la ubicación del proyecto con el objetivo de satisfacer la necesidades de los clientes.</p>

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
        </>);
}

export default ServiciosInmobiliaria;