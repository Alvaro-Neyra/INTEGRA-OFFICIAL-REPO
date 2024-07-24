import styled from 'styled-components';

const StyledAccordion = styled.button`
    border: 1px solid #ccc;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    cursor: pointer;
    padding: 1vw 2vw;
    border-radius: 5px;
    &::before, &::after {
        position: absolute;
        right: 5vw;
        content: "";
        width: 2vw;
        height: 5px;
        background-color: #012E40;
        transition: transform 200ms ease-in-out;
        top: 45%;
        transform: translateY(-45%);
        font-size: 1.5vw;
    }
    &::before {
        transform: rotate(0deg);
    }
    &::after {
        transform: rotate(90deg);
    }

    &.rotate {
        &::before {
            transform: rotate(-45deg);
        }
        &::after {
            transform: rotate(45deg);
        }
    }
    
    @media only screen and (max-width: 700px) {
        &::before, &::after {
            width: 3vw;
            height: .5vw;
        }
    }
`;

const StyledAccordionContent = styled.article`
    max-height: 0;
    padding: 0 2vw;
    overflow: hidden;
    &.open {
        max-height: 1000px;
        transition: max-height 200ms ease-in-out;
    }
`;

function Accordion({ heading, paragraphs, isActive, onClick }) {
    return (
        <>
        <StyledAccordion className={isActive ? "rotate" : ""} onClick={onClick}>
            <h2>{heading}</h2>
        </StyledAccordion>
        <StyledAccordionContent className={isActive ? "open" : ""} onClick={onClick}>
            <ul className='service-list'>
                {paragraphs.map((paragraph, index) => <li key={index}>{paragraph}</li>)}
            </ul>
        </StyledAccordionContent>
        </>
    );
}

export default Accordion;