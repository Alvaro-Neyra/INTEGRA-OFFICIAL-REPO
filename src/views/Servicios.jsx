import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Data from '../components/Data';
import Hero from '../components/Hero';
import Services from '../assets/Servicios';
import { HeroServices } from '../assets/HeroText';
import AbsoluteElements from '../components/AbsoluteElements';

const videoServicios = {
    webm: {
        "240p": "videos/services/webm/services-240p.webm",
        "360p": "videos/services/webm/services-360p.webm",
        "480p": "videos/services/webm/services-480p.webm",
        "720p": "videos/services/webm/services-720p.webm",
        "1080p": "videos/services/webm/services-1080p.webm",
        "original": "videos/services/webm/services.webm"
    },
    mp4: {
        "240p": "videos/services/mp4/services-240p.mp4",
        "360p": "videos/services/mp4/services-360p.mp4",
        "480p": "videos/services/mp4/services-480p.mp4",
        "720p": "videos/services/mp4/services-720p.mp4",
        "1080p": "videos/services/mp4/services-1080p.mp4",
        "original": "videos/services/mp4/services.mp4"
    }
}

function Servicios() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , []);

    return (
        <>
            <NavBar position={"fixed"} active={false}></NavBar>
            <main>
                <Hero video={videoServicios} heading={"Servicios"} paragraphs={HeroServices} linkText={"Ver Servicios"} linkTo={"#services"}></Hero>
                <Data services={Services}></Data>
            </main>
            <Footer></Footer>
            <AbsoluteElements></AbsoluteElements>
        </>
    )
}

export default Servicios;