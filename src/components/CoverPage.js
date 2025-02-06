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
          {/* <span  className="title">Junior Developer</span> */}
          <ul className="title">
            <li>Junior Developer</li>
            <li>Frontend Developer</li>
            <li>Backend Developer</li>
          </ul>
          <p className="intro">
            A passionate software developer driven by creativity and innovation.
            Let's build the future, one line of code at a time.
          </p>
          <hr />
          <div className="btn-container">
            <a href="/Lebogang Amie Jacob Mylas's Resume-2.pdf">
              <button className="cv-button">
                <svg
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  height="40"
                  width="40"
                  className="cv-button__icon"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
                  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                  <path d="M7 11l5 5l5 -5"></path>
                  <path d="M12 4l0 12"></path>
                </svg>
                <span className="cv-button__text">Resume</span>
              </button>
            </a>
          </div>
          <div className="experience-projects">
            <div className="work-experience">
              <div className="cards-container">
                <div className="experience-card">
                  <h3>Experience</h3>
                  <h1>
                    6 months +
                  </h1>
                </div>
              </div>
            </div>

            <div className="projects-completed">
              <div className="experience-cards-container">
                <div className="experience-card">
                  <h3>Projects Completed</h3>
                  <h1>
                    5+
                  </h1>
                </div>
              </div>
            </div>
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
