import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.active ? 'bold' : 'normal'};
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    transition: all 0.5s ease-in-out;
    width: ${props => props.width};
    text-align: center;
    background-color: ${props => props.active ? props.backgroundActive : props.backgroundColor};
    color: ${props => props.active ? props.colorActive : props.colorText};

    &:hover {
        background-color: ${props => props.active ? props.backgroundActiveHover : props.backgroundHover};
        color: ${props => props.active ? props.colorActiveHover : props.colorHover};
    }
`;

function ButtonLink({ active, to, children, backgroundColor, backgroundHover, colorHover, colorText, width, fontSize, colorActive, backgroundActive, backgroundActiveHover, colorActiveHover, className }) {
    const linkProps = { 
        to: to, 
        backgroundColor, 
        backgroundHover, 
        colorHover, 
        colorText,
        width,
        fontSize,
        active,
        colorActive,
        backgroundActive,
        backgroundActiveHover,
        colorActiveHover,
        className
    };

    return (
        <StyledLink
            {...linkProps}
        >
            {children}
        </StyledLink>
    );
}

export default ButtonLink;
