import { useState } from "react";
import Accordion from "./Accordion";


function AccordionSet({ content }) {

    const [active, setActive] = useState(null);

    const handleClick = (index) => {
        setActive(index === active ? null : index);
    };

    return (
        <>
        {content.map((accordion, index) => <Accordion key={index} heading={accordion.heading} paragraphs={accordion.paragraphs} isActive={index === active} onClick={() => handleClick(index)}></Accordion>)}
        </>
    );
}

export default AccordionSet;