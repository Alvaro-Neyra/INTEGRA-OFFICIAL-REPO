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
            <img src={img} alt={"imagen de " + heading} />
            {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </StyledArticleService>
    );
}

export default ArticleService;