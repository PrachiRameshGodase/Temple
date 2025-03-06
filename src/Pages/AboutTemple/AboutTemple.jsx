import React from "react";
import "./AboutTemple.scss";
import templeImage from "../../assets/home/templeAboutThe.jpeg"; // Apni image ka path yahan daalein
import { useNavigate } from "react-router-dom";
import imgGod from '../../assets/templeSnapShot/IMG-20250301-WA0009_6_11zon.jpg'

const AboutTemple = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/about-us");
        window.scrollTo(0, 0); 
    };
    return (
        <section className="temple-section">
            <div className="content">
                <h2>About the Temple</h2>
                <img src={imgGod} alt="Temple" className="image-Temple" />
                <p>
                    Sadguru Sai Baba Temple in  ⁠57kms from MYSURU via T narasipura -> Mudukutore -> BJMole  is a sacred space devoted to the teachings and blessings of Shirdi Sai Baba. Established with deep faith, the temple offers a serene and spiritually uplifting environment where devotees can seek peace and divine grace. 
                </p>
                <p>
                    Following the Shirdi tradition, the temple conducts daily Kakad Aarti, Madhyanh Aarti, Dhoop Aarti, and Shej Aarti, along with soulful bhajans and Marathi prayers. It also hosts Sri Satyanarayana Vrat, Sai Sahasranama, and Vishnu Sahasranama chanting, fostering spiritual growth. 
                </p>
                <p>
                    Founded by T. G. Ranganath, a dedicated disciple of Sai Baba and the visionary behind Sri Sai Ranga Seva Prathishtana, the temple stands as a testament to faith and service. His contributions extend to rural development, school enhancements, and scholarships for top students in Malavalli Taluk. He has also built a Shirdi Sai Baba Temple in BJMole Village, featuring sanctums for Lord Ganesha, Dakshinamurthy, Kshetrapalakru, Abhaya Anjaneya, and Amruteshwari Mata. 
                </p>
                <p>
                    With its divine ambiance and commitment to spirituality and social service, the temple remains a beacon of faith and devotion in Bengaluru, offering a path to inner peace and spiritual enlightenment. 
                </p>
                <button className="details-btn" onClick={handleClick }>See More Details</button>
            </div>
            <div className="image-container02" >
                <img src={imgGod} alt="Temple" />
            </div>
        </section>
    );
};

export default AboutTemple;