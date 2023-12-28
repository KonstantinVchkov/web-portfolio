import Navbar from "./components/HeaderComponent/Navbar";
import Home from "./components/HomeComponent/Home";
import "./App.css";
import About from "./components/AboutComponent/About";
import { motion, useScroll, useSpring } from "framer-motion";
import { aboutMe, projectsData, skills } from "./data/db";
import Skills from "./components/Skills/Skills";
import ProjectCard from "./components/ProjectsComponent/Projects";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="App">
      <motion.div className="progress-bar" style={{ scaleX }} />

      <Navbar />
      <Home />
      <About aboutme={aboutMe.aboutme} />
      <div className="projects">
        {projectsData.map(
          (
            project,
            idx 
          ) => (
            <ProjectCard key={idx} {...project} /> 
          )
        )}
      </div>
      <Skills skills={skills} />
    </div>
  );
}

export default App;
