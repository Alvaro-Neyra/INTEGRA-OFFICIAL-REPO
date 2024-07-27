import { useEffect } from "react";
import { MdArrowUpward } from "react-icons/md";

function GoToTop() {

    useEffect(() => {
        document.querySelector('.gototop-btn').style.visibility = 'hidden';
        document.querySelector('.gototop-btn').style.opacity = '0';
    })

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const scrollFunction = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.querySelector('.gototop-btn').style.visibility = 'visible';
            document.querySelector('.gototop-btn').style.opacity = '1';
        } else {
            document.querySelector('.gototop-btn').style.visibility = 'hidden';
            document.querySelector('.gototop-btn').style.opacity = '0';
        }
    };

    window.onscroll = () => {
        scrollFunction();
    };

    return (
        <button className="gototop-btn" onClick={goTop}><MdArrowUpward /></button>
    );
}

export default GoToTop;