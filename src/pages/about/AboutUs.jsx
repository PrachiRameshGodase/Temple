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
          <br />
          <p>
              Sadguru Sai Baba Temple in ⁠57kms from MYSURU via T narasipura -> Mudukutore -> BJMole is a sacred space devoted to the teachings and blessings of Shirdi Sai Baba. Established with deep faith, the temple offers a serene and spiritually uplifting environment where devotees can seek peace and divine grace.          </p>
          <p>
            Following the Shirdi tradition, the temple conducts daily Kakad Aarti, Madhyanh Aarti, Dhoop Aarti, and Shej Aarti, along with soulful bhajans and Marathi prayers. It also hosts Sri Satyanarayana Vrat, Sai Sahasranama, and Vishnu Sahasranama chanting, fostering spiritual growth.
          </p>
          <p>
            Founded by T. G. Ranganath, a dedicated disciple of Sai Baba and the visionary behind Sri Sai Ranga Seva Prathishtana, the temple stands as a testament to faith and service. His contributions extend to rural development, school enhancements, and scholarships for top students in Malavalli Taluk. He has also built a Shirdi Sai Baba Temple in BJMole Village, featuring sanctums for Lord Ganesha, Dakshinamurthy, Kshetrapalakru, Abhaya Anjaneya, and Amruteshwari Mata.
          </p>
          <p>With its divine ambiance and commitment to spirituality and social service, the temple remains a beacon of faith and devotion in Bengaluru, offering a path to inner peace and spiritual enlightenment.

          </p>
          {/* <p>A visit to Sri Shirdi Sai Anandamaiyee Temple is more than a religious experience—it is a journey of faith, peace, and spiritual enlightenment, drawing devotees closer to Baba’s divine presence. </p> */}

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

      <div className="about-container">
        <h1 className="title">Sri Sai Ranga Seva Prathishtana & T G Ranganath</h1>

        <section className="section">
          <h2>T G Ranganath – A Devotee & Social Reformer</h2>
          <p>T G Ranganath, the founder of <strong>Sri Sai Ranga Seva Prathishtana</strong>, is a dedicated devotee of <strong>Shiradi Sai Baba</strong>. His commitment to spiritual and social service has transformed many lives through various initiatives.</p>
        </section>

        <section className="section">
          <h2>Social Contributions & Development Initiatives</h2>
          <ul>
            <li>Actively involved in <strong>rural development</strong> and improving <strong>government schools</strong>.</li>
            <li>Constructed <strong>classrooms</strong> for students at <strong>Bilijagalimole Government Higher Primary School & Saraguru Government High School</strong>.</li>
            <li>Built the <strong>Sharadi Sai Baba Temple</strong> in <strong>BJMole Village</strong>, featuring deities like <strong>Ganapathi, Dakshinamurthy, Kshetrapalakru, Abhaya Anjaneya</strong>, and a <strong>6-feet standing Amruteshwari Temple</strong>.</li>
          </ul>
        </section>

        <section className="section">
          <h2>Educational Support & Scholarships</h2>
          <p>Annually provides <strong>scholarships</strong> to <strong>top 10 students</strong> of Malavalli Taluk, rewarding the <strong>1st rank holders</strong>.</p>
        </section>

        <section className="section">
          <h2>Promoting Organic Farming</h2>
          <p>Encourages and educates farmers to shift <strong>back to organic farming</strong>, promoting sustainable agriculture.</p>
        </section>
      </div>

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
