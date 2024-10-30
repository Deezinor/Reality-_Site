import "../../sass/main.scss";
import React, { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    // console.log("Form submission triggered");

    if (form.current) {
    //   console.log("Form reference exists, sending email...");
      emailjs
        .sendForm(
          "service_8mqz1ts",
          "template_9z4dd5b",
          form.current,
          "jRkvKgTMtmTkRrk8e"
        )
        .then(
          () => {
            console.log("SUCCESS!");
            setIsSuccess(true);          // Show success message
            form.current?.reset();       // Clear the form fields
            setTimeout(() => setIsSuccess(false), 3000);  // Clear the form on success
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } 
    // else {
    //   console.log("Form reference is null");
    // }
  };

  return (
    <section className="[ contact ] [ section ]" id="contact">
      <div className="[ container ] [ contact__form ]">
        <h2 className="[ section-title fs-700 clr-neutral-900 fw-600 ]">
          Contact Us
        </h2>
        <form onSubmit={sendEmail} ref={form} className="contact-form">
          <h4 className="[ fs-500 clr-neutral-600 ]">Get in touch with us!</h4>
          <hr />
          <div className="names">
            <input
              id="fullName"
              type="text"
              name="first-name"
              placeholder="First Name"
              className="contact-inputs"
              required
            />
            {/* <input
              id="lastName"
              type="text"
              name="last-name"
              placeholder="Last Name"
              className="contact-inputs"
              required
            /> */}
          </div>
          <input
            id="email_id"
            type="email"
            name="email"
            placeholder="Your Email"
            className="contact-inputs"
            required
          />
          {/* <input
              type="text"
              name="subject"
              placeholder="Message Subject"
              className="contact-inputs"
              required
            /> */}
          <textarea
            id="message"
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
          {isSuccess && <p className="success-message">Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
