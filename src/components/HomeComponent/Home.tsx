import './style.css'
import '../styles/buttonStyle.css'
const Home = () => {
  return (
    <section id="hero" className="jumbotron">
      <div className="container">
        <h1 className="hero-title load-hidden">
          Hi, my name is <span className="text-color-main">Konstantin</span>
          <br />
          I'm a Front End Developer.
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
