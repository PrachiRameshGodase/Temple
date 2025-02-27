import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./pages/about/AboutUs";
import SocialServices from "./pages/socialServices/SocialServices";
import ContactUs from "./pages/ContactUs/ContactUs";
import UpComingProjects from "./pages/UpComingProject/UpComingProjects";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/socialServices" element={<SocialServices />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/upcoming-projects" element={<UpComingProjects />} />


        {/* <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> Catch-all route for 404 */}
      </Routes>
    </Router>
  );
}

export default App;
