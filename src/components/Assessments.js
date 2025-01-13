import React from "react";
import "./Assessments.css";

function Assessments() {
  return (
    <div className="assessments">
        <h2>Assessments</h2>
        <div className="assessment-card">
          <h3>UI Challenge</h3>
          <a
            href="https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Challenge
          </a>
          <p>Date Completed: July 10, 2025</p>
          <p>Grade/Score: 70% - Above average.</p>
          <p>Notes: Demonstrated strong attention to detail in design, but room for improvement in responsiveness.</p>
        </div>
        <div className="assessment-card">
          <h3>React Native</h3>
          <p>Date Completed: December 2024</p>
          <p>Grade/Score: N/A (Completed an external course).</p>
          <p>Notes: Course was self-paced; focused on developing mobile applications using React Native.</p>
        </div>
    </div>
  )
}
export default Assessments;