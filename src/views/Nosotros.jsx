import Footer from "../components/Footer";
import Welcome from "../components/Welcome";
import Innovation from "../components/Innovation";
import NavBar from "../components/NavBar";
import { useEffect } from "react";

function Nosotros() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , []);

    return (
        <>
            <NavBar active={true} fixed={false}></NavBar>
            <main>
                <Welcome></Welcome>
                <Innovation></Innovation>
            </main>
            <Footer></Footer>
        </>
    );
}

export default Nosotros;
