import "./style.css";
import "../styles/buttonStyle.css";
import { useTypewriter,Typewriter } from 'react-simple-typewriter'

// import Typewriter from "typewriter-effect";

const Home = () => {
  const sentences = ["Front-End Developer", "React Developer",'Next js Developer'];

  return (
    <section id="hero" className="jumbotron">
      <div className="container">
        <h1 className="hero-title load-hidden">
          Hi There, I'm <span className="text-color-main">Konstantin Vchkov</span>
          <br />
          <Typewriter loop={true} cursor words={sentences} />
        </h1>
        <p className="hero-cta load-hidden">
          <a rel="noreferrer" className="cta-btn cta-btn--hero" href="#about">
            Know more about me
          </a>
        </p>
      </div>
    </section>
  );
};

export default Home;
