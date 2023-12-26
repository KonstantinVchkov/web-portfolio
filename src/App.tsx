import Navbar from "./components/HeaderComponent/Navbar";
import Home from "./components/HomeComponent/Home";
import './App.css'
import About from "./components/AboutComponent/About";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
