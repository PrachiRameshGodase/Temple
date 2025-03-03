import React from "react";
import "./TempleLocation.scss";
import { ChevronRight, LocateFixed } from "lucide-react";

const TempleLocation = () => {
    return (
        <section className="temple-location">
            <h2>Our Temple Location</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className="map-container">
                <iframe
                    title="Temple Location"
                    src="https://maps.google.com/maps?q=Shree%20Venkateshwara%20Temple,%20Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>

            <div className="temple-info">
                <div>
                    <h3>Sri Shirdi Sairanga Temple</h3>
                    <p>Shree Venkateshwara Temple, 45 Temple Road, Bangalore, Karnataka 560001, India</p>
                </div>
                <a
                    href="https://maps.app.goo.gl/EVur8y4YbWDDvhYD6?g_st=iw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="directions"
                >
                    <LocateFixed />  Get Directions <ChevronRight />
                </a>
            </div>
        </section>
    );
};

export default TempleLocation;
