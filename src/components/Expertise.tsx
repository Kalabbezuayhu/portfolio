import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faServer, faCogs, faDatabase } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

// Tech stacks for the 4 main expertise categories
const labelsFullStack = [
  "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Node.js", "HTML5", "CSS3"
];

const labelsMobile = [
  "Flutter", "React Native", "Kotlin", "Swift", "REST APIs"
];

const labelsAPI = [
  "Node.js", "Express", "REST APIs", "Postman", "Git"
];

const labelsDatabase = [
  "PostgreSQL", "MySQL", "MongoDB", "SQL", "Firebase"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>

        {/* 4 Main Categories */}
        <div className="skills-grid">

          {/* Full Stack Web Development */}
          <div className="skill">
            <FontAwesomeIcon icon={faCogs} size="3x" />
            <h3>Full Stack Web Development</h3>
            <p>
              I build full-featured web applications with modern tools and frameworks,
              focusing on clean architecture, scalability, and performance.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFullStack.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Mobile App Development */}
          <div className="skill">
            <FontAwesomeIcon icon={faMobileAlt} size="3x" />
            <h3>Mobile App Development</h3>
            <p>
              I create Android and iOS applications with responsive UI, API integration,
              and seamless user experiences using Flutter, Kotlin, and Swift.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsMobile.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* API Development & Integration */}
          <div className="skill">
            <FontAwesomeIcon icon={faServer} size="3x" />
            <h3>API Development & Integration</h3>
            <p>
              I design and develop RESTful and GraphQL APIs to connect frontends and backends,
              ensuring secure, efficient, and maintainable integrations.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsAPI.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Database Management */}
          <div className="skill">
            <FontAwesomeIcon icon={faDatabase} size="3x" />
            <h3>Database Management</h3>
            <p>
              I have experience designing, implementing, and maintaining 
              relational and NoSQL databases such as PostgreSQL, MySQL, 
              and MongoDB. I ensure data integrity, efficiency, and scalability.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsDatabase.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Expertise;
