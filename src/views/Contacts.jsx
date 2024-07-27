import { useEffect } from "react";
import HeroImage from "../components/HeroImage";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import contactoImage from "../images/contacto-hero-image.jpg";
import AbsoluteElements from "../components/AbsoluteElements";
import ContactInfo from "../components/ContactInfo";
import "../styles/Contacts.css";

function Contacts() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <NavBar active={true} position={"static"}></NavBar>
            <HeroImage image={contactoImage} heading="Contacto"/>
            <main className="contacts-main">
                <ContactInfo></ContactInfo>
            </main>
        <Footer></Footer>
        <AbsoluteElements></AbsoluteElements>
        </>
    );
}

export default Contacts;