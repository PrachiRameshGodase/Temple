import React from "react";
import "./HeroSection.scss";
import imgGod from '../../assets/templeSnapShot/IMG-20250301-WA0009_6_11zon.jpg'
// import imgGod2 from '../../assets/home/goad.jpg'
import { ChevronRight, ClockArrowUp, Mail, MapPin } from "lucide-react";
import CookieConsent from "../../components/CookieConsent/CookieConsent";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/contact-us");
        window.scrollTo(0, 0);
    };
    const handleCall = () => {
        window.location.href = "tel:6362387506";
    };

    return (
        <div className="temple-container">
            <CookieConsent />
            <div className="imgGod_hero">
                <img src={imgGod} alt="" />
            </div>
            <header>
                <h1>
                    <span className="highlight">Om Sai Ram – </span>
                    Welcome to
                    <span className="strong">  Sri Shirdi Sai Baba Temple </span>
                    Dwarakamayi, BJMole
                </h1>
                <div>
                    <p>
                        Welcome to Sri Shirdi Sai Baba  Dwarakamayi, BJMole
                        <br />
                        Experience the divine presence and blessings of Shirdi Sai Baba at our sacred temple. With an atmosphere of peace, devotion, and spirituality, our temple is a place where devotees come to seek faith, patience, and guidance.
                    </p>
                    <div className="buttons">
                        <button className="contact" onClick={handleClick}>Contact Us Now</button>
                        <a href="https://maps.app.goo.gl/EVur8y4YbWDDvhYD6?g_st=iw" target="_blank">
                            <button className="visit">Visit Temple</button>
                        </a>
                    </div>
                </div>
            </header>
            <div className="info-sections">
                <div className="info-box">
                    <div className="icon">
                        <ClockArrowUp size={32} strokeWidth={2.5} />
                        <h3>Temple Open Timings</h3>
                    </div>
                    <p>
                        {/* Wednesday to Saturday<br /> */}
                        07:00am to 11:30pm & 05:00pm to 09:30pm
                    </p>
                    {/* <p>Sunday<br />12:00 pm – 3:00 pm, 6:00 pm – 8:00 pm</p> */}
                </div>
                <div className="info-box">
                    <div className="icon">
                        <MapPin size={32} strokeWidth={2.5} />
                        <h3>Location</h3>
                    </div>
                    <p>Purigali, B.G.Mole, Karnataka 571463</p>
                    <a
                        href="https://maps.app.goo.gl/EVur8y4YbWDDvhYD6?g_st=iw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="directions"
                    >Get directions <ChevronRight /></a>
                </div>
                <div className="info-box">
                    <div className="icon">
                        <Mail size={32} strokeWidth={2.5} />

                        <h3>Phone</h3>
                    </div>
                    <p onClick={handleCall}>+91 6362387506</p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;