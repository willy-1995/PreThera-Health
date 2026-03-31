import React from "react";
import { useState, useEffect } from "react";
import "../components/navbar";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Stressmanagement from "../components/stressmanagement";
import PowerActive from "../components/poweractive";
import CardioActive from "../components/cardioactive";
import RehabCareOnko from "../components/rehabcareOnko";
import Massage from "../components/massage";
import Action from "../components/action";

const Start: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 4;

  //SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval); //stop timer if user leaves site
  }, []);

  //LOAD RIGHT MODAL CONTENT (COMPONENT)
  const renderModalContent = () => {
    switch (activeModal) {
      case "stressmanagement":
        return <Stressmanagement />;
      case "poweractive":
        return <PowerActive />;
      case "cardioactive":
        return <CardioActive />;
      case "rehabcare-onko":
        return <RehabCareOnko />;
      case "massage":
        return <Massage />;

      default:
        return null;
    }
  };

  return (
    <div className="container">
      <Navbar />
      <header className="hero">
        <div className="intro-div">
          <h2>Ganzheitliches Gesundheitsmanagement - Digital und vor Ort!</h2>
          <div className="slider-div">
            <div className={`slider ${currentIndex === 0 ? "active" : ""}`}>
              <img src="/media/AdobeStock_171923475-1270x729.jpg" alt="image" />
            </div>
            <div className={`slider ${currentIndex === 1 ? "active" : ""}`}>
              <img
                src="/media/2d1e0922b8e319de1070fccb90637815.jpeg"
                alt="image"
              />
            </div>
            <div className={`slider ${currentIndex === 2 ? "active" : ""}`}>
              <img src="/media/massage_1150x640.jpg" alt="image" />
            </div>
            <div className={`slider ${currentIndex === 3 ? "active" : ""}`}>
              <img
                src="/media/online-ernaehrungsberatung-ernaehrungsberaterin-an-laptop-mit-Apfel.jpg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </header>
      <h2>Alle Leistungen im Überblick</h2>
      <div className="preview-grid">
        <div className="card">
          <h3>Präventionskurse (§20)</h3>
          <div className="card-sub">
            <p onClick={() => setActiveModal("stressmanagement")}>
              Stressmanagement (§20 Kurs)
            </p>
            <p onClick={() => setActiveModal("poweractive")}>
              Kraft Aktiv (§20 Kurs)
            </p>
            <p onClick={() => setActiveModal("cardioactive")}>
              Cardio Aktiv (§20 Kurs)
            </p>
          </div>
        </div>
        <div className="card">
          <h3>Reha-Nachsorge (DRV)</h3>
          <div className="card-sub">
            <p onClick={() => setActiveModal("rehabcare-onko")}>
              Reha-Nachsorge (Bewegungstherapie) Onkologie
            </p>
          </div>
        </div>
        <div className="card">
          <h3>Selbstzahler</h3>
          <div className="card-sub">
            <p onClick={() => setActiveModal("massage")}>Mobile Massage</p>
          </div>
        </div>
      </div>
      <Footer />
      {/*===============
       * MODAL 
       =================
     */}
      {activeModal && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {renderModalContent()}
          </div>
          <button onClick={() => setActiveModal(null)}>Schließen</button>
        </div>
      )}
      <Action />
    </div>
  );
};

export default Start;
