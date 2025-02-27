import React, { useEffect, useState } from "react";
import "./CookieConsent.scss";

const CookieConsent = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 6000); 

        return () => clearTimeout(timer); // Cleanup on unmount
    }, []);

    if (!showPopup) return null;

    return (
        <div className="cookie-popup">
            <button className="close-btn" onClick={() => setShowPopup(false)}>
                &times;
            </button>
            <p>
                By clicking “Accept all cookies”, you agree to the storing of cookies on
                your device to enhance site navigation, analyze site usage, and assist in
                our marketing efforts. View our{" "}
                <a href="#" className="privacy-link">
                    Privacy Policy
                </a>{" "}
                for more information.
            </p>
            <div className="button-group">
                <button className="reject-btn" onClick={() => setShowPopup(false)}>Reject all cookies</button>
                <button className="accept-btn" onClick={() => setShowPopup(false)}>Accept all cookies</button>
            </div>
            <button className="manage-btn" onClick={() => setShowPopup(false)}>Manage preferences</button>
        </div>
    );
};

export default CookieConsent;
