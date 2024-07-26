import styled from 'styled-components';
import { Link }from 'react-router-dom';

const StyledLi = styled.li`
    width: ${props => props.width};
`;

const StyledNavAsideLink = styled(Link)`
    text-decoration: none;
    padding: 0.6vw 1.1vw;
    font-size: ${props => props.active ? props.fontSizeActive : props.fontSize};
    font-weight: ${props => props.active ? 'bold' : 'normal'};
    background-color: ${props => props.active ? props.backgroundActive : props.backgroundColor};
    border-left: ${props => props.active ? '5px solid ' + props.borderColor : '5px solid transparent'};
    color: ${props => props.active ? props.colorActive : props.colorText};
    text-align: center;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    transition: all 0.5s ease;
    &:hover {
        background-color: ${props => props.active ? props.backgroundActiveHover : props.backgroundHover};
        color: ${props => props.active ? props.colorActiveHover : props.colorHover};
        border-left: ${props => '5px solid ' + props.borderColor};
    }
    width: 100%;
`;

function NavAsideLink({ active, to, children, backgroundColor, backgroundHover, colorHover, colorText, width, fontSize, fontSizeActive, colorActive, backgroundActive, backgroundActiveHover, colorActiveHover, borderColor ,className }) {

    const linkProps = { 
        backgroundColor, 
        backgroundHover, 
        colorHover, 
        colorText,
        fontSize,
        fontSizeActive,
        active,
        colorActive,
        backgroundActive,
        backgroundActiveHover,
        colorActiveHover,
        borderColor,
        className,
        to
    };

    const setScroll = () => {
        if (document.body.classList.contains('no-scroll')) {
            document.body.classList.remove('no-scroll');
        }
    };

    return (
        <StyledLi width={width}>
        <StyledNavAsideLink {...linkProps} onClick={setScroll}>
            {children}
        </StyledNavAsideLink>
        </StyledLi>
    );
}

export default NavAsideLink;