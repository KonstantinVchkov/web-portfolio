import { Navbar } from "./components/HeaderComponent/Navbar";
import Home from "./components/HomeComponent/Home";
import "./App.css";
import About from "./components/AboutComponent/About";
import { aboutMe, contact, projectsData } from "./data/db";
import ProjectCard from "./components/ProjectsComponent/ProjectCard";
import { ContactUs } from "./components/ContactComponent/Contact";
import ThemeProvider from "./Hoc/ThemeProvider";
import { animateScroll as scroll } from "react-scroll";
import ScrollButton from "./components/ScrollBtn/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  console.log("from contact: ", contact);
  return (
    <div className="App">
      <Analytics />
      <ThemeProvider>
        <Navbar {...contact} />
        <Home />
        <About {...aboutMe} />
        <div id="projects" className="projects">
          {projectsData.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
        <ScrollButton handleScroll={scrollToTop} />
        <ContactUs />
      </ThemeProvider>
    </div>
  );
}

export default App;
