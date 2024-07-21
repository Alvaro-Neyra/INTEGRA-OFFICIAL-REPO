import styled from "styled-components";

const StyledTextCard = styled.div`
    padding: 2rem;
    width: 100%;
    border: 3px solid black;
    border-radius: 10px;
    transition: all 0.5s ease-in-out;
    h2 {
        font-size: 2vw;
        font-weight: 800;
    }
    p {
        font-size: 1.5vw;
        font-weight: 500;
    }

    @media (hover) {
        &:hover {
            box-shadow: 8px 8px 0 5px var(--darkBlueColor);
            transform: translate(-5px, -5px);
        }
    }

    @media screen and (max-width: 1024px) {
        padding: 1rem;
        h2 {
            font-size: 3vw;
        }
        p {
            font-size: 2vw;
        }  
    }
`;

function TextCard({heading, text}) {
    return(
        <StyledTextCard>
            <h2>{heading}</h2>
            <p>{text}</p>
        </StyledTextCard>
    );
}

export default TextCard;