import { useState } from "react";
import MyNavLink from "./NavLink";
import Footer from "./Footer";

//  action="https://formspree.io/f/xdkaqkgw"
// method="POST"

/* eslint-disable react/jsx-no-target-blank */
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("https://formspree.io/f/xdkaqkgw", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message.");
    }
  };

  return (
    <>
      <MyNavLink />
      <div className="mycontact__section">
        <section className="section contact-section">
          <h2>Contact Me</h2>
          <div className="contact-container">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <button type="submit">Send Message</button>
                <p>{status}</p>
              </form>
            </div>
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p>
                Email:{" "}
                <a href="mailto:basseyolive.write@gmail.com">
                  basseyolive.write@gmail.com
                </a>
              </p>
              <p>
                Phone: <a href="tel:+1234567890">+ (234) 708-335-9248</a>
              </p>
              <p>Location: Lekki, Lagos State Nigeria.</p>
              <div className="social-media">
                <a href="https://x.com/OliverB_write" target="_blank">
                  Twitter
                </a>
                <a
                  href="https://www.instagram.com/oliverbass.write/"
                  target="_blank"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/oliverdesigner/"
                  target="_blank"
                >
                  LinkedIn
                </a>
                <a href="https://github.com/Oli-tex" target="_blank">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
