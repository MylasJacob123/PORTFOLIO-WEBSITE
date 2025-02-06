import React from "react";
import "./CoverPage.css";
import HeroImg from "./assets/web developer.webp";

function CoverPage() {
  return (
    <div className="home">
      <div className="hero">
        <div className="animated-text">
          <h1>Hi there,</h1>
          <p className="name">I'm Jacob Mylas</p>
          <p className="intro">
            A passionate software developer driven by creativity and innovation.
            Let's build the future, one line of code at a time.
          </p>
          <hr />
          <div className="btn-container">
            <a href="/Lebogang Amie Jacob Mylas's Resume-2.pdf" >
              <button className="Btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 384 512"
                  class="svgIcon"
                >
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                </svg>
                <span className="icon2"></span>
              </button>
            </a>
            <span className="res"> My Resume</span>
          </div>
        </div>
        <div className="hero-img">
          <img src={HeroImg} alt="Web Developer" />
        </div>

        
      </div>
    </div>
  );
}

export default CoverPage;
