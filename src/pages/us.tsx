import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Us: React.FC = () => {
  //FOR GITHUB PAGES
  const getAssetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;
  return (
    <div className="container">
      <Navbar />
      <h2>Über uns</h2>
      <div className="card us-card">
        <h3>Unsere Mission</h3>
      </div>

      <div>
        <h2>Wer wir sind</h2>
        <div className="preview-grid">
          <div className="card staff-card">
            <div className="team-img-div">
              <img
                src={getAssetUrl(
                  "media/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
                )}
                alt="Laura Wingenfeld"
              />
            </div>
            <div className="staff">
              <h3>Laura Wingenfeld</h3>
              <ul>
                <li>Präventionskurse</li>
                <li>Ernährungsberatung</li>
                <li>Social Media</li>
              </ul>
            </div>
          </div>

          <div className="card staff-card">
            <div className="team-img-div">
              <img
                src={getAssetUrl("media/w9azq331wmu41.jpg")}
                alt="Lucas Wingenfeld"
              />
            </div>

            <div className="staff">
              <h3>Lucas Wingenfeld</h3>
              <ul>
                <li>Präventionskurse</li>
                <li>Sport- & Bewegungstherapie</li>
                <li>IT</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Us;
