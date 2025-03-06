import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection/HeroSection";
import AboutTemple from "./pages/AboutTemple/AboutTemple";
import StatsSection from "./pages/StatsSection/StatsSection";
import SocialServices from "./pages/socialServices/SocialServices";
import VoiceOfDevotees from "./pages/VoiceOfDevotees/VoiceOfDevotees";
import TempleLocation from "./pages/TempleLocation/TempleLocation";
import SocialServicesExperiences from "./pages/socialServicesExperiences/socialServicesExperiences";
import UpComingProjects from "./pages/UpComingProject/UpComingProjects";
import AboutUs from "./pages/about/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs"
import Footer from "./components/Footer";
import Donation from "./Pages/Donation/Donation";


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
                {/* <StatsSection /> */}
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
           <Route
            path="/donation"
            element={
              <>
                <Donation />
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
