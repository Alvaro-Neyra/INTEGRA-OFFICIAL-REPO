import styled from 'styled-components';

const StyledImageAndText = styled.section`
    display: flex;
    width: 100%;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
    }
`;

const StyledImg = styled.img`
    width: 50vw;
    order: ${props => props.order};

    @media screen and (max-width: 1024px) {
        width: 100vw;
        order: 2;
    }
`;

const StyledDiv = styled.div`
    width: 50vw;
    color: ${props => props.textColor ? props.textColor : 'black'};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : 'transparent'};
    padding: 6vw;
    order: ${props => props.order}; // Usar props para determinar el orden

    img {
        width: 100%;
        height: 100%;
    }

    h2 {
        font-size: 2vw;
        font-weight: 800;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    h2 span:nth-child(2) {
        font-size: 4vw;
        font-weight: 10000;
    }
    
    p {
        font-size: 1.5vw;
        font-weight: 500;
        padding-block: 1rem;
    }
    @media screen and (max-width: 1024px) {
        width: 100vw;
        order: 1;
        h2 {
            font-size: 4vw;
        }
        h2 span:nth-child(2) {
            font-size: 6vw;
        }
        p {
            font-size: 3vw;
        }
    }
`;

function ImageAndText({ firstText, firstHeading, secondHeading, text, image, backgroundColor, textColor }) {

    const altText = `Image of ${secondHeading ? secondHeading : firstHeading}`;
    const orderValue = firstText ? 1 : 2;
    const orderImage = firstText ? 2 : 1;

    return (
        <StyledImageAndText>
            <StyledImg src={image} alt={altText} title={altText} order={orderImage} />
            <StyledDiv backgroundColor={backgroundColor} textColor={textColor} order={orderValue}>
                <h2><span>{firstHeading}</span><span>{secondHeading}</span></h2>
                <p>{text}</p>
            </StyledDiv>
        </StyledImageAndText>
    );
}

export default ImageAndText;
