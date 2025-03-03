import React from "react";
import { socialServicesData, testimonialsData } from "../../Helper/Constant";
import "./socialServicesExperiences.scss";

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

      {/* <div className="testimonials" id="Testimonials">
        <div className="container">
          <div className="section-header">
            <h2>Devotee Testimonials</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="testimonials-grid">
            {testimonialsData.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <p className="testimonial-text">"{testimonial.review}"</p>

              
                <div className="stars">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <>
                      <p>
                        &#9733;
                      </p>
                    </>
                  ))}
                  <>
                    <p className="gray-star">
                      &#9733;
                    </p>
                  </>
                </div>
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
      </div> */}
    </>
  );
};

export default SocialServicesExperiences;