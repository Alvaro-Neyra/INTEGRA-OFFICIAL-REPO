import { Link } from "react-router-dom";
import "../styles/Hero.css";

function Hero({ video, heading, paragraphs, linkText, linkTo }) {
    return (
        <section className="section-serviciospage">
            <video className='video-hero' autoPlay loop muted playsInline>
                <source src={video.webm["240p"]} media="(max-width: 320px)" type="video/webm" />
                <source src={video.webm["360p"]} media="(max-width: 480px)" type="video/webm" />
                <source src={video.webm["480p"]} media="(max-width: 768px)" type="video/webm" />
                <source src={video.webm["720p"]} media="(max-width: 1024px)" type="video/webm" />
                <source src={video.webm["1080p"]} media="(max-width: 1440px)" type="video/webm" />
                <source src={video.webm["original"]} type="video/webm" />

                <source src={video.mp4["240p"]} media="(max-width: 320px)" type="video/mp4" />
                <source src={video.mp4["360p"]} media="(max-width: 480px)" type="video/mp4" />
                <source src={video.mp4["480p"]} media="(max-width: 768px)" type="video/mp4" />
                <source src={video.mp4["720p"]} media="(max-width: 1024px)" type="video/mp4" />
                <source src={video.mp4["1080p"]} media="(max-width: 1440px)" type="video/mp4" />
                <source src={video.mp4["original"]} type="video/mp4" />

                <source src={video.webm["original"]} type="video/webm" />
            </video>
            <div className="hero-text">
                <h1 className='hero-heading'>{heading}</h1>
                {paragraphs.map((paragraph, index) => { return <p key={index}>{paragraph}</p> })}
                <Link to={linkTo} className='hero-link'>{linkText}</Link>
            </div>
        </section>
    );
}

export default Hero;