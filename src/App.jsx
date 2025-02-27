import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./Pages/HeroSection/HeroSection";
import AboutTemple from "./Pages/AboutTemple/AboutTemple";


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
                <AboutTemple/>
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