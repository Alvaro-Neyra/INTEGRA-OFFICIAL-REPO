import { useEffect } from "react";
import "../styles/InfiniteScroller.css";

function InfiniteScroller({ heading, content, duration, direction }) {

    useEffect(() => {

        const scroller = document.querySelector(".scroller");

        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }

        function addAnimation() {
            scroller.setAttribute("data-animated", true);

            const scrollerInner = document.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach((element) => {
                const clone = element.cloneNode(true);
                clone.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(clone);
            });
        }

    }, []);

    return (
        <section className="section-container">
            <h2 className="heading-2">{heading}</h2>
            <div className="scroller-container">
                <div className="scroller" style={{ '--_animation-duration': duration, '--_animation-direction': direction }}>
                    <div className="scroller__inner">
                        {
                            content.map((item, index) => {
                                return (
                                    <img src={item.img} alt={item.descripcion} key={item.id ? item.id : index} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InfiniteScroller;