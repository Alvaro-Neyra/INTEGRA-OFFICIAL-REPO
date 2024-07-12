import { useState } from "react";
import { useEffect } from "react";
import "../styles/Carrusel.css";

function Carrusel ({ images }){

    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);

    let timeOut = null;

    useEffect(() => {
        timeOut = autoPlay && setTimeout(() => { slideRight(); }, 2500);
    })

    const slideRight = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    const slideLeft = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };

    return (
        <section className="carousel" 
            onMouseEnter={() => {
                setAutoPlay(false);
                clearTimeout(timeOut);
            }} 
            onMouseLeave={() => {
                setAutoPlay(true);
            }}>
            <div className="carousel_wrapper">
                {images.map((image, index) => {
                    return <div key={index} className={
                        index === current ? "carousel_card carousel_card-active" : "carousel_card"
                    }>
                        <img className="card-image" src={image.img} alt={image.title} />
                        <article className="card_overlay">
                            <h2 className="card-title">{image.title}</h2>
                            <p className="card-text">{image.text}</p>
                        </article>
                        <section className="button-lists">
                            <button>Ver Proyecto</button>
                            <button>Contáctenos</button>
                        </section>
                    </div>
                })}
                <i className="carousel_arrow_left" onClick={slideLeft}><span className="fa-solid fa-angle-left "></span></i>
                <i className="carousel_arrow_right" onClick={slideRight}><span className="fa-solid fa-angle-right"></span></i>
                <div className="carousel_pagination">
                    {images.map((_, index)=>{
                        return (
                        <span key={index} className={
                            index === current ? "pagination_dot pagination_dot-active" : "pagination_dot"
                        }
                        onClick={() => setCurrent(index)}
                        ></span>
                    );
                    })}
                    
                </div>
            </div>
        </section>
    );
}

export default Carrusel;