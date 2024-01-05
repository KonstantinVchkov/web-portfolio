import "./style.css";
import "../styles/buttonStyle.css";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";

// import Typewriter from "typewriter-effect";

const Home = () => {
  const sentences = [
    "Front-End Developer",
    "React Developer",
    "Next js Developer",
  ];

  return (
    <section id="hero" className="jumbotron">
      <div className="container">
        <h1 className="hero-title load-hidden">
          Hi There, I'm{" "}
          <span className="text-color-main">Konstantin Vchkov</span>
          <br />
          <Typewriter loop={true} cursor words={sentences} />
        </h1>
        <p className="hero-cta load-hidden">
          <Link
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            to={"about"}
            className="cta-btn cta-btn--hero"
          >
            Know more about me
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Home;
