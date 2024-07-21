import TextCard from './TextCard';
import valores from '../assets/Valores';
import pinkArrow from '../images/pink-arrow.webp';
import yellowStar from "../images/star.webp";
import "../styles/Values.css";

function Values() {
    return(
        <>
            <section className="values-container">
                <img src={pinkArrow} alt="pink-arrow" className="pink-arrow" />
                <img src={yellowStar} alt="yellow-star" className="yellow-star" />
                <h2 className='heading-2'>Valores</h2>
                <p>NUESTROS VALORES ESTÁN EN CONSTANTE CONTRUCCIÓN HACIA LA PERFECCIÓN</p>
                <div className="values">
                    {valores.map((valor, index) => {
                        return <TextCard key={index} heading={valor.heading} text={valor.text} />
                    })}
                </div>
            </section>
        </>
    );
}

export default Values;