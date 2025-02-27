import React from "react";
import "./AboutUs.scss"; // Import SCSS file
import { temple, templeSnapShot } from "../../Helper/Constant";
import Footer from "../../components/Footer";

const AboutUs = () => {
  return (
    <>
      <div className="about-us-container">
        <h1 className="about-us-title">About Sri Shirdi Sai Ranga Temple</h1>
        <p className="about-us-description">
          A place of devotion, service, and spiritual enlightenment
        </p>
      </div>

      <div className="history-container">
        <div className="history-content">
          <h2>History of the temple</h2>
          <p>
            Sri Shirdi Sai Ranga Temple Humesamaradapalya is located off Mysore
            Road after Kengeri by Rajarajeshwari Hospital. The main temple
            structure was built in 2002 and several additions have been done
            like the Gurusthan, Dwarakamaiyee, Nanadadeep, Kandoba Temple, and a
            place for worship of Lord Krishna and Lord Hanuman. The temple
            follows the Vidhi of the Shirdi style of worship with the Kakad,
            Dhoop, Evening, and Sej Artis sung in Marathi.
          </p>
          <p>
            In addition to the regular poojas, the temple trust also conducts
            poojas like Sri Satyanarayana Vartha and Sai Sahasranama with
            regular chanting of Vishnu Sahasra Nama. A visit to the temple will
            take away the mundane life and enter a peaceful and divine
            environment that brings you closer to Baba. (A devotee’s
            experience).
          </p>
          <p>
            Sri Shirdi Sai Anandamaiyee Temple was built by Mrs. Samyukta Mahesh
            with the help of numerous devotees. She was a disciple of Sri
            Shivanesan Swamiji and Late Mrs. Zarine (an ardent devotee of Baba).
            The temple trust is a non-profit organization dedicated to service
            to Baba and his teachings. Many social services like Anna Dana,
            empowering self-help among women, assistance in education, and
            computer classes for kids are undertaken.
          </p>
        </div>

        <div className="history-stats">
          <ul>
            <li>
              <h3>1998</h3>
              <p>Founded</p>
            </li>
            <li>
              <h3>500+</h3>
              <p>Devotees</p>
            </li>
          </ul>
          <ul>
            <li>
              <h3>$100k</h3>
              <p>Charity Donated</p>
            </li>
            <li>
              <h3>1k+</h3>
              <p>Temple Members</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="image-container">
        <img src={temple} alt="Temple" />
      </div>

      <div className="temple-snapshots-container">
      <div className="header">
        <h2>Temple Snapshots</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="snapshots-grid">
        {templeSnapShot?.map((item, index) => (
          <div className="snapshot-card" key={index}>
            <div className="img">
              <img src={item.imgUrl} alt={`Temple ${index + 1}`} />
           </div>
          </div>
        ))}
      </div>
    </div>

    </>
  );
};

export default AboutUs;
