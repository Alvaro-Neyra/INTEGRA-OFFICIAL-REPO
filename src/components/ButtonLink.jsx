import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    font-size: ${props => props.fontSize};
    font-weight: 800;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    transition: all 0.5s ease-in-out;
    width: ${props => props.width};
    text-align: center;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.colorText};

    &:hover {
        background-color: ${props => props.backgroundHover};
        color: ${props => props.colorHover};
    }
`;

function ButtonLink({ route, text, backgroundColor, backgroundHover, colorHover, colorText, width, fontSize}) {
    const linkProps = { 
        to: route, 
        backgroundColor, 
        backgroundHover, 
        colorHover, 
        colorText,
        width,
        fontSize
    };

    return (
        <StyledLink
            {...linkProps}
        >
            {text}
        </StyledLink>
    );
}

export default ButtonLink;
