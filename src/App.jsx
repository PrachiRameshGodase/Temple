import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./Pages/HeroSection/HeroSection";
import AboutTemple from "./Pages/AboutTemple/AboutTemple";
import StatsSection from "./Pages/StatsSection/StatsSection";
// import SocialServices from "./Pages/SocialServices/SocialServices";
import VoiceOfDevotees from "./Pages/VoiceOfDevotees/VoiceOfDevotees";
import TempleLocation from "./Pages/TempleLocation/TempleLocation";


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
                {/* <SocialServices /> */}
                <VoiceOfDevotees />
                <TempleLocation />
              </>
            }
          />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
