import styled from 'styled-components';

const StyledArticleService = styled.article`
    h2 {
        padding: 1.5vw 0;
    }
    img {
        width: 100%;
    }
    p {
        padding: 1vw 0;
    }
`;

function ArticleService({heading, img, paragraphs}) {
    return (
        <StyledArticleService>
            <h2>{heading}</h2>
            <picture>
                <source srcSet={img.webp.xsmall} media="(max-width: 320px)" type="image/webp"/>
                <source srcSet={img.webp.small} media="(max-width: 480px)" type="image/webp"/>
                <source srcSet={img.webp.medium} media="(max-width: 600px)" type="image/webp"/>
                <source srcSet={img.webp.large} media="(max-width: 1024px)" type="image/webp"/>
                <source srcSet={img.webp.xlarge} media="(max-width: 1200px)" type="image/webp"/>
                <source srcSet={img.webp.xxlarge} media="(max-width: 1600px)" type="image/webp"/>
                <source srcSet={img.webp.original} type="image/webp"/>

                <source srcSet={img.jpg.xsmall} media="(max-width: 320px)" type="image/jpeg"/>
                <source srcSet={img.jpg.small} media="(max-width: 480px)" type="image/jpeg"/>
                <source srcSet={img.jpg.medium} media="(max-width: 600px)" type="image/jpeg"/>
                <source srcSet={img.jpg.large} media="(max-width: 1024px)" type="image/jpeg"/>
                <source srcSet={img.jpg.xlarge} media="(max-width: 1200px)" type="image/jpeg"/>
                <source srcSet={img.jpg.xxlarge} media="(max-width: 1600px)" type="image/jpeg"/>
                <source srcSet={img.jpg.original} type="image/jpeg"/>

                <img src={img.jpg.original} alt={"imagen de " + heading} loading='lazy'/>
            </picture>
            {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </StyledArticleService>
    );
}

export default ArticleService;