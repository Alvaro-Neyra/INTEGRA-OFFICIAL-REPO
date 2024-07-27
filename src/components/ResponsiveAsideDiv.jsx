import { TbLayoutNavbar } from "react-icons/tb";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import NavBarAsideRef from "./NavBarAsideRef";
import { useRef } from "react";

const ResponsiveAsideContainer = styled.div`
    position: relative;
`;

const ResponsiveAside = styled.div`
    display: none;
    background-color: white;
    padding-inline: 4vw;
    padding-block: 0;
    height: 10vw;
    max-height: 10vw;
    @media only screen and (max-width: 1024px) and (orientation: portrait) {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 5vw;
        font-size: 3vw;
        border-block: 1px solid #012E40;
    }
    @media only screen and (max-width: 500px) and (orientation: portrait) {
            font-size: 5vw; 
    }
`

const StyledAsideButton = styled.button`
    display: none;
    margin: 0;
    cursor: pointer;
    height: 5vw;
    max-height: 5vw;
    @media only screen and (max-width: 1024px) and (orientation: portrait) {
        &.responsive-aside-button {
            display: flex;
            margin: 1vw 0;
            justify-content: flex-start;
            align-items: center;
            padding-block: 1vh;
            font-size: 5vw;
            background-color: white;
            color: #012E40;
            border: none;
        }
        .asidenav-btn {
            background-color: white;
            font-size: inherit;
            color: #012E40;
        }
        .asidenav-btn path {
            fill: white;
        }
        &.responsive-aside-button .asidenav-btn:hover path {
            fill: rgba(0, 0, 0, 0.2);
        }
    }
    @media only screen and (max-width: 500px) and (orientation: portrait) {
        &.responsive-aside-button {
            font-size: 7vw; 
        }
    }
`;

function ResponsiveAsideDiv() {
    const NavAside = useRef(null);
    const { pathname } = useLocation();


    const showNavbar = () => {
        NavAside.current.classList.toggle("responsive-aside");
        if (NavAside.current.classList.contains("responsive-aside")) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    };


    const StyledAsideButtonText = (pathname) => {
        switch (pathname) {
            case "/servicios/construccion":
                return "Servicios/Construcción";
            case "/servicios/gerencia-de-proyectos":
                return "Servicios/Gerencia de Proyectos";
            case "/servicios/inmobiliaria":
                return "Servicios/Inmobiliaria";
            case "/servicios/expediente-tecnico":
                return "Servicios/Expediente Técnico";
            case "/servicios/inspeccion-tecnica":
                return "Servicios/Inspección Técnica";
            case "/servicios/supervision-de-obra":
                return "Servicios/Supervisión de Obra";
            default:
                return "Servicios";
        }
    }
    
    return (
        <ResponsiveAsideContainer>
            <ResponsiveAside>
            <StyledAsideButton className="responsive-aside-button" onClick={showNavbar}><TbLayoutNavbar className="asidenav-btn"></TbLayoutNavbar></StyledAsideButton>
                {StyledAsideButtonText(pathname)}
            </ResponsiveAside>
            <NavBarAsideRef ref={NavAside}></NavBarAsideRef>
        </ResponsiveAsideContainer>
    );
}

export default ResponsiveAsideDiv;