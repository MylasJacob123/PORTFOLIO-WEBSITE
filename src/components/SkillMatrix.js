import React from "react";
import "./SkillMatrix.css";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
} from "react-icons/di";
import { SiFirebase, SiHtml5, SiCss3 } from "react-icons/si";

function SkillMatrix() {
  const techSkills = [
    {
      icon: <SiHtml5 />,
      skill: "HTML",
      level: "Intermediate",
      description:
        "Used to structure and create the content of web pages. Used in multiple projects.",
    },
    {
      icon: <SiCss3 />,
      skill: "CSS",
      level: "Intermediate",
      description:
        "Styled and designed web pages to be visually appealing.",
    },
    {
      icon: <DiJavascript1 />,
      skill: "JavaScript",
      level: "Beginner",
      description:
        "Used it to add dynamic behavior and functionality to websites.",
    },
    {
      icon: <DiNodejs />,
      skill: "Node.js",
      level: "Intermediate",
      description:
        "Built server-side applications and APIs using Node.js.",
    },
    {
      icon: <DiReact />,
      skill: "React",
      level: "Intermediate",
      description:
        "Built dynamic and interactive user interfaces with React.",
    },
    {
      icon: <DiMongodb />,
      skill: "MongoDB",
      level: "Beginner",
      description:
        "Used MongoDB to store and manage data in NoSQL databases.",
    },
    {
      icon: <DiGit />,
      skill: "Git",
      level: "Beginner",
      description:
        "Experience in using Git for source code tracking, and working with GitHub repositories.",
    },
    {
      icon: <SiFirebase />,
      skill: "Firebase",
      level: "Intermediate",
      description:
        "Integrated Firebase for real-time databases, authentication, and hosting.",
    },
  ];

  return (
    <div className="techstack-container">
      <h1>Skillset</h1>
      <div className="tech-icons-container">
        {techSkills.map((tech, index) => (
          <div className="tech-icon" key={index}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">{tech.icon}</div>
                <div className="flip-card-back">
                  <h6>{tech.skill}</h6>
                  <p>{tech.level}</p>
                  <p>{tech.description}</p>
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
