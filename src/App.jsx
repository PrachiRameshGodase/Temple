import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
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
import ContactUs from "./pages/ContactUs/ContactUs";
import Footer from "./components/Footer";
import Donation from "./Pages/Donation/Donation";
import DocumentsPage from "./Pages/DocumentsPage/DocumentsPage";

function Loader() {
  return (
    <div className="loader">
      <div className="spinner"></div>
    </div>
  );
}

function PageWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      <div style={{ display: loading ? "none" : "block" }}>{children}</div>
    </>
  );
}

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
           <Route
            path="/documents"
            element={
              <>
                <DocumentsPage />
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
