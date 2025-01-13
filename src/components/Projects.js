import React, { useState } from "react";
import "./Projects.css";
import Assessments from "./Assessments";

const projectData = [
  {
    title: "Employee App",
    description: "A web application for managing employee records and tasks...",
    techStack: ["Reactjs"],
    keyFeatures: [
      "User authentication and role-based access control.",
      "CRUD functionality for employee management.",
      "Position assignment and info-tracking system.",
    ],
    challenges: "Ensuring smooth interaction between storing info...",
    repoLink: "https://github.com/MylasJacob123/Upgraded-Employee-App",
  },
  {
    title: "Weather App",
    description: "A weather forecasting app that provides real-time weather updates...",
    techStack: ["React", "JavaScript", "CSS", "Weather API"],
    keyFeatures: [
      "Real-time weather updates based on location or city search.",
      "Displays weather details including temperature, humidity...",
      "Simple and responsive UI for ease of use.",
    ],
    challenges: "Handling asynchronous data fetching from the weather API...",
    repoLink: "https://github.com/MylasJacob123/The-Weather-App",
  },
  {
    title: "Todo App",
    description: "A task management app that allows users to create, update, and delete tasks...",
    techStack: ["React", "CSS", "JavaScript"],
    keyFeatures: [
      "Add, update, and delete tasks.",
      "Mark tasks as completed or incomplete.",
      "Persistent task storage using local storage.",
    ],
    challenges: "Managing state effectively with React hooks...",
    repoLink: "https://github.com/MylasJacob123/TODO-LIST_APP",
  },
];

const groupProjects = [
  {
    title: "Restaurant App (Reservation System)",
    description: "A web application for restaurant reservations...",
    techStack: ["React", "Node.js", "Express", "MongoDB", "PayPal API"],
    keyFeatures: [
      "Table reservation system for users to book spots.",
      "PayPal integration for secure payment processing.",
      "Real-time availability of tables and reservations.",
    ],
    challenges: "Integrating PayPal for payment processing...",
    repoLink: "https://github.com/MylasJacob123/RESTAURANT-RESERVATION-APPLICATION-BACKEND",
  },
];

function Projects() {
  const [view, setView] = useState("individual");

  const renderProjectCards = (projects) => {
    return projects.map((project, index) => (
      <div key={index} className="card">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul>
          {project.keyFeatures.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
        <p>
          <strong>Tech Stack:</strong> {project.techStack.join(", ")}
        </p>
        <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
          View Repo
        </a>
      </div>
    ));
  };

  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-navigation">
        <button
          className={`nav-button ${view === "individual" ? "active" : ""}`}
          onClick={() => setView("individual")}
        >
          Individual Projects
        </button>
        <button
          className={`nav-button ${view === "group" ? "active" : ""}`}
          onClick={() => setView("group")}
        >
          Group Projects
        </button>
        <button
          className={`nav-button ${view === "assessments" ? "active" : ""}`}
          onClick={() => setView("assessments")}
        >
          Assessments
        </button>
      </div>
      <div className="projects-list">
        {view === "individual" && (
          <>
            <h2>Individual Projects</h2>
            {renderProjectCards(projectData)}
          </>
        )}
        {view === "group" && (
          <>
            <h2>Group Projects</h2>
            {renderProjectCards(groupProjects)}
          </>
        )}
        {view === "assessments" && <Assessments />}
      </div>
    </div>
  );
}

export default Projects;
