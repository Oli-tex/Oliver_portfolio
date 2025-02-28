/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-nav">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Info</h3>
          <p> Location: Lagos, Nigeria</p>
          <p> Phone: +234 123 456 7890</p>
          <p>
            Email:
            <a href="mailto:basseyolive.write@gmail.com">
              basseyolive.write@gmail.com
            </a>
          </p>
        </div>

        <div className="footer-social">
          <h3>Follow Me</h3>
          <div className="social-icons">
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
      <div className="footer-bottom">
        <p>&copy; 2025 Bassey Oliver. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
