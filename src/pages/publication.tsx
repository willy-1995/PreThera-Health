import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Studies: React.FC = () => (
  <div className="container">
    <Navbar />
    <h2>Wissenswertes</h2>
    <article className="study-card">
      <h3>Aktuelle Studie: Bewegung im Homeoffice</h3>
      <p>Veröffentlicht im Fachmagazin für Prävention (2025).</p>
      <button>Mehr lesen</button>
    </article>
    <Footer />
  </div>
);

export default Studies;
