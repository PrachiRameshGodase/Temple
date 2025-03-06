import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import logo from "../assets/home/logo.jpg";

import { Menu, X, Search, ArrowRight, ArrowDownToLine } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
// import BookAppointment from '../BookAppointment/BookAppointment';
import { motion } from "framer-motion";
// import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation(); // Get current location

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 650) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSearchBar = () => {
    setIsVisible(!isVisible);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    window.scrollTo(0, 0);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active-link" : "";
    // return location.pathname.includes(path) ? "active-link" : "";
  };
  // white bg
  const whiteBg = ["contact", "about", 'how-it-work', 'features', 'terms-and-policy', 'privacy-policy'];
  const isWhite = whiteBg.some((path) => location.pathname.includes(path));
  const [showModal, setShowModal] = useState(false);
  const handleBookNowClick = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const scrollToSection = (id) => {
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        const yOffset = -80; // 80px upar se adjust karne ke liye
        const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  };
  const handleCall = () => {
    window.location.href = "tel:6362387506";
  };

  return (
    <header
      className={`navbar`}>
      <motion.nav
        className={`navbar-container ${menuOpen ? "menu-active-navbar-container" : ""
          }`}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.1 }}>
        {/* Logo Section */}
        <div className="navbar-logo">
          <div className="logo-circle">
            <img src={logo} alt="logo" />
          </div>
        </div>

        {/* Navigation Links */}
        {!isVisible && (
          <ul className={`navbar-links ${menuOpen ? "menu-active" : ""}`}>
            <li onClick={() => toggleMenu()}>
              <Link to="/" className={isActive("/")}>
                Home
              </Link>
            </li>
            <li onClick={() => toggleMenu()}>
              <Link to="/about-us" className={isActive("/about-us")} onClick={() => setTimeout(() => scrollToSection("about"), 100)}>
                About
              </Link>
            </li>
            <li onClick={() => toggleMenu()}>
              <Link to="/social-services" className={isActive("/social-services")} onClick={() => setTimeout(() => scrollToSection("Features"), 100)}>
                Social Services & Experiences
              </Link>
            </li>

            <li onClick={() => toggleMenu()}>
              <Link to="/upcoming-projects" className={isActive("/upcoming-projects")} onClick={() => setTimeout(() => scrollToSection("how-it-work"), 100)}>
                Upcoming Projects
              </Link>
            </li>






            <li onClick={() => toggleMenu()}>
              <Link to="/donation" className={isActive("/donation")}>
                Donation
              </Link>
            </li>
            <li onClick={() => toggleMenu()}>
              <Link to="/contact-us" className={isActive("/contact-us")}>
                Contact
              </Link>
            </li>
          </ul>
        )}

        {/* Book Appointment and Search Section */}
        <div className={`navbar-actions ${menuOpen ? "menu-active" : ""}`}>
          {!isVisible ? (
            <div className="right_btn">
              <button className="call-btn" onClick={handleCall}>Call us +91 6362387506</button>
              <button className="contact-btn">Contact Us</button>
            </div>
          ) : (
            ""
          )}
          {isVisible && (
            <div className="search-bar">
              {/* <div className='card_search'>
                                <Search className="search_icon_1" size={24} />
                                <input
                                    type="text"
                                    className="search-input"
                                    placeholder="Search here"
                                />
                                <button className="search-button">Search</button>
                            </div>
                            <button className="close-button-nav" onClick={toggleSearchBar}>
                                ✖
                            </button> */}
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        {!isVisible && (
          <>
            <div className="mobile-menu-icon" onClick={toggleMenu}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </div>
          </>
        )}
      </motion.nav>
      {/* {showModal && <BookAppointment onClose={closeModal} />} */}
    </header>
  );
}

export default Navbar;
