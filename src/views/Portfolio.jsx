import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { HeroPortfolio } from "../assets/HeroText";
import Hero from "../components/Hero";
import { useEffect } from 'react';

const videoPortfolio = {
    webm: {
        "720p": "videos/portfolio/webm/portfolio-720p.webm",
        "original": "videos/portfolio/webm/portfolio.webm"
    },
    mp4: {
        "720p": "videos/portfolio/mp4/portfolio-720p.mp4",
        "original": "videos/portfolio/mp4/portfolio.mp4"
    }
};

function Portfolio() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , []);

    return (
        <>
            <NavBar position={"fixed"} active={false}></NavBar>
            <main>
                <Hero video={videoPortfolio} heading={"Portfolio"} paragraphs={HeroPortfolio} linkText={"No hay proyectos actualmente"} linkTo={"#"}></Hero>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Portfolio;