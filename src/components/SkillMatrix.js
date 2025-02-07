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
  const [activeTab, setActiveTab] = useState("TechStack");

  const techSkills = [
    {
      icon: <SiHtml5 />,
      skill: "HTML",
      level: "Intermediate",
      percentage: 40,
      description: "Used to structure and create the content of web pages.",
    },
    {
      icon: <SiCss3 />,
      skill: "CSS",
      level: "Intermediate",
      percentage: 30,
      description: "Styled and designed web pages.",
    },
    {
      icon: <DiJavascript1 />,
      skill: "JavaScript",
      level: "Beginner",
      percentage: 60,
      description: "Used to add dynamic behavior to websites.",
    },
    {
      icon: <DiNodejs />,
      skill: "Node.js",
      level: "Beginner",
      percentage: 70,
      description: "Built server-side applications using Node.js.",
    },
    {
      icon: <DiReact />,
      skill: "React",
      level: "Beginner",
      percentage: 80,
      description: "Built dynamic UIs with React.",
    },
    {
      icon: <DiMongodb />,
      skill: "MongoDB",
      level: "Beginner",
      percentage: 40,
      description: "Managed data in NoSQL databases.",
    },
    {
      icon: <DiGit />,
      skill: "Git",
      level: "Beginner",
      percentage: 55,
      description: "Source code management with Git.",
    },
    {
      icon: <SiFirebase />,
      skill: "Firebase",
      level: "Beginner",
      percentage: 60,
      description: "Integrated Firebase for authentication and hosting.",
    },
  ];

  const achievements = [
    {
      achievement:
        "When I first started coding, I built a full-stack web application, which was a huge milestone for me. It was my first experience working with both front-end and back-end technologies, and it helped me understand the importance of database interactions with SQL and MongoDB. Later, I expanded my skills by integrating a registration system with a database, allowing users to create accounts and manage their data efficiently.",
      completed: true,
    },
    {
      achievement:
        "I then moved on to creating a to-do list application, which seemed simple at first but taught me a lot about state management and user interface design. I took that knowledge further by implementing a shopping list app with Redux, which helped me grasp global state management and API integration. ",
      completed: true,
    },
    {
      achievement:
        "One of my favorite projects was a recipe application with dynamic content. It allowed users to search for and save recipes, and I ensured that the UI was both responsive and user-friendly. Around the same time, I learned about routing with react-router-dom, which became crucial in all my future projects.",
      completed: true,
    },
    {
      achievement:
        "Building a hotel application with a booking system was a major challenge, but I enjoyed every step of it. I implemented user authentication with JWT, added a payment gateway using PayPal, and even used Firestore for data storage. This project helped me strengthen my knowledge of handling CRUD operations with a database.",
      completed: true,
    },
    {
      achievement:
        "To improve the user experience, I focused on creating reusable UI components and ensuring components were fully responsive. I also experimented with access control and routing protection, ensuring that only authorized users could access certain pages.",
      completed: true,
    },
    {
      achievement:
        "Lately, I’ve been working on adding even more advanced features. I want to implement a user feedback system to improve engagement, and I’m also exploring ways to add advanced search functionality to make filtering and finding data easier.",
      completed: false,
    },
    {
      achievement:
        "One of my next goals is to create a fully automated testing pipeline to improve the quality of my applications. Additionally, I’d love to integrate push notifications for bookings and create a mobile-first version of my hotel app to enhance accessibility. ",
      completed: false,
    },
    {
      achievement:
        "I also plan to work on an admin dashboard with analytics, which will help provide better insights into user behavior. Implementing in-app messaging for hotel guests is another feature I’d love to add. Lastly, I’m considering adding multilingual support to ensure my applications are more inclusive.",
      completed: false,
    },
  ];

  return (
    <div className="techstack-container">
      <h1>Skill Matrix</h1>
      <div className="tabs">
        <button
          className={activeTab === "Proficiency" ? "active-tab" : ""}
          onClick={() => setActiveTab("Proficiency")}
        >
          Proficiency
        </button>
        <button
          className={activeTab === "TechStack" ? "active-tab" : ""}
          onClick={() => setActiveTab("TechStack")}
        >
          TechStack
        </button>
        <button
          className={activeTab === "Achievements" ? "active-tab" : ""}
          onClick={() => setActiveTab("Achievements")}
        >
          Achievements
        </button>
      </div>

      {activeTab === "Proficiency" && (
        <div className="tech-icons-container">
          {techSkills.map((tech, index) => (
            <div className="tech-icon" key={index}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">{tech.icon}</div>
                  <div className="flip-card-back">
                    <h6>{tech.skill}</h6>
                    <h6>{tech.level}</h6>
                    <div className="progress-bar-container">
                      <div
                        className="progress-bar"
                        style={{ width: `${tech.percentage}%` }}
                      ></div>
                    </div>
                    <p>{tech.percentage}%</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "TechStack" && (
        <div className="tech-icons-container">
          {techSkills.map((tech, index) => (
            <div className="tech-icon" key={index}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">{tech.icon}</div>
                  <div className="flip-card-back">
                    <h6>{tech.skill}</h6>
                    <p>{tech.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "Achievements" && (
        <div className="achievements-list">
          <ul className="achievements-list-layout">
            {achievements.map((achievement, index) => (
              <li className="achievement-card" key={index}>
                <span>{achievement.achievement}</span>
                {achievement.completed ? (
                  <span className="completed">✔️</span>
                ) : (
                  <span className="incomplete">❌</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SkillMatrix;
