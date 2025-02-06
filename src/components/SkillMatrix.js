import React, { useState } from "react";
import "./SkillMatrix.css";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import { SiFirebase, SiHtml5, SiCss3 } from "react-icons/si";

function SkillMatrix() {
  const [viewMode, setViewMode] = useState("Skillset");

  const toggleView = () => {
    setViewMode(viewMode === "Skillset" ? "Proficiency" : "Skillset");
  };

  const techSkills = [
    {
      icon: <SiHtml5 />,
      skill: "HTML",
      level: "Intermediate",
      percentage: 75,
      description:
        "Used to structure and create the content of web pages. Used in multiple projects.",
    },
    {
      icon: <SiCss3 />,
      skill: "CSS",
      level: "Intermediate",
      percentage: 70,
      description: "Styled and designed web pages to be visually appealing.",
    },
    {
      icon: <DiJavascript1 />,
      skill: "JavaScript",
      level: "Beginner",
      percentage: 50,
      description:
        "Used it to add dynamic behavior and functionality to websites.",
    },
    {
      icon: <DiNodejs />,
      skill: "Node.js",
      level: "Intermediate",
      percentage: 65,
      description: "Built server-side applications and APIs using Node.js.",
    },
    {
      icon: <DiReact />,
      skill: "React",
      level: "Intermediate",
      percentage: 70,
      description: "Built dynamic and interactive user interfaces with React.",
    },
    {
      icon: <DiMongodb />,
      skill: "MongoDB",
      level: "Beginner",
      percentage: 40,
      description: "Used MongoDB to store and manage data in NoSQL databases.",
    },
    {
      icon: <DiGit />,
      skill: "Git",
      level: "Beginner",
      percentage: 55,
      description:
        "Experience in using Git for source code tracking, and working with GitHub repositories.",
    },
    {
      icon: <SiFirebase />,
      skill: "Firebase",
      level: "Intermediate",
      percentage: 60,
      description:
        "Integrated Firebase for real-time databases, authentication, and hosting.",
    },
  ];

  return (
    <div className="techstack-container">
      <h1>{viewMode}</h1>
      <button className="toggle-button" onClick={toggleView}>
        {viewMode === "Skillset" ? "Proficiency" : "Skillset"}
      </button>
      <div className="tech-icons-container">
        {techSkills.map((tech, index) => (
          <div className="tech-icon" key={index}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">{tech.icon}</div>
                <div className="flip-card-back">
                  {viewMode === "Skillset" ? (
                    <>
                      <h6>{tech.skill}</h6>
                      <p>{tech.description}</p>
                    </>
                  ) : (
                    <>
                      <h6>{tech.skill}</h6>
                      <div className="progress-bar-container">
                        <div
                          className="progress-bar"
                          style={{ width: `${tech.percentage}%` }}
                        ></div>
                      </div>
                      <p>{tech.percentage}%</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillMatrix;
