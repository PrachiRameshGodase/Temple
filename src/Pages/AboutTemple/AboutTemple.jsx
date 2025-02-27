import React from "react";
import "./AboutTemple.scss";
import templeImage from "../../assets/home/templeAboutThe.jpeg"; // Apni image ka path yahan daalein

const AboutTemple = () => {
    return (
        <section className="temple-section">
            <div className="content">
                <h2>About the Temple</h2>
                <img src={templeImage} alt="Temple" className="image-Temple" />
                <p>
                    Sri Shirdi Sai Ranga Temple Humesamaramadapalya is located off Mysore
                    Road after Kengeri by Rajarajeshwari Hospital. The main temple
                    structure was built in 2002 and several additions have been done like
                    the Gurusthan, Dwarakamaiyee, Nanadadeep, Kandoba Temple and a place
                    for worship of Lord Krishna and Lord Hanuman. The temple follows the
                    Vidhi of the Shirdi style of worship with the Kakad, Dhoop.
                </p>
                <p>
                    Evening and Sej Artis sung in Marathi. In addition to the regular
                    poojas the temple trust also conducts poojas like Sri Satyanarayana
                    Vartha and Sai Sahasranama with regular chanting of Vishnu Sahasra
                    Nama. A visit to the temple will take away the mundane life and
                    enters to a peaceful and divine environment that makes you closer to
                    Baba.
                </p>
                <button className="details-btn">See More Details</button>
            </div>
            <div className="image-container">
                <img src={templeImage} alt="Temple" />
            </div>
        </section>
    );
};

export default AboutTemple;