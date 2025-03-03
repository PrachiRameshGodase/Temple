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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.0967506927673!2d77.038552!3d12.241728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf1b74b0aafc71%3A0x1eeb16c9ee321923!2sSri%20Sai%20baba%20temple!5e0!3m2!1sen!2sin!4v1741005327634!5m2!1sen!2sin"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>

            <div className="temple-info">
                <div>
                    <h3>Sri Shirdi Sairanga Temple</h3>
                    <p>62RQ+FMH, Purigali, B.G.Mole, Karnataka 571463</p>
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
