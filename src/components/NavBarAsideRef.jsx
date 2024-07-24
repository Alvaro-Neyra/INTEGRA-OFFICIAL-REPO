import React, { forwardRef } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import NavAsideLink from "./NavAsideLink";

const StyledAsideRef = styled.aside`
    visibility: hidden;
    position: absolute;
    top: 10vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-left: 5px solid #012E40;
    width: 20vw;
    height: 101vh;
    transition: transform 200ms ease;
    h2 {
        font-size: 2vw;
        text-align: center;
        color: #012E40;
        margin-top: 3vw;
    }
    nav {
        width: 20vw;
        padding: 1vw;
    }
    ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 1.6vw;
        width: 100%;
    }

    @media only screen and (max-width: 1024px) { 
        transform: translateX(-200%);
        &.responsive-aside {
            z-index: 5;
            background-color: white;
            transform: translateX(0);
            visibility: visible;
            align-items: flex-start;
            width: 50vw;
        }
        &.responsive-aside h2 {
            width: 100%;
        }
    }
`;

const NavBarAsideRef = forwardRef((props, ref) => {
    const { pathname } = useLocation();

    return (
        <StyledAsideRef ref={ref} {...props}>
            <h2>Servicios</h2>
            <nav>
                <ul>
                    <NavAsideLink fontSize="1.5vw" fontSizeActive="1.5vw" borderColor="#26266F" colorActive="#26266F" backgroundActive={"hsl(0, 0%, 90%)"} backgroundColor={"hsl(0, 0%, 100%)"} colorText={"#26266F"} active={pathname === '/servicios/construccion'} to="/servicios/construccion">Construcción</NavAsideLink>
                    <NavAsideLink fontSize="1.5vw" fontSizeActive="1.5vw" borderColor="#26266F" colorActive="#26266F" backgroundActive={"hsl(0, 0%, 90%)"} backgroundColor={"hsl(0, 0%, 100%)"} colorText={"#26266F"} active={pathname === '/servicios/gerencia-de-proyectos'} to="/servicios/gerencia-de-proyectos">Gerencia De Proyectos</NavAsideLink>
                    <NavAsideLink fontSize="1.5vw" fontSizeActive="1.5vw" borderColor="#26266F" colorActive="#26266F" backgroundActive={"hsl(0, 0%, 90%)"} backgroundColor={"hsl(0, 0%, 100%)"} colorText={"#26266F"} active={pathname === '/servicios/inmobiliaria'} to="/servicios/inmobiliaria">Inmobiliaria</NavAsideLink>
                    <NavAsideLink fontSize="1.5vw" fontSizeActive="1.5vw" borderColor="#26266F" colorActive="#26266F" backgroundActive={"hsl(0, 0%, 90%)"} backgroundColor={"hsl(0, 0%, 100%)"} colorText={"#26266F"} active={pathname === '/servicios/expediente-tecnico'} to="/servicios/expediente-tecnico">Expediente Técnico</NavAsideLink>
                    <NavAsideLink fontSize="1.5vw" fontSizeActive="1.5vw" borderColor="#26266F" colorActive="#26266F" backgroundActive={"hsl(0, 0%, 90%)"} backgroundColor={"hsl(0, 0%, 100%)"} colorText={"#26266F"} active={pathname === '/servicios/inspeccion-tecnica'} to="/servicios/inspeccion-tecnica">Inspección Técnica</NavAsideLink>
                    <NavAsideLink fontSize="1.5vw" fontSizeActive="1.5vw" borderColor="#26266F" colorActive="#26266F" backgroundActive={"hsl(0, 0%, 90%)"} backgroundColor={"hsl(0, 0%, 100%)"} colorText={"#26266F"} active={pathname === '/servicios/supervision-de-obra'} to="/servicios/supervision-de-obra">Supervisión de Obra</NavAsideLink>
                </ul>
            </nav>
        </StyledAsideRef>
    );
});

export default NavBarAsideRef;
