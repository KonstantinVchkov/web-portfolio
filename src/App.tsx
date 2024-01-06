import { Navbar } from "./components/HeaderComponent/Navbar";
import Home from "./components/HomeComponent/Home";
import "./App.css";
import About from "./components/AboutComponent/About";
import { aboutMe, projectsData, skills } from "./data/db";
// import Skills from "./components/Skills/Skills";
import ProjectCard from "./components/ProjectsComponent/ProjectCard";
import { ContactUs } from "./components/ContactComponent/Contact";
import ThemeProvider from "./Hoc/ThemeProvider";
import { animateScroll as scroll } from "react-scroll";
import ScrollButton from "./components/ScrollBtn/ScrollToTop";

function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="App">
      <ThemeProvider>
        <Navbar />
        <Home />
        
        <About aboutme={aboutMe.aboutme} />
        <div id="projects" className="projects">
          {projectsData.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
        {/* <Skills skills={skills} /> */}
        <ScrollButton handleScroll={scrollToTop} />
        <ContactUs />
      </ThemeProvider>
    </div>
  );
}

export default App;
