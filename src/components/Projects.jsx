import 'swiper/swiper-bundle.css'
import projects from "../assets/Projects"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";
import "../styles/Projects.css"

function CardSlider() {
    return (
        <section className="projects-section">
            <h2>Proyectos</h2>
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
                            }
                        }
                        }
                    >
                        {projects.map((project, index) => {
                            return (
                                <SwiperSlide className="card" key={project.id} style={{backgroundImage: `url(${project.img})`}}>
                                    <div className="card-content">
                                        <h3 className="card__title">{project.name}</h3>
                                        <p className="card__body">{project.description}</p>
                                        <a href="./#" className="button">View More</a>
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
