import React from "react";
import Header from "../../components/header";

// Home component definition
const BeatBox: React.FC = () => {
  return (
    <>
    <Header />
      <main>
      <section className="hero hero__beatbox"></section>

      <section className="section main-content">
        <div className="container">
          <div className="beatbox-tile">
            <img src="../Assets/freeplay_Original.gif" />
            <h2 className="fs-600 clr-neutral-900">Concept</h2>
            <p className="fs-400 clr-neutral-500">
              "BeatBox-VR" is a virtual reality drumming experience that allows
              players to play and interact with a full drum set in a 3D
              environment. Inspired by the power of music and the immersive
              capabilities of VR technology, our objective was to create a game
              that not only teaches the fundamentals of drumming but also
              provides an entertaining platform for advanced musicians to
              practice and perform.
            </p>
          </div>
          <div className="beatbox-tile">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/oBdALCK0mpA?si=hGvFXARqQQFWRMmz"
              title="YouTube video player"
              style={{border:"none"}}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>



            <h2 className="fs-600 clr-neutral-900">Game Modes</h2>
            <p className="fs-400 clr-neutral-500">
              Beatbox VR offers four play modes: Free Mode for casual drumming,
              Tutorial Mode for skill-building, Play-along Mode for playing with
              your favorite songs, and Play Mode for rhythm-based challenges.
              These modes cover a wide range of player styles and skill levels,
              providing a complete drumming experience in VR.
            </p>
          </div>
          <div className="beatbox-tile">
            <img src="../Assets/customize_environment.gif" />
            <h2 className="fs-600 clr-neutral-900">Customisation</h2>
            <p className="fs-400 clr-neutral-500">
              The player can also set up their desired experience depending on
              what they're looking for in BeatBoxVR. In the customization
              settings, you can toggle settings like animations, haptics, and
              VFX allowing for people to decide their desired level of realism.
              Additionally, you can select from a variety of drum kit cosmetics
              and environments.
            </p>
          </div>
        </div>
      </section>
    </main>
    <footer className="footer">
      <nav className="footer">
        <a href="#" className="footer footer__item">Privacy Policy</a>
        <a href="#" className="footer footer__item">Terms of Use</a>
        <a href="#" className="footer footer__item">Press Kit</a>
      </nav>
      <p>© 2024 Reality-B. All rights reserved.</p>
    </footer>
    </>
  );
};

// Exporting Home component as default
export default BeatBox;
