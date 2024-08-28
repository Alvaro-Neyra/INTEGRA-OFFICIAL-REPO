import 'swiper/swiper-bundle.css'
import projects from "../assets/Projects"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";
import { Link } from 'react-router-dom';
import "../styles/Projects.css"

function CardSlider() {
    return (
        <section className="projects-section">
            <h2 className='heading-2'>Proyectos</h2>
            <section className="container">
                <div className="card__content">
                    <Swiper
                        className="card_container"
                        modules={[Navigation, Pagination]}
                        spaceBetween={32}
                        loop={true}
                        grabCursor={true}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                        breakpoints={{
                            600: {
                                slidesPerView: 2,
                            },
                            968: {
                                slidesPerView: 3,
                            },
                            1600: {
                                slidesPerView: 4,
                            }
                        }
                        }
                    >
                        {projects.map((project, index) => {
                            return (
                                <SwiperSlide className="card" key={project.id}>
                                    <picture>
                                        <source srcSet={project.img.webp.small} type="image/webp" media="(max-width: 320px)"/>
                                        <source srcSet={project.img.webp.medium} type="image/webp" media="(max-width: 480px)"/>
                                        <source srcSet={project.img.webp.large} type="image/webp" media="(max-width: 500px)"/>

                                        <source srcSet={project.img.jpg.small} type="image/jpeg" media="(max-width: 320px)"/>
                                        <source srcSet={project.img.jpg.medium} type="image/jpeg" media="(max-width: 480px)"/>
                                        <source srcSet={project.img.jpg.large} type="image/jpeg" media="(max-width: 500px)"/>

                                        <img src={project.img.jpg.large} alt={project.name} className="card__image"/>
                                    </picture>
                                    <div className="card-content">
                                        <h3 className="card__title">{project.name}</h3>
                                        <p className="card__body">{project.description}</p>
                                        <Link to="/portfolio" className="button">View More</Link>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-pagination"></div>
                </div>
            </section>
        </section>
    );
}

export default CardSlider;
