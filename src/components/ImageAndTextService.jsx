import styled from 'styled-components';

const StyledImageAndText = styled.section`
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : 'transparent'};
    div {
        width: ${props => props.widthDiv ? props.widthDiv : '50%'};
        padding: ${props => props.paddingDiv ? props.paddingDiv : '2rem'};
        max-width: 100vw;
    }
    img {
        width: ${props => props.widthImg ? props.widthImg : '50%'};
        max-width: 100vw;
        height: 100%;
    }
    div h2 {
        font-size: 2vw;
        color: ${props => props.textColor ? props.textColor : 'black'};
        margin-bottom: 1rem;
        border-left: ${props => props.borderColor ? '5px solid ' + props.borderColor : '5px solid var(--mainColor)'};
        padding: 0.5vw;
        width: 100%;
    }
    div p {
        font-size: 1.3vw;
        color: ${props => props.textColor ? props.textColor : 'black'};
        margin-bottom: 1rem;
    }
    @media only screen and (max-width: 1024px) {
        flex-direction: column;
        text-align: left;
        div {
            width: 100%;
        }
        img {
            width: 100%;
        }
        div h2 {
            font-size: 3vw;
            padding: 1vw;
        }
        div p {
            font-size: 2vw;
        }
    }

    @media only screen and (max-width: 700px) {
        div h2 {
            font-size: 5vw;
            padding: 1vw;
        }
        div p {
            font-size: 4vw;
        }
    }
`;

function ImageAndTextService({backgroundColor, widthDiv, widthImg, paddingDiv, textColor, heading, text, img, borderColor}) {

    const divProps = {
        backgroundColor,
        widthImg,
        widthDiv,
        paddingDiv,
        textColor,
        borderColor
    };

    return (
        <StyledImageAndText {...divProps}>
            <div>
                <h2>{heading}</h2>
                <p>{text}</p>
            </div>
            <picture>
                <source srcSet={img.webp.xsmall} media='(max-width: 320px)' type='image/webp'/>
                <source srcSet={img.webp.small} media='(max-width: 480px)' type='image/webp'/>
                <source srcSet={img.webp.medium} media='(max-width: 600px)' type='image/webp'/>
                <source srcSet={img.webp.large} media='(max-width: 1024px)' type='image/webp'/>
                <source srcSet={img.webp.xlarge} media='(max-width: 1200px)' type='image/webp'/>
                <source srcSet={img.webp.original} type='image/webp'/>

                <source srcSet={img.jpg.xsmall} media='(max-width: 320px)' type='image/jpeg'/>
                <source srcSet={img.jpg.small} media='(max-width: 480px)' type='image/jpeg'/>
                <source srcSet={img.jpg.medium} media='(max-width: 600px)' type='image/jpeg'/>
                <source srcSet={img.jpg.large} media='(max-width: 1024px)' type='image/jpeg'/>
                <source srcSet={img.jpg.xlarge} media='(max-width: 1200px)' type='image/jpeg'/>
                <source srcSet={img.jpg.original} type='image/jpeg'/>

                <img src={img.jpg.original} alt={"image of " + heading} loading='lazy'/>
            </picture>
        </StyledImageAndText>
    );
}

export default ImageAndTextService;