import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    font-size: 150%;
    font-weight: 800;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    transition: all 0.5s ease-in-out;
    width: 20vw;
    text-align: center;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.colorText};
    &:hover {
        background-color: ${props => props.backgroundHover};
        color: ${props => props.colorHover};
    }
`;

function ButtonLink({ route, text, backgroundColor, backgroundHover, colorHover, colorText }) {
    return (
        <StyledLink
            to={route}
            backgroundColor={backgroundColor}
            backgroundHover={backgroundHover}
            colorText={colorText}
            colorHover={colorHover}
        >
            {text}
        </StyledLink>
    );
}

export default ButtonLink;