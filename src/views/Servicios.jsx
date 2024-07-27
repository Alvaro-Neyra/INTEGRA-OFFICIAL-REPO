import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Data from '../components/Data';
import Hero from '../components/Hero';
import Services from '../assets/Servicios';
import { HeroServices } from '../assets/HeroText';
import AbsoluteElements from '../components/AbsoluteElements';

function Servicios() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , []);

    return (
        <>
            <NavBar position={"fixed"} active={false}></NavBar>
            <main>
                <Hero video={"videos/hero.mp4"} heading={"Servicios"} paragraphs={HeroServices} linkText={"Ver Servicios"} linkTo={"#services"}></Hero>
                <Data services={Services}></Data>
            </main>
            <Footer></Footer>
            <AbsoluteElements></AbsoluteElements>
        </>
    )
}

export default Servicios;