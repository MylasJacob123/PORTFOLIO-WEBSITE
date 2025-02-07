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
      
    </div>
  );
}

export default Footer;
