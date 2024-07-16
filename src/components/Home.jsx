import NavBar from "./NavBar"
import Carrusel from "./Carrusel"
import Data from "./Data"
import CardSlider from "./Projects"
import InfiniteCarousel from "./InfiniteCarousel"
import Footer from "./Footer"
import Announces  from "../assets/Announces"
import servicios from "../assets/Servicios"

export default function Home() {
    return (
        <>
            <NavBar></NavBar>
            <main>
                <Carrusel images={Announces}></Carrusel>
                <Data services={servicios}></Data>
                <CardSlider/>
                <InfiniteCarousel/>
            </main>
            <Footer/>
        </>
        // <Metodology></Metodology>
        // <Footer></Footer>
    )
}
