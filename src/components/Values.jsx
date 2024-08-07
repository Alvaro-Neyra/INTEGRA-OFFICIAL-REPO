import TextCard from './TextCard';
import valores from '../assets/Valores';
import "../styles/Values.css";

function Values() {
    return(
        <>
            <section className="values-container">
                <img src="svg/pink-arrow.svg" alt="pink-arrow" className="pink-arrow" loading="lazy"/>
                <img src="svg/star.svg" alt="yellow-star" className="yellow-star" loading="lazy"/>
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