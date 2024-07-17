import NavBar from "./NavBar"
import Carrusel from "./Carrusel"
import Data from "./Data"
import CardSlider from "./Projects"
import Footer from "./Footer"
import InfiniteScroller from "./InfiniteScroller"
import Announces  from "../assets/Announces"
import servicios from "../assets/Servicios"
import Clients from "../assets/Clients"

export default function Home() {
    return (
        <>
            <NavBar></NavBar>
            <main>
                <Carrusel images={Announces}></Carrusel>
                <Data services={servicios}></Data>
                <CardSlider/>
                <InfiniteScroller heading={"Clients"} content={Clients} duration="20s" direction="forwards"/>
            </main>
            <Footer/>
        </>
        // <Metodology></Metodology>
        // <Footer></Footer>
    )
}
