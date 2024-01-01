import { Navbar } from "./components/HeaderComponent/Navbar";
import Home from "./components/HomeComponent/Home";
import "./App.css";
import About from "./components/AboutComponent/About";
import { aboutMe, projectsData, skills } from "./data/db";
import Skills from "./components/Skills/Skills";
import ProjectCard from "./components/ProjectsComponent/Projects";
import { ContactUs } from "./components/ContactComponent/Contact";
import ThemeProvider from "./Hoc/ThemeProvider";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Navbar />
        <Home />
        <About aboutme={aboutMe.aboutme} />
        <div className="projects">
          {projectsData.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
        <Skills skills={skills} />
        <ContactUs />
      </ThemeProvider>
    </div>
  );
}

export default App;
