import React from "react";
import "./Donation.scss";
import qrCode from "../../assets/home/qr-code.jpg"; // QR Code image

const Donation = () => {
    return (
        <div className="donation-container">
            <h1 className="title">Make a Donation</h1>
            <p className="subtitle">(Your donations are tax exempted under Section 80G)</p>

            <div className="donation-content">
                <h2>Receipts For Your Donation</h2>
                <ul>
                    <li>80G available as per Income Tax Act 1961 and rules made there under.</li>
                    <li>Tax Exemption Certificate Ref. No.: ABKTS2217CF20241</li>
                    <li>
                        To get the receipt of donation made through NEFT, RTGS, IMPS, PayTm, UPI,
                        please share your legal name, postal address with pincode (and PAN if you need 80G receipt) along with transaction details on
                        <strong> sevaoffice@srisairanga.com</strong>
                    </li>
                    <li>We will share your Donation Receipt 🧾 & 80G Receipt to your Mail or WhatsApp.</li>

                </ul>
            </div>

            <div className="bank-details">
                <h2>Bank Details</h2>
                <p><strong>Account Name:</strong> SRI SAI RANGA SEVA PRATISHTANA</p>
                <p><strong>Account Number:</strong> 045294600000917</p>
                <p><strong>Account Type:</strong> SAVINGS ACCOUNT</p>
                <p><strong>Bank Name:</strong> YES BANK</p>
                <p><strong>IFSC Code:</strong> YESB0000452</p>
                <p><strong>Branch:</strong> MYSURU</p>
            </div>

            <div className="qr-section">
                <h2>Scan & Donate</h2>
                <img src={qrCode} alt="Donation QR Code" className="qr-code" />
                <p>Scan the QR code to donate via UPI</p>
            </div>
        </div>
    );
};

export default Donation;