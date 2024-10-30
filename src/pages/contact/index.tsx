import React from "react";
import Header from "../../components/header";

// Home component definition
const Contact: React.FC = () => {
  return (
    <>
      <Header />
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

        <section className="contact dark-background container">
          <div className="contact-container">
            <h2 className="contact-title light">Contact Us</h2>
            <form action="" className="contact-form">
              <h4 className="contact-form-title light">Get in touch with us!</h4>
              <hr />
              <div className="names">
                <input
                  type="text"
                  name="first-name"
                  placeholder="First Name"
                  className="contact-inputs"
                  required
                />
                <input
                  type="text"
                  name="last-name"
                  placeholder="Last Name"
                  className="contact-inputs"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="contact-inputs"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Message Subject"
                className="contact-inputs"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                className="contact-inputs"
                required
              ></textarea>
              <button type="submit">
                Submit
                <img
                  src="Assets/arrow_right_white.png"
                  alt="arrow right"
                  className="button-arrow"
                />
              </button>
            </form>
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
    </>
  );
};

// Exporting Home component as default
export default Contact;
