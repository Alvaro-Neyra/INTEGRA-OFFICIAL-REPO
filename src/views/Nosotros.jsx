import Footer from "../components/Footer";
import Welcome from "../components/Welcome";
import Innovation from "../components/Innovation";
import NavBar from "../components/NavBar";
import ImageAndText from "../components/ImageAndText";
import Values from "../components/Values";
import { useEffect } from "react";
import AbsoluteElements from "../components/AbsoluteElements";

const missionImages = {
    webp: {
        xsmall: "images/mision-image/webp/mision-320px.webp",
        small: "images/mision-image/webp/mision-480px.webp",
        medium: "images/mision-image/webp/mision-768px.webp",
        large: "images/mision-image/webp/mision-1024px.webp",
        xlarge: "images/mision-image/webp/mision-1200px.webp",
        xxlarge: "images/mision-image/webp/mision-1600px.webp",
        original: "images/mision-image/webp/mision.webp"
    },
    jpg: {
        xsmall: "images/mision-image/jpg/mision-320px.jpg",
        small: "images/mision-image/jpg/mision-480px.jpg",
        medium: "images/mision-image/jpg/mision-768px.jpg",
        large: "images/mision-image/jpg/mision-1024px.jpg",
        xlarge: "images/mision-image/jpg/mision-1200px.jpg",
        xxlarge: "images/mision-image/jpg/mision-1600px.jpg",
        original: "images/mision-image/jpg/mision.jpg"
    }
}

const visionImages = {
    webp: {
        xsmall: "images/vision-image/webp/vision-320px.webp",
        small: "images/vision-image/webp/vision-480px.webp",
        medium: "images/vision-image/webp/vision-768px.webp",
        large: "images/vision-image/webp/vision-1024px.webp",
        xlarge: "images/vision-image/webp/vision-1200px.webp",
        xxlarge: "images/vision-image/webp/vision-1600px.webp",
        original: "images/vision-image/webp/vision.webp"
    },
    jpg: {
        xsmall: "images/vision-image/jpg/vision-320px.jpg",
        small: "images/vision-image/jpg/vision-480px.jpg",
        medium: "images/vision-image/jpg/vision-768px.jpg",
        large: "images/vision-image/jpg/vision-1024px.jpg",
        xlarge: "images/vision-image/jpg/vision-1200px.jpg",
        xxlarge: "images/vision-image/jpg/vision-1600px.jpg",
        original: "images/vision-image/jpg/vision.jpg"
    }
}


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
                <ImageAndText firstText={false} firstHeading="Nuestra" secondHeading="Mision" text="Nuestra misión es ser una empresa líder en la industria de la construcción, ofreciendo servicios de calidad y soluciones innovadoras a nuestros clientes. Nos esforzamos por superar las expectativas de nuestros clientes y ser un socio confiable en todos los proyectos de construcción." image={missionImages} backgroundColor="hsl(0, 0%, 95%)" width={"50vw"}></ImageAndText>
                <ImageAndText firstText={true} firstHeading="Nuestra" secondHeading="Vision" text="Nuestra visión es ser reconocidos como una empresa líder en la industria de la construcción, ofreciendo servicios de calidad y soluciones innovadoras a nuestros clientes. Nos esforzamos por superar las expectativas de nuestros clientes y ser un socio confiable en todos los proyectos de construcción." image={visionImages} backgroundColor="hsl(0, 0%, 95%)" width={"50vw"}></ImageAndText>
                <Values></Values>
            </main>
            <Footer></Footer>
            <AbsoluteElements />
        </>
    );
}

export default Nosotros;
