import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Welcome from "../components/Welcome";

function Nosotros() {
    return (
        <>
            <NavBar active={true} fixed={false}></NavBar>
            <main>
                <Welcome></Welcome>
            </main>
            <Footer></Footer>
        </>
    );
}

export default Nosotros;
