import React from "react";
import "./Footer.css";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className="footer">
      <div className="footer-copywright">
        <h3>Designed and Developed by Jacob Mylas</h3>
      </div>
      <div className="footer-copywright">
        <h3>Copyright © {year} LAJM</h3>
      </div>
      <div className="footer-body">
        <ul className="footer-icons">
          <li className="social-icons">
            <a
              href="https://github.com/MylasJacob123"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              GitHub
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/jacob-mylas-5057ba340/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
