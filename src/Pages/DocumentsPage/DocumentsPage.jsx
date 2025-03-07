import React, { useState } from "react";
import "./DocumentsPage.scss";
import { FileText, Download, Eye } from "lucide-react"; // Lucide-react icons

import file1 from "../../assets/doc/80G Certificate.pdf";
import file2 from "../../assets/doc/12A Certificate.pdf";
import file3 from "../../assets/doc/NGO Darphan Certificate.pdf";

const documents = [
    { title: "80G Certificate", file: file1, description: "Tax Exemption Certificate" },
    { title: "12A Certificate", file: file2, description: "NGO Tax Registration" },
    { title: "NGO Darpan Certificate", file: file3, description: "Government Recognition" },
];

const DocumentsPage = () => {
    const [selectedDoc, setSelectedDoc] = useState(null);

    return (
        <div className="documents-container">
            {/* Navbar */}
            <header className="navbar_d">
                <h1>📄 Official Documents & Certificates</h1>
            </header>

            {/* Document Cards */}
            <div className="documents-grid">
                {documents.map((doc, index) => (
                    <div key={index} className="document-card">
                        <FileText size={64} className="pdf-icon" />
                        <h2>{doc.title}</h2>
                        <p>{doc.description}</p>
                        <div className="button-group">
                            <button onClick={() => setSelectedDoc(doc.file)} className="view-btn">
                                <Eye size={18} /> View
                            </button>
                            <a href={doc.file} download className="download-btn">
                                <Download size={18} /> Download
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for Document Preview */}
            {selectedDoc && (
                <div className="modal-overlay" onClick={() => setSelectedDoc(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setSelectedDoc(null)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                            <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></button>
                        <iframe src={selectedDoc} title="Document Preview"></iframe>
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="footer">
                <h2>📜 Need More Information?</h2>
                <p>Contact us for any queries regarding official documents & certifications.</p>
            </footer>
        </div>
    );
};

export default DocumentsPage;
