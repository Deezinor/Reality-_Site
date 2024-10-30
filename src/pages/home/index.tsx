import React from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';
import ContactForm from "../../components/contact-form";


// Home component definition
const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <section className="[ hero hero__home ] [ clr-neutral-100 text-center ]"></section>

        <section className="[ about ] [ section ]" id="about">
          <div className="[ container ]">
            <div className="[ text-center ]">
              <h1 className="[ section-header fs-900 clr-neutral-800 ]">
                Let us help bring your ideas to life.
              </h1>
              <p className="[ ff-500 paragraph mx-auto ]">
                We are a startup founded by an assorted team of Master's
                Graduates in VR and AR. Our unique blend of expertise comes from
                diverse cultural and educational backgrounds, allowing us to
                bring fresh perspectives and create innovative XR solutions
                across various genres.
              </p>
            </div>
          </div>
        </section>

        <section className="[ awards ] [ section clr-neutral-100 bg-neutral-800 text-center ]">
          <div className="[ container ]">
            <h2 className="[ section-header fs-700 ]">Awards</h2>
            <div className="[ even-columns align-items-center margin-block-end-48 ]">
              <div className="award-card">
                <img
                  className="logo__medium"
                  src="/Assets/ukri-innovate-uk-square-logo.png"
                  alt="Innovate UK Logo"
                />
                <h3>Innovate UK: Immersive Tech Awards 2024</h3>
                <p>Jury Prize Winner</p>
              </div>
              <div className="award-card">
                <img
                  className="logo__medium"
                  src="/Assets/XR Hack.svg"
                  alt="XR Hack Logo"
                />
                <h3>XR Hack: Istanbul</h3>
                <p>Runner's Up</p>
              </div>
              <div className="award-card">
                <img
                  className="logo__medium Digital-heritage"
                  src="/Assets/digital heritage.jpg"
                  alt="Digital Heritage Logo"
                />
                <h3>Digital Heritage 2024</h3>
                <p>
                  Best Us of Technology <br />
                  Winner
                </p>
              </div>
            </div>
            <p className="margin-block-start-20 clr-neutral-500">
              We have been awarded multiple awards from organisation and
              competitions in different countries across the globe.
            </p>
            <p className="margin-block-end-48 clr-neutral-500">
              Get in touch to start the process of designing a high-quality
              one-off experience.
            </p>
            <a href="#contact" className="button" data-type="accent">
              Contact Us
            </a>
          </div>
        </section>

        <section className="[ team ] [ section clr-neutral-800 text-center ]">
          <h2 className="[ section-header fs-700 ]">THE TEAM</h2>
          <div className="container">
            <div className="grid-layout">
              <div className="team-card">
                <img src="Assets/Graduation photo.jpg" alt="" />
                <h4>JAKE BOULTON</h4>
                <p>UX / XR DESIGNER</p>
              </div>
              <div className="team-card">
                <img src="Assets/Mai.jpeg" alt="" />
                <h4>MAI YE</h4>
                <p>UNITY DEVELOPER</p>
              </div>
              <div className="team-card">
                <img src="Assets/Nathan.jpeg" alt="" />
                <h4>NATHAN THOMAS-BENKE</h4>
                <p>UNITY DEVELOPER</p>
              </div>
              <div className="team-card">
                <img src="Assets/Hwanjoon.jpeg" alt="" />
                <h4>HWANJOON JANG</h4>
                <p>UNITY DEVELOPER</p>
              </div>
              <div className="team-card">
                <img src="Assets/Josh.jpeg" alt="" />
                <h4>JOSHUA DAVIES</h4>
                <p>UNITY DEVELOPER</p>
              </div>
              <div className="team-card">
                <img src="Assets/Mo.jpeg" alt="" />
                <h4>MO EL ELYRAN</h4>
                <p>XR DESIGNER</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ContactForm />
      <Footer />
    </>
  );
};

// Exporting Home component as default
export default Home;
