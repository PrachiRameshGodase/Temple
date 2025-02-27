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
              src="https://maps.google.com/maps?q=Shree%20Venkateshwara%20Temple,%20Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
