import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const BGM: React.FC = () => (
  <div className="container">
    <Navbar />
    <h2>Betriebliches Gesundheitsmanagement (BGM)</h2>
    <p>Steigern Sie die Vitalität und Zufriedenheit Ihres Teams.</p>
    <div className="service-box">
      <h3>Analyse & Strategie</h3>
      <p>Wir evaluieren den Status Quo Ihrer Belegschaft.</p>
    </div>
    <Footer />
  </div>
);

export default BGM;
