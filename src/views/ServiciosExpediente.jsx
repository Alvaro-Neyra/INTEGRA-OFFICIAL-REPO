import { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NavBarAside from "../components/NavBarAside";
import ImagenAndTextService from "../components/ImageAndTextService";
import AccordionSet from "../components/AccordionSet";
import { AccordionsExpediente } from "../assets/AccordionArrays";
import "../styles/Servicios.css";
import ResponsiveAsideDiv from "../components/ResponsiveAsideDiv";
import AbsoluteElements from "../components/AbsoluteElements";

function ServiciosExpediente() {
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
                        <ImagenAndTextService heading={"EXPEDIENTE TÉCNICO"} text={"Nuestro servicio de expediente técnico ofrece una solución completa para la gestión y documentación de proyectos. Nos encargamos de la elaboración de informes técnicos detallados que cumplen con los requisitos normativos y técnicos necesarios para la correcta ejecución de los proyectos. Aseguramos que todos los aspectos del proyecto estén debidamente documentados y respaldados para garantizar la transparencia y el cumplimiento de los estándares de calidad."} img={"https://faro51.com/wp-content/uploads/2018/09/servicio-Bim-faro51.jpg"} backgroundColor={"hsl(0, 0%, 95%)"} widthImg={"40vw"} widthDiv={"30vw"} paddingDiv={"3vw"} textColor={"#012E40"} borderColor={"#012E40"}></ImagenAndTextService>
                        <article className="servicios-content">
                            <p>FARO 51 ofrece el servicio de desarrollo de expediente técnico en el cual implementa la metodología BIM logrando mejores resultados en todas las etapas del proyecto.</p>
                            <p>Es muy poderosa la ventaja que brinda contar con un modelamiento 3D en los proyectos ya que a través del mismo se puede evaluar la viabilidad del proyecto, realizar las estimaciones de costos con mayor precisión, realizar la planificación de la ejecución con menor incertidumbre, hacer seguimiento al plan de calidad, compatibilizar planos de todas las especialidades reduciendo el número de consultas en la ejecución y logrando ahorros.</p>
                            <p>Tener un modelo 3D del proyecto permite a nuestros clientes tener una idea más clara del producto final antes de la ejecución de obra, es así que el mayor número de modificaciones solicitadas por los clientes se darán oportunamente en la etapa de proyecto.</p>
                            <AccordionSet content={AccordionsExpediente}></AccordionSet>
                        </article>
                    </section>
                </main>
            </section>
            <Footer></Footer>
            <AbsoluteElements></AbsoluteElements>
        </>);
}

export default ServiciosExpediente;