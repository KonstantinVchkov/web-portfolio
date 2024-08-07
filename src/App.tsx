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
import Footer from "./components/footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="App">
      <Analytics />
      <ThemeProvider>
        <Navbar {...contact} />
        <Home />
        <About {...aboutMe} />
        <div id="projects" className="projects">
          <Swiper
           effect={'coverflow'}
           grabCursor={true}
           centeredSlides={true}
           slidesPerView={'auto'}
           coverflowEffect={{
             rotate: 50,
             stretch: 0,
             depth: 100,
             modifier: 1,
             slideShadows: true,
           }}
           pagination={true}
           modules={[EffectCoverflow, Pagination]}
           className="mySwiper"
          >
            {projectsData.map((project, idx) => (
              <SwiperSlide key={idx}>
                <ProjectCard {...project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <ScrollButton handleScroll={scrollToTop} />
        <ContactUs />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
