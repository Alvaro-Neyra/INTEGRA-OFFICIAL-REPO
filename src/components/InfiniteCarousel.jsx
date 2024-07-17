import { useEffect, useRef } from "react";
import Clients from "../assets/Clients";
import "../styles/InfiniteCarousel.css";

function InfiniteCarousel() {
    return (
        <section className="clients">
            <h2 className="heading-2">Clientes</h2>
            <div className="logos">
                <div className="logos-slide">
                    {
                        Clients.map((client, index) => {
                            return (
                                <img src={client.img} alt={client.descripcion} key={index}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default InfiniteCarousel;