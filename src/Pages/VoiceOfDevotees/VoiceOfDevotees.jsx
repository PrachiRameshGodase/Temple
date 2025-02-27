import React from "react";
import "./VoiceOfDevotees.scss";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Vishwas Patel",
    date: "March 13, 2014",
    review: "The bhajan sessions here are so divine that they transport you to a different world. Every Thursday, I make sure to attend, as it fills my heart with devotion and happiness",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Sameer Bhosale",
    date: "May 12, 2019",
    review: "I was going through a tough phase in my life, and after attending the Thursday aarti, I felt a sense of calm and positivity. Miraculously, my problems started resolving",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

const VoiceOfDevotees = () => {
  return (
    <section className="voice-of-devotees">
      <div className="hero_01">
        <div>
          <h2>Voice Of Devotees</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <button className="see-all">See All Testimonials</button>
      </div>
      <div className="testimonials">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <div className="stars">
              {Array.from({ length: testimonial.rating }).map((_, index) => (
                <>
                  &#9733;
                </>
              ))}
              <span className="gray-star">
                &#9733;
              </span>
            </div>

            <p className="review">"{testimonial.review}"</p>
            <div className="user-info">
              <img src={testimonial.image} alt={testimonial.name} />
              <div>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VoiceOfDevotees;
