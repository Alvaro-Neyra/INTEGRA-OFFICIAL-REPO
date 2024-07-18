import NavBar from "../components/NavBar"
import Carrusel from "../components/Carrusel"
import Data from "../components/Data"
import CardSlider from "../components/Projects"
import Footer from "../components/Footer"
import InfiniteScroller from "../components/InfiniteScroller"
import Announces  from "../assets/Announces"
import servicios from "../assets/Servicios"
import Clients from "../assets/Clients"

export default function Home() {
    return (
        <>
            <NavBar active={false} fixed={true}></NavBar>
            <main>
                <Carrusel images={Announces}></Carrusel>
                <Data services={servicios}></Data>
                <CardSlider/>
                <InfiniteScroller heading={"Clients"} content={Clients} duration="20s" direction="forwards"/>
            </main>
            <Footer/>
        </>
    )
}
