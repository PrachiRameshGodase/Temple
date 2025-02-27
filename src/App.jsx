import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./Pages/HeroSection/HeroSection";
import AboutTemple from "./Pages/AboutTemple/AboutTemple";
import StatsSection from "./Pages/StatsSection/StatsSection";
import SocialServices from "./Pages/socialServices/SocialServices";
import VoiceOfDevotees from "./Pages/VoiceOfDevotees/VoiceOfDevotees";
import TempleLocation from "./Pages/TempleLocation/TempleLocation";
import SocialServicesExperiences from "./Pages/socialServicesExperiences/socialServicesExperiences";
import UpComingProjects from "./pages/UpComingProject/UpComingProjects";
import AboutUs from "./pages/about/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs"
import Footer from "./components/Footer";


function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <HeroSection />
                <AboutTemple />
                <StatsSection />
                <SocialServices />
                <VoiceOfDevotees />
                <TempleLocation />
              </>
            }
          />
           <Route
            path="/social-services"
            element={
              <>
               <SocialServicesExperiences/>
              </>
            }
          />
             <Route
            path="/upcoming-projects"
            element={
              <>
               <UpComingProjects/>
              </>
            }
          />
           <Route
            path="/about-us"
            element={
              <>
               <AboutUs/>
              </>
            }
          />
           <Route
            path="/contact-us"
            element={
              <>
               <ContactUs/>
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
