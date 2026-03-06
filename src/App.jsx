import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Works from "./components/Works";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-stone-100 min-h-screen text-stone-800">

      <Hero />

      <About />

      <Services />

      <Works />

      <Contact />

    </div>
  );
};

export default App;