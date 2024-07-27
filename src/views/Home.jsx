import NavBar from "../components/NavBar"
import Carrusel from "../components/Carrusel"
import Data from "../components/Data"
import CardSlider from "../components/Projects"
import Footer from "../components/Footer"
import InfiniteScroller from "../components/InfiniteScroller"
import Announces  from "../assets/Announces"
import servicios from "../assets/Servicios"
import Clients from "../assets/Clients"
import AbsoluteElements from "../components/AbsoluteElements"
import { useEffect } from "react"

export default function Home() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , []);

    return (
        <>
            <NavBar active={false} position={"fixed"}></NavBar>
            <main id="inicio-title">
                <Carrusel images={Announces}></Carrusel>
                <Data services={servicios}></Data>
                <CardSlider/>
                <InfiniteScroller heading={"Clientes"} content={Clients} duration="20s" direction="forwards"/>
            </main>
            <Footer/>
            <AbsoluteElements/>
        </>
    )
}
