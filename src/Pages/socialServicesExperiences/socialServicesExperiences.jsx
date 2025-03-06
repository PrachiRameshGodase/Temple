import React from "react";
import { socialServicesData, testimonialsData } from "../../Helper/Constant";
import "./socialServicesExperiences.scss";


import img6 from '../../assets/templeSnapShot/IMG-20250301-WA0007_10_11zon.jpg'
import img7 from '../../assets/templeSnapShot/IMG-20250301-WA0008_9_11zon.jpg'
import img9 from '../../assets/templeSnapShot/IMG-20250301-WA0010_7_11zon.jpg'
import img11 from '../../assets/templeSnapShot/IMG-20250301-WA0012_4_11zon.jpg'
import img14 from '../../assets/templeSnapShot/IMG-20250301-WA0015_2_11zon.jpg'
import img15 from '../../assets/templeSnapShot/IMG-20250301-WA0016_1_11zon.jpg'
import img16 from '../../assets/templeSnapShot/WhatsApp Image 2025-03-03 at 16.01.58_2ddf6e4f_11zon.jpg'
import img17 from '../../assets/templeSnapShot/WhatsApp Image 2025-03-03 at 16.01.59_d7216a0f_11zon.jpg'

export const SchoolShot = [
  { imgUrl: img6 },
  { imgUrl: img7 },
  { imgUrl: img9 },
  { imgUrl: img11 },
  { imgUrl: img14 },
  { imgUrl: img15 },
  { imgUrl: img16 },
  { imgUrl: img17 },


];

const services = [
  {
    id: 1,
    title: "Health",
    description:
      "Sri Shirdi Sai Anandamaiyee Trust does Annadana (Sponsors lunch) to about 50 Autistic students of a school every day. Fresh nutritious food is transported from the farm to school every day.",
    image: "https://s3-alpha-sig.figma.com/img/df15/d512/9517481032e1f29b532fad35d7b1416d?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RbGxvgL604kESY0awiG~DGT~pnT8oEnFnyOxwFKFWcKRFD2qkpTHUU3Y83tUxV6eZn0y38nWLp7J9m-E9XOEwCFGattQx~VYfUxfTU~SrbnNJizUJhQV7bW-9ay56uLhVUK-1VJUeoGHd7ucEcofld9Q103if~wpyNsQXtFc~WkH-Uv-~7kXZRPvnW1takebgq4QOmi6kzqr7Pbk5eH5tf4PC~OYsIMWLXilbfRNxM4-gvDJ~1EsfIT357MyjstWpFcIDIM-zH1L9zoFo0e~fMUjqKvR6vXfcWrd3bpnTtXtgbA~W48hXMCuLKLO9hJ1IVXU6OAvF9cxRfi~BotM-Q__",
  },
  {
    id: 2,
    title: " Livelihood",
    description:
      "The Trust also engages in conducting training classes among the women from the near- by village. The aim is to provide self employment among women that get help them to earn bread for themselves rather than depend on anyone.",
    image: "https://s3-alpha-sig.figma.com/img/0916/1e8b/e45f81c000473fa4bf1ac1e5a15dfa26?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WV3j0GekLo3MUQkp~84x-Y0f8Rasfl-BEwuUIbfqLc1~noD7VapvmE-3lUIjTBus61ksDPrJMxh-EG5DXauk-XB4j8qFYzTUg9OuPoOMxP2jaWi0x4DJ3lohCPmwGcv6axAwACRaPOMcgVFq2r1XGpj9fZLNH~KhAwHyuSLqnWugFy3eLwTOYYQY3vr0GB-ngnUsWfjs0go0FhlrcxB4eJhlfP-AlGvng7Xf9ukRoVYVwhQbaLnHiLMdtoOR59~EAdWIF0jgE2N~bYLUz7DlrHFyxa5M49F0dkL6o-azgH533tH5seTn3caD6LnCD4lNY2PRG5efH0IVoiAo7kVbjQ__",
  },
  {
    id: 3,
    title: "Education",
    description:
      "Kids from the near-by villages who have never been exposed to computer are being taught basic computer courses. As technology is so vital in today’s life, the trust helps in providing kids with basic introduction to computers.",
    // image: "https://s3-alpha-sig.figma.com/img/d40c/d6ff/82823f14f28b14e3993adf61427f0f29?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XbTlstVyhL398dG-sjBVntFfLHE2vfbZHBkBysbwfbig4-S2BObhkNM7xuMm5kEEOXM5n-iBE9U1S6RrjOQdxaXZx256CldToms3Vjtzdpwk6mOktuwa9UVarsp9ZWUbCvQiu4oTo2AoDVEe-~kIwkGhdTdDoH8Q3mKzlcLe7Dqq9up4o0MWfZKepH9f7IWXXuvy-qCZ427mMsT8RncYrTnEBMDkYbYheW6xafZzrIqJy8hN-C28gacRP4DIwgFfJw9583hzYYFSkhlWHpBhEYbsMiuzTYhxkJuOW~XH9DU~aHbAPoC1VQbfO2mmRFZ~g9~Co0tvjWvCsKfPWiNQwg__",
    image:'https://img.freepik.com/free-photo/woman-teaching-classroom_23-2151696381.jpg?t=st=1741252954~exp=1741256554~hmac=8b91c042140d0bd51c8f8f5d7620ed0d17e1829db072f3dc4b2e7befe0c63484&w=1380'
  },
  {
    id: 4,
    title: "Women Empowerment",
    description:
      "As one rightly says Anna dhana (Donating food) is great but Vidya dhana (Sharing knowledge) is the greatest among all dhanas. Capt. V.V. Mahesh takes personal attention in conducting tuitions for kids who are weak in studies.",
    image: "https://s3-alpha-sig.figma.com/img/af24/c126/56dd2d75e0f27aa960d1decdc4c18c35?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dI4vXuisRmpmShO113HR3swXRdFqIO28PfiOfk29Ib2TfyGY96PrlwL4n4l8CZ5EyNaRjmdI9QV0ib9Xi4t1RY8-FxWqop3bNS-jEh2NxHlQfjkVIOAphSTCbllnfyveW611w9ncBP~qUiSh53TFdQHmLJ33LXDF7L4ClwMfH2sQsOh3b1KsvqclKfl37705c9X1Hq71Qzl-gXeeDrjNnPbZERWFvx2~EgH~1DJjv-smqBo1tiyKtAwFNaPa3r9y1DAoPyISOZMyVRBYv2mD9o7IK-xWdiUJhCkZklKJHHeLkTNisE~GJfpkBRM7UkqWDo5zUEi9GjGWqexKzkVYpg__",
  },
  {
    image: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Temple/SocialServices/itwhpxdsff4rsk5pdmcg",
    title: "Daily Pooja & Aarti Services",
    description: "Immerse in spiritual harmony with our daily poojas and aarti, offering divine blessings and peace to all devotees."

  }
  ,
  {
    image: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Temple/SocialServices/pn3ztomrgpv4pemkcqlf",
    title: "Medical & Health Camps",
    description: "Experience divine peace through our daily poojas and aarti sessions, bringing blessings and holistic well-being to all devotees."

  }
  ,
  {
    image: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Temple/SocialServices/aic1daeinwy5ss9z7x1k",
    title: "Charity & Spiritual Support",
    description: "Find divine peace through our daily poojas and aarti sessions, fostering spiritual harmony while extending charity and financial assistance to those in need. "

  },
  {
    image: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Temple/SocialServices/yp7rysrsibq56ipoiavu",
    title: "Spiritual & Cultural Programs",
    description: "Immerse in divine serenity through daily poojas and aarti, fostering spiritual harmony and blessings for all."

  }

];
const SocialServicesExperiences = () => {
  return (
    <>
      <div className="social-services2">
        <div className="container">
          <h3>Key Focus Areas</h3>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <img src={service.image} alt={service.title} />
                <h2>{service.title}</h2>
                {/* <p>{service.description}</p> */}
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <h3>Govt Higher Primery School BJMole</h3>
          <p>Govt High School Saraguru Malavalli Taluk Developed by Pratishtana</p>
          <br /><br />
          <div className="services-grid grid_sch">
            {SchoolShot.map((service, index) => (
              <div className="service-card" key={index}>
                <img src={service.imgUrl} className="img_sch" />
                {/* <h2>{service.title}</h2> */}
                {/* <p>{service.description}</p> */}
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