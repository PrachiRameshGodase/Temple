import React from "react";
import "./UpComingProjects.scss";
import { projectVideo, temple } from "../../Helper/Constant";
import imgGod from '../../assets/templeSnapShot/IMG-20250301-WA0009_6_11zon.jpg'
import imgStatus from '../../assets/home/statusImg.jpg'
const UpComingProjects = () => {
  return (
    <div>
      <div
        className="upcoming-projects"
        style={{ backgroundImage: `url(${imgGod})` }}
      >
        <div className="card">
          <h2>Upcoming Projects</h2>
          <p>
            Contribute to the divine vision and be part of our temple’s growth
          </p>
        </div>
      </div>
      <div className="annadanam-container">
        <h3>Prasadam hall</h3>
        <p>
          Creating a dedicated and welcoming space that serves free meals every
          day to thousands of devoted followers and those in need is not just a
          noble endeavor; it is a profound commitment to humanity. This
          initiative embodies the timeless teachings of Sai Baba, who emphasized
          that ‘Feeding the Hungry is Serving God.’ By establishing this
          facility, we are not only providing essential nourishment to the body
          but also cultivating a vibrant sense of community and compassion...
        </p>

        {/* Project Details Section */}
        <div className="details-container">
          <div className="detail-card">
            <p>Started Date</p>
            <p>March 2023</p>
          </div>
          <div className="detail-card">
            <p>Expected Completion Date</p>
            <p>March 2028</p>
          </div>
          <div className="detail-card">
            <p>Status</p>
            <p>In Progress</p>
          </div>
          <div className="detail-card">
            <p>Timeline</p>
            <p>Phase 1</p>
          </div>
        </div>
      </div>

      <div className="video-container">
        <img src={imgStatus} alt="" />
      </div>
    </div>
  );
};

export default UpComingProjects;
