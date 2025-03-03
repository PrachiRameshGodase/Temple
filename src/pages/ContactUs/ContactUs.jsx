import React from "react";
import "./ContactUs.scss";
import { contactUsData } from "../../Helper/Constant";

const ContactUs = () => {
  return (
    <>
     <div className="contact-us">
      <div className="container">
        {/* Left Section - Form */}
        <div className="contact-form">
          <h3>Contact Us</h3>
          <p>For any queries, please reach out to us at:</p>

          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name.." />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your email.." />

            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              placeholder="Your mobile number.."
            />

            <label htmlFor="subject">Subject</label>
            <textarea type="text" id="subject" name="subject" placeholder="Your subject.." />

            <button type="submit">Submit</button>
          </form>
        </div>

        {/* Right Section - Placeholder for Additional Info or Map */}
        <div className="contact-info02">
            <iframe
              title="Temple Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.0967506927673!2d77.038552!3d12.241728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf1b74b0aafc71%3A0x1eeb16c9ee321923!2sSri%20Sai%20baba%20temple!5e0!3m2!1sen!2sin!4v1741005327634!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
        </div>
      </div>
    </div>
    <div className="contact-details">
          {contactUsData.map((item, index) => (
            <div className="contact-card" key={index}>
              <p className="icon">{item.icon ||""}</p>
              <p className="text">{item.text}</p>
              <p className="description">{item.description}</p>
            </div>
          ))}
        </div>
    </>
   
  );
};

export default ContactUs;
