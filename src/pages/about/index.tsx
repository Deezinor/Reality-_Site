import React from "react";

// Home component definition
const About: React.FC = () => {
  return (
    <>
      <body className="index-page">
        <main>
          <section className="hero container">
            <div className="hero-reel">
              <img
                src="/Assets/TeamPhotoInnovate.JPG"
                alt="BeatBoxVR Logo"
                className="demo-reel"
                width="100%"
              />
            </div>
          </section>

          <section>
            <div className="company-description">
              <h3>Who we are</h3>
              <p>
                We are a startup founded by an assorted team of Master’s
                Graduates in VR and AR. Our unique blend of expertise comes from
                diverse cultural and educational backgrounds, allowing us to
                bring fresh perspectives and create innovative XR solutions
                across various genres.
              </p>
              <h3>What we do</h3>
              <p>We offer Extended Reality design and development services.</p>
            </div>
          </section>
        </main>
        <footer className="footer">
          <nav className="footer">
            <a href="#" className="footer footer__item">
              Privacy Policy
            </a>
            <a href="#" className="footer footer__item">
              Terms of Use
            </a>
            <a href="#" className="footer footer__item">
              Press Kit
            </a>
          </nav>
          <p>© 2024 Reality-B. All rights reserved.</p>
        </footer>

        <script type="module" src="/main.ts"></script>
        <script type="module" src="/script.ts"></script>
      </body>
    </>
  );
};

// Exporting Home component as default
export default About;
