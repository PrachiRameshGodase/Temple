import React from "react";
import "./VoiceOfDevotees.scss";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    name: "Vishwas Patel",
    date: "March 13, 2014",
    review: "The bhajan sessions at Sadguru Sai Baba Temple are truly divine. The peaceful atmosphere and soulful chanting transport me to a different world. Every Thursday, I make sure to attend, as it fills my heart with devotion, positivity, and inner peace. A perfect place to connect with spirituality!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Sameer Bhosale",
    date: "May 12, 2019",
    review: "I was going through a tough phase in my life, and after attending the Thursday aarti at Sadguru Sai Baba Temple, I felt an immense sense of calm and positivity. Miraculously, my worries started fading away, and things began to fall into place. This temple is truly a source of divine blessings and peace.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

const VoiceOfDevotees = () => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    navigate("/social-services");
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        const yOffset = -80; // 80px upar se adjust karne ke liye
        const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  };


  return (
    <section className="voice-of-devotees">
      <div className="hero_01">
        <div>
          <h2>Voice Of Devotees</h2>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </div>
        {/* <button className="see-all" onClick={() => setTimeout(() => scrollToSection("Testimonials"), 100)}>See All Testimonials</button> */}
      </div>
      <div className="testimonials01">
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
              {/* <img src={testimonial.image} alt={testimonial.name} /> */}
              <div>
                <h4>{testimonial.name}</h4>
                {/* <p>{testimonial.date}</p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VoiceOfDevotees;
