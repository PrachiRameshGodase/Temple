import React from "react";
import "./AboutUs.scss"; // Import SCSS file
import { temple, templeSnapShot } from "../../Helper/Constant";
import Footer from "../../components/Footer";
import imgGod from '../../assets/templeSnapShot/IMG-20250301-WA0009_6_11zon.jpg'
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useMediaQuery } from "@mui/material";

const AboutUs = () => {
  const isXs = useMediaQuery("(max-width:600px)");  // Mobile
  const isSm = useMediaQuery("(min-width:601px) and (max-width:960px)"); // Tablets
  const isMd = useMediaQuery("(min-width:961px) and (max-width:1280px)"); // Small Laptops
  const isLg = useMediaQuery("(min-width:1281px)"); // Large Screens

  // Determine columns dynamically
  const columns = isXs ? 1 : isSm ? 2 : isMd ? 3 : 4;
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
            History of Sri Shirdi Sai Anandamaiyee Temple
          </p>
          <p>
            Sri Shirdi Sai Anandamaiyee Temple in Bengaluru stands as a testament to unwavering faith and devotion toward Shirdi Sai Baba. The temple was established through the dedicated efforts of Mrs. Samyukta Mahesh, a devoted disciple of Sri Shivanesan Swamiji and the late Mrs. Zarine, both ardent followers of Baba’s teachings. With the support of numerous devotees, the temple was built to serve as a center of worship, spiritual learning, and service.
          </p>
          <p>
            The main temple structure was built in 2002, and over the years, several sacred additions have been made, including Gurusthan, Dwarakamaiyee, Nandadeep, Kandoba Temple, and shrines dedicated to Lord Krishna and Lord Hanuman. These additions enrich the spiritual experience, making the temple a divine space where devotees can immerse themselves in prayer and meditation.
          </p>
          <p>
            The temple follows the Shirdi tradition of worship, conducting daily rituals such as Kakad Aarti, Madhyan Aarti, Dhoop Aarti, and Shej Aarti, all sung in Marathi. It also hosts regular poojas, including Sri Satyanarayana Vrat and Sai Sahasranama, along with Vishnu Sahasranama chanting, fostering spiritual upliftment among devotees.
          </p>
          <p>Beyond its religious significance, the temple trust operates as a non-profit organization committed to serving the community. Inspired by Baba’s message of selfless service and love, the trust actively engages in Anna Dana (food distribution), women’s empowerment programs, educational assistance, and computer classes for children. These initiatives reflect the temple’s dedication to spreading Sai Baba’s values of compassion and selfless service. </p>
        <p>A visit to Sri Shirdi Sai Anandamaiyee Temple is more than a religious experience—it is a journey of faith, peace, and spiritual enlightenment, drawing devotees closer to Baba’s divine presence. </p>

        </div>
        <div className="image-container">
          <img src={imgGod} alt="Temple" />
          
        </div>

      </div>
      <div className="content0p">

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
      {/* <div className="image-container">
        <img src={temple} alt="Temple" />
      </div> */}

      <div className="temple-snapshots-container">
        <div className="header">
          <h2>Temple Snapshots</h2>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </div>

        <div className="">
          {/* {templeSnapShot?.map((item, index) => ( */}
            <>
              <ImageList
                sx={{
                  width: "100%",
                  height: "auto",
                }}
                variant="masonry" // Masonry layout for better alignment
              cols={columns} // Default columns
                gap={10} // Space between images
              >
                {templeSnapShot?.map((item, index) => (
                  <ImageListItem key={index}>
                    <img
                      src={`${item.imgUrl}?w=248&fit=crop&auto=format`}
                      alt={`Temple ${index + 1}`}
                      loading="lazy"
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </>
          {/* ))} */}
        </div>
      </div>

    </>
  );
};

export default AboutUs;
