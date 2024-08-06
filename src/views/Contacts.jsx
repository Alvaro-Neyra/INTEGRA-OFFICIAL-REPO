import { useEffect } from "react";
import HeroImage from "../components/HeroImage";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AbsoluteElements from "../components/AbsoluteElements";
import ContactInfo from "../components/ContactInfo";
import Form from "../components/Form";
import "../styles/Contacts.css";

const contactoImages = {
    webp: {
        xsmall: "images/contacto-images/webp/contacto-hero-image-320px.webp",
        small: "images/contacto-images/webp/contacto-hero-image-480px.webp",
        medium: "images/contacto-images/webp/contacto-hero-image-600px.webp",
        large: "images/contacto-images/webp/contacto-hero-image-1024px.webp",
        xlarge: "images/contacto-images/webp/contacto-hero-image-1200px.webp",
        xxlarge: "images/contacto-images/webp/contacto-hero-image-1600px.webp",
        giant: "images/contacto-images/webp/contacto-hero-image-1900px.webp",
        xgiant: "images/contacto-images/webp/contacto-hero-image-2100px.webp",
        original: "images/contacto-images/webp/contacto-hero-image-original.webp"
    },
    jpg: {
        xsmall: "images/contacto-images/jpg/contacto-hero-image-320px.jpg",
        small: "images/contacto-images/jpg/contacto-hero-image-480px.jpg",
        medium: "images/contacto-images/jpg/contacto-hero-image-600px.jpg",
        large: "images/contacto-images/jpg/contacto-hero-image-1024px.jpg",
        xlarge: "images/contacto-images/jpg/contacto-hero-image-1200px.jpg",
        xxlarge: "images/contacto-images/jpg/contacto-hero-image-1600px.jpg",
        giant: "images/contacto-images/jpg/contacto-hero-image-1900px.jpg",
        xgiant: "images/contacto-images/jpg/contacto-hero-image-2100px.jpg",
        original: "images/contacto-images/jpg/contacto-hero-image-original.jpg"
    }
}

function Contacts() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <NavBar active={true} position={"static"}></NavBar>
            <HeroImage image={contactoImages} heading="Contacto"/>
            <main className="contacts-main">
                <ContactInfo></ContactInfo>
                <Form></Form>
            </main>
        <Footer></Footer>
        <AbsoluteElements></AbsoluteElements>
        </>
    );
}

export default Contacts;