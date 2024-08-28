import { forwardRef, useEffect, useRef } from "react";
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
    height: 0;
    max-height: 200vh;
    transition: transform 200ms ease;
    h2 {
        font-size: 4vw;
        text-align: center;
        color: #012E40;
        margin-top: 3vw;
    }
    nav {
        width: 100%;
        padding: 1vw;
        height: 25%;
        overflow: hidden; /* Add a scrollbar if needed */
        overflow-x: hidden;
        mask-image: linear-gradient(180deg, #000 0 calc(100% - 6rem), #0000);
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
    ul li {
        width: 100%;
    }
    @media only screen and (max-width: 1024px) and (orientation: portrait) { 
        transform: translateX(-200%);
        height: 200vh;
        &.responsive-aside {
            z-index: 5;
            background-color: white;
            transform: translateX(0);
            visibility: visible;
            align-items: flex-start;
            width: 50vw;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        &.responsive-aside h2 {
            width: 100%;
        }
    }
    @media only screen and (max-width: 500px) and (orientation: portrait) {
        ul {
            gap: 4vw;
        }
        h2 {
            font-size: 5.5vw;
        }
        a {
            font-size: 4vw;
        }
        &.responsive-aside {
            width: 60vw;
        }
    }
`;

const NavBarAsideShadow = styled.div`
    display: none;
    @media only screen and (max-width: 1024px) and (orientation: portrait) {
            cursor: pointer;
            display: block;
            content: '';
            position: absolute;
            top: 0;
            left: 100%;
            width: 50vw;
            height: 200vh;
            background: rgba(0, 0, 0, 0.2);
            z-index: 4;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transition: none;
    }
`;

const NavBarAsideRef = forwardRef((props, ref) => {
    const { pathname } = useLocation();

    const ShadowContainer = useRef(null);

    const clickShadow = ((e) => {
        if (e.target === ShadowContainer.current && ref.current.classList.contains('responsive-aside')) {
            ref.current.classList.remove('responsive-aside');
            document.body.classList.remove('no-scroll');
        }
    })

    return (
        <StyledAsideRef ref={ref} {...props}>
            <h2>Servicios</h2>
            <nav>
                <ul>
                    <NavAsideLink width={"100%"} fontSize="3vw" fontSizeActive="3vw" borderColor="#26266F" colorActive="#26266F" backgroundActive={"hsl(0, 0%, 90%)"} backgroundColor={"hsl(0, 0%, 100%)"} colorText={"#26266F"} active={pathname === '/servicios/construccion'} to="/servicios/construccion">Construcción</NavAsideLink>
                    <NavAsideLink width={"100%"} fontSize="3vw" fontSizeActive="3vw" borderColor="#26266F" colorActive="#26266F" backgroundActive={"hsl(0, 0%, 90%)"} backgroundColor={"hsl(0, 0%, 100%)"} colorText={"#26266F"} active={pathname === '/servicios/gerencia-de-proyectos'} to="/servicios/gerencia-de-proyectos">Gerencia De Proyectos</NavAsideLink>
                    <NavAsideLink width={"100%"} fontSize="3vw" fontSizeActive="3vw" borderColor="#26266F" colorActive="#26266F" backgroundActive={"hsl(0, 0%, 90%)"} backgroundColor={"hsl(0, 0%, 100%)"} colorText={"#26266F"} active={pathname === '/servicios/inmobiliaria'} to="/servicios/inmobiliaria">Inmobiliaria</NavAsideLink>
                    <NavAsideLink width={"100%"} fontSize="3vw" fontSizeActive="3vw" borderColor="#26266F" colorActive="#26266F" backgroundActive={"hsl(0, 0%, 90%)"} backgroundColor={"hsl(0, 0%, 100%)"} colorText={"#26266F"} active={pathname === '/servicios/expediente-tecnico'} to="/servicios/expediente-tecnico">Expediente Técnico</NavAsideLink>
                </ul>
            </nav>
            <NavBarAsideShadow ref={ShadowContainer} onClick={clickShadow}></NavBarAsideShadow>
        </StyledAsideRef>
    );
});

export default NavBarAsideRef;
