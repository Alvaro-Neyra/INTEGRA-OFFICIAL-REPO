import NavBar from "./NavBar"
import Carrusel from "./Carrusel"
import Announces  from "../assets/Announces"

export default function Home() {
    return (
        <>
            <NavBar></NavBar>
            <Carrusel images={Announces}></Carrusel>
        </>
        // <Data></Data>
        // <Services></Services>
        // <Projects></Projects>
        // <Clients></Clients>
        // <Metodology></Metodology>
        // <Footer></Footer>
    )
}
