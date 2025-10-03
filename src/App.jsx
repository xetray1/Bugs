import { useEffect, useState } from "react";

import Testimonials from "./sections/Testimonials";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import ContactStars from "./components/models/contact/ContactStars";
import IntroLoader from "./components/IntroLoader";

const App = () => {
  const [isBooting, setIsBooting] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    let settleTimer;

    const concludeBoot = () => {
      clearTimeout(settleTimer);
      settleTimer = setTimeout(() => setIsBooting(false), 450);
    };

    if (document.readyState === "complete") {
      concludeBoot();
    } else {
      window.addEventListener("load", concludeBoot, { once: true });
    }

    const fallbackTimer = setTimeout(concludeBoot, 2800);

    return () => {
      window.removeEventListener("load", concludeBoot);
      clearTimeout(fallbackTimer);
      clearTimeout(settleTimer);
    };
  }, []);

  return (
    <>
      {showLoader && (
        <IntroLoader
          isBooting={isBooting}
          onComplete={() => setShowLoader(false)}
        />
      )}
      <div className={`app-shell ${showLoader ? "app-shell--hidden" : "app-shell--visible"}`}>
        <Navbar />
        <Hero />
        <About />
        <ShowcaseSection />
        <LogoShowcase />
        <FeatureCards />
        <Experience />
        <TechStack />
        <Education />
        <Testimonials />
        <div className="relative">
          <ContactStars />
          <div className="relative z-10">
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
