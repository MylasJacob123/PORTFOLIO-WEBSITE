import React from "react";
import "./About.css";
import Me from "./assets/download.jpeg";
import SkillMatrix from "./SkillMatrix";

function About() {
  return (
    <section className="about">
      <div className="about-info">
        <div className="about-container">
          <div className="about-content">
            <h1>About Me</h1>
            <p>
              Hi! I am <strong>Jacob</strong>, an adept Web Developer with a
              love for creating engaging UI. I adept in HTML, CSS JavaScript,
              React, and modern Web Development Tech Stacks.
            </p>
            <p>
              I enjoy tackling challenges, learning new programming Languages,
              continuously improving my craft and myself. When I am not coding,
              you can find me trying new things such as reading a new book,
              manga, gaming, animation or enjoying the outdoors.
            </p>
            <h2>Personal Details</h2>
            <ul>
              <li>
                <strong>Name:</strong> Jacob Mylas
              </li>
              <li>
                <strong>Location:</strong> Kimberley, South Africa
              </li>
              <li>
                <strong>Program Enrolled:</strong> Codetribe
              </li>
              <li>
                <strong>My Resume:</strong>
                <i>
                  <a href="https://drive.google.com/file/d/11Uv-QKO_q5X3gnZNQrB7YGsqKC00YBRH/view?usp=drive_link">
                      Click here
                  </a>
                </i>{" "}
              </li>
              <li>
                <strong>Interests:</strong> Anime, Manga, Animation, Gaming and
                more
              </li>
              <li>
                <strong>Goals:</strong> Secure a job in web development. Build
                2-3 more portfolio projects.{" "}
              </li>
              <li>
                <strong>Long-Term Goals:</strong> Contribute to open-source
                projects. Become a true full-stack developer.
              </li>
            </ul>
          </div>
          <div className="about-image">
            <img src={Me} alt="a image of me" />
          </div>
        </div>
      </div>
      <SkillMatrix />
    </section>
  );
}
export default About;
