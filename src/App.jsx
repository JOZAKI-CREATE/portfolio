import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Works from "./components/Works";
import Contact from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";


const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  return (
    <div className="bg-stone-100 min-h-screen text-stone-800">

      <Navbar />

      <Hero />

      <About />

      <Services />

      <Works />

      <Contact />

    </div>
  );
};

export default App;