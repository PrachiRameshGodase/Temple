import React from "react";
import "./HeroSection.scss";
import imgGod from '../../assets/home/goadHero.jpeg'

const HeroSection = () => {
    return (
        <div className="temple-container">
            <div className="imgGod_hero">
                <img src={imgGod} alt="" />
            </div>
            <header>
                <h1>
                    <span className="highlight">Om Sai Ram –</span> Welcome to SRI SAI RANGA Temple
                </h1>
                <p>
                    Sri Shirdi Sai Ranga Temple was built by Mrs. Samyukta Mahesh with help of numerous devotees. She was a disciple of Sri Shivanesan Swamiji and Late Mrs. Zarine (an ardent devotee of Baba). The temple trust is a not-for-profit organization dedicated to serving Baba and his teachings.
                </p>
                <div className="buttons">
                    <button className="contact">Contact Us Now</button>
                    <button className="visit">Visit Temple</button>
                </div>
            </header>
            <div className="info-sections">
                <div className="info-box">
                    <i className="icon clock-icon"></i>
                    <h3>Open hours</h3>
                    <p>Wednesday to Saturday<br />12:00 pm – 3:00 pm, 6:00 pm – 9:30 pm</p>
                    <p>Sunday<br />12:00 pm – 3:00 pm, 6:00 pm – 8:00 pm</p>
                </div>
                <div className="info-box">
                    <i className="icon location-icon"></i>
                    <h3>Location</h3>
                    <p>456 Tech Park, Bengaluru KA 560001 IN</p>
                    <a href="#">Get directions</a>
                </div>
                <div className="info-box">
                    <i className="icon mail-icon"></i>
                    <h3>Mail</h3>
                    <p>Bookings & Enquiries +61 2 91234 4567</p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;