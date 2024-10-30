import React from "react";
import Header from '../../components/header';

// Home component definition
const Projects: React.FC = () => {
  return (
    <>
      <Header />
      <main>
      <section className="hero hero__projects"></section>

      <section className="[ projects ] [ section ]">
        <div className="[ container ]">
          <h2 className="[ section-header fs-700 text-center clr-neutral-900 ]">
            Previous Projects
          </h2>
          <div className="[ filter ] [ text-center ]">
            <ul
              className="filter-container even-columns margin-block-end-24 fs-500"
            >
              <li><a>All</a></li>
              <li>
                <a>Virtual Reality</a>
              </li>
              <li>
                <a>Mixed Reality</a>
              </li>
              <li><a>Games</a></li>
              <li>
                <a>Cultural Heritage</a>
              </li>
            </ul>
          </div>
          <div className="wrapper">
            <div className="grid-layout">
              <div className="project-tile games vr mr">
                <a href="/beatbox/" className="grid-item-link">
                  <img
                    src="../Assets/202410_BeatBox-VR_Logo.png"
                    alt="BeatBox-VR logo"
                  />
                  <div className="description">
                    <h3><a href="beatbox.html">BeatBox-VR</a></h3>
                    <p>Virtual Reality Drumming Experience</p>
                  </div>
                </a>
              </div>
              <div className="project-tile mr">
                <a href="#" className="grid-item-link">
                  <img src="../Assets/Habibi Logo.png" alt="Habibi logo" />
                  <div className="description">
                    <h3><a href="beatbox.html">Habibi</a></h3>
                    <p>Mixed Reality Communication Tool</p>
                  </div>
                </a>
              </div>
              <div className="project-tile heritage games vr">
                <a href="#" className="grid-item-link">
                  <img
                    src="../Assets/2024_SXR_Ai_GameTitle_v2.png"
                    alt="Midnight at the Pagoda logo"
                  />
                  <div className="description">
                    <h3><a href="beatbox.html">Midnight at the Pagoda</a></h3>
                    <p>Virtual Reality Digital Heritage Exhibit</p>
                  </div>
                </a>
              </div>
              <div className="project-tile mr games">
                <a href="#" className="grid-item-link">
                  <img
                    src="../Assets/2024_GoFish_Logo.png"
                    alt="GoFosh! logo"
                  />
                  <div className="description">
                    <h3><a href="beatbox.html">Go Fish!</a></h3>
                    <p>Mixed Reality Card Game Adaptation</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
      <footer className="[ primary-footer ] [ bg-neutral-800 clr-neutral-100 text-center flow ]">
        <div className="container">
          <nav className="flex-between">
            <a style={{ textDecoration: 'none' }} href="#">
              Privacy Policy
            </a>
            <a style={{ textDecoration: 'none' }} href="#">
              Terms of Use
            </a>
            <a style={{ textDecoration: 'none' }} href="#">
              Press Kit
            </a>
          </nav>
          <p>© 2024 Reality-B. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

// Exporting Home component as default
export default Projects;
