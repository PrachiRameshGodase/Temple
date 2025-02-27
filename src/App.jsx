import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./Pages/HeroSection/HeroSection";


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