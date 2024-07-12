import NavBar from "./NavBar"
import Carrusel from "./Carrusel"
import Data from "./Data"
import CardSlider from "./Projects"
import Announces  from "../assets/Announces"
import servicios from "../assets/Servicios"

export default function Home() {
    return (
        <>
            <NavBar></NavBar>
            <Carrusel images={Announces}></Carrusel>
            <Data services={servicios}></Data>
            <CardSlider/>
        </>
        // <Clients></Clients>
        // <Metodology></Metodology>
        // <Footer></Footer>
    )
}
