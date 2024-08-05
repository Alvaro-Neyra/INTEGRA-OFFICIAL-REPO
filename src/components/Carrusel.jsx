import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
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
                        <picture>

                            <source srcSet={image.img.webp.xsmall} media="(max-width: 320px)" type="image/webp"/>
                            <source srcSet={image.img.webp.small} media="(max-width: 480px)" type="image/webp"/>
                            <source srcSet={image.img.webp.medium} media="(max-width: 768px)" type="image/webp"/>
                            <source srcSet={image.img.webp.large} media="(max-width: 1024px)" type="image/webp"/>
                            <source srcSet={image.img.webp.xlarge} media="(max-width: 1200px)" type="image/webp"/>
                            <source srcSet={image.img.webp.xxlarge} media="(max-width: 1600px)" type="image/webp"/>
                            <source srcSet={image.img.webp.original} type="image/webp"/>

                            <source srcSet={image.img.jpg.xsmall} media="(max-width: 320px)" type="image/jpeg"/>
                            <source srcSet={image.img.jpg.small} media="(max-width: 480px)" type="image/jpeg"/>
                            <source srcSet={image.img.jpg.medium} media="(max-width: 768px)" type="image/jpeg"/>
                            <source srcSet={image.img.jpg.large} media="(max-width: 1024px)" type="image/jpeg"/>
                            <source srcSet={image.img.jpg.xlarge} media="(max-width: 1200px)" type="image/jpeg"/>
                            <source srcSet={image.img.jpg.xxlarge} media="(max-width: 1600px)" type="image/jpeg"/>
                            <source srcSet={image.img.jpg.original} type="image/jpeg"/>

                            <img src={image.img.jpg.original} alt={image.title} className="carousel_img"/>
                        </picture>
                        <article className="card_overlay">
                            <h2 className="card-title">{image.title}</h2>
                            <p className="card-text">{image.text}</p>
                        </article>
                        <section className="button-lists">
                            <Link to="/project" className="carousel-btn">Ver Proyecto</Link>
                            <Link to="/contacto" className="carousel-btn">Contáctenos</Link>
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