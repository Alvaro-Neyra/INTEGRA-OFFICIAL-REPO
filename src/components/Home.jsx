import NavBar from "./NavBar"
import Carrusel from "./Carrusel"
import Data from "./Data"
import Projects from "./Projects"
import Announces  from "../assets/Announces"
import servicios from "../assets/Servicios"
import projects from "../assets/Projects"

export default function Home() {
    return (
        <>
            <NavBar></NavBar>
            <Carrusel images={Announces}></Carrusel>
            <Data services={servicios}></Data>
            <Projects projects={projects}></Projects>
        </>
        // <Clients></Clients>
        // <Metodology></Metodology>
        // <Footer></Footer>
    )
}
