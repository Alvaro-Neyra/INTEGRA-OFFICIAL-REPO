import "../styles/Hero.css";

function Hero({ video, heading, paragraphs, linkText, linkTo }) {
    return (
        <section className="section-serviciospage">
            <video className='video-hero' src={video} autoPlay loop muted playsInline>
            </video>
            <div className="hero-text">
                <h1 className='hero-heading'>{heading}</h1>
                {paragraphs.map((paragraph, index) => { return <p key={index}>{paragraph}</p> })}
                <a href={linkTo} className='hero-link'>{linkText}</a>
            </div>
        </section>
    );
}

export default Hero;