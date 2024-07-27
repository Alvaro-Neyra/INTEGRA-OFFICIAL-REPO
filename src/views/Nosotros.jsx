import Footer from "../components/Footer";
import Welcome from "../components/Welcome";
import Innovation from "../components/Innovation";
import NavBar from "../components/NavBar";
import ImageAndText from "../components/ImageAndText";
import Values from "../components/Values";
import { useEffect } from "react";
import missionImage from "../images/mision.jpg";
import visionImage from "../images/vision.jpg";
import AbsoluteElements from "../components/AbsoluteElements";

function Nosotros() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , []);

    return (
        <>
            <NavBar active={true} position={"static"}></NavBar>
            <main>
                <Welcome></Welcome>
                <Innovation></Innovation>
                <ImageAndText firstText={false} firstHeading="Nuestra" secondHeading="Mision" text="Nuestra misión es ser una empresa líder en la industria de la construcción, ofreciendo servicios de calidad y soluciones innovadoras a nuestros clientes. Nos esforzamos por superar las expectativas de nuestros clientes y ser un socio confiable en todos los proyectos de construcción." image={missionImage} backgroundColor="hsl(0, 0%, 95%)" width={"50vw"}></ImageAndText>
                <ImageAndText firstText={true} firstHeading="Nuestra" secondHeading="Vision" text="Nuestra visión es ser reconocidos como una empresa líder en la industria de la construcción, ofreciendo servicios de calidad y soluciones innovadoras a nuestros clientes. Nos esforzamos por superar las expectativas de nuestros clientes y ser un socio confiable en todos los proyectos de construcción." image={visionImage} backgroundColor="hsl(0, 0%, 95%)" width={"50vw"}></ImageAndText>
                <Values></Values>
            </main>
            <Footer></Footer>
            <AbsoluteElements/>
        </>
    );
}

export default Nosotros;
