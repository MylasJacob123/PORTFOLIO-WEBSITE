import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_cnhvm68",
        "template_qgm0j3v",
        formData,
        "vbFMPeV6VTqxzg4zH"
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          Swal.fire({
            title: "Success!",
            text: "Your message has been sent successfully.",
            icon: "success",
            confirmButtonText: "Okay",
          });
        },
        (error) => {
          console.error("Failed to send email.", error.text);
          Swal.fire({
            title: "Error",
            text: "Failed to send the message. Please try again.",
            icon: "error",
            confirmButtonText: "Okay",
          });
        }
      );
  };

  return (
      <div className="contact">
        <div className="contact-header">
          <h1>Contact Me</h1>
          <p>
            I'd love to hear from you! Feel free to reach out for any inquiries
            you may have.
          </p>
        </div>
        <div className="contact-info">
          <div className="contact-info-item">
            <FontAwesomeIcon icon={faPhone} />
            <p>+27 67 085 4083</p>
          </div>
          <div className="contact-info-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>mylasjacob18.5@gmail.com</p>
          </div>
        </div>
        <div className="contact-form-container">
          <h2>Send a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="contact-submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
  );
}
export default Contact;
