import { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NavBarAside from "../components/NavBarAside";
import "../styles/Servicios.css";
import ResponsiveAsideDiv from "../components/ResponsiveAsideDiv";

function ServiciosInspeccion() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <section>
        <div className="navbars">
            <NavBar active={true} position={"sticky"}></NavBar>
            <ResponsiveAsideDiv></ResponsiveAsideDiv>
        </div>
        <main className="servicios-main">
            <NavBarAside></NavBarAside>
        </main>
        </section>
        <Footer></Footer>
        </>
    );
}

export default ServiciosInspeccion;