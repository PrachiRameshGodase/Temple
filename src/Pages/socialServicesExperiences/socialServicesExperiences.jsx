import React from "react";
import { socialServicesData, testimonialsData } from "../../Helper/Constant";
import "./SocialServicesExperiences.scss";

const SocialServicesExperiences = () => {
  return (
    <>
      <div className="social-services2">
        <div className="container">
          <h3>Social Services</h3>

          <div className="services-grid">
            {socialServicesData.map((service, index) => (
              <div className="service-card" key={index}>
                <img src={service.imgUrl} alt={service.title} />
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
     
      <div className="testimonials">
      <div className="container">
        {/* Section Title */}
        <div className="section-header">
          <h2>Devotee Testimonials</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonialsData.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-text">"{testimonial.review}"</p>

              {/* Star Rating */}
              <p className="rating">⭐⭐⭐⭐⭐</p>

              {/* User Info */}
              <div className="user-info">
                <img src={testimonial.avatar} alt={testimonial.name} className="avatar" />
                <div className="user-details">
                  <p className="user-name">{testimonial.name}</p>
                  <p className="user-date">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default SocialServicesExperiences;