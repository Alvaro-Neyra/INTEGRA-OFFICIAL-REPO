import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { HeroPortfolio } from "../assets/HeroText";
import Hero from "../components/Hero";
import { useEffect } from 'react';

function Portfolio() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , []);

    return (
        <>
            <NavBar position={"fixed"} active={false}></NavBar>
            <main>
                <Hero video={"videos/portfolio.mp4"} heading={"Portfolio"} paragraphs={HeroPortfolio} linkText={"No hay proyectos actualmente"} linkTo={"#"}></Hero>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Portfolio;