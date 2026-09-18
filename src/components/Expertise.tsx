import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<<<<<<< HEAD
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
=======
import { faMobileAlt, faServer, faPalette, faCogs, faDatabase,faVial } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

// Tech stacks for each expertise
const labelsFullStack = [
  "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Python", "SQL", "PostgreSQL", "Postman"
];

const labelsMobile = [
  "Kotlin", "Swift", "Flutter", "React Native", "Expo", "REST APIs"
];

const labelsAPI = [
  "Git", "Express", "Node.js", "MongoDB"
];

const labelsUIUX = [
  "Figma", "Tailwind CSS", "Framer Motion"
];

const labelsAI = [
  "Git, GitHub, GitLab, Unit"
];

const labelsDevOps = [
  "MySQL, MongoDB, hpMyAdmin, MySQL Workbench"
>>>>>>> 908fb09d820e48a2e239e69236b950bd9c9c2c51
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
<<<<<<< HEAD

        {/* 4 Main Categories */}
=======
>>>>>>> 908fb09d820e48a2e239e69236b950bd9c9c2c51
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

<<<<<<< HEAD
          {/* Database Management */}
=======
          {/* UI/UX Design */}
          <div className="skill">
            <FontAwesomeIcon icon={faPalette} size="3x" />
            <h3>UI/UX Design</h3>
            <p>
              I craft visually appealing and user-centric designs that balance aesthetics
              and usability, ensuring engaging digital experiences.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsUIUX.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* AI & Machine Learning */}
          <div className="skill">
            <FontAwesomeIcon icon={faVial} size="3x" />
            <h3>Software Testing & Quality Assurance</h3>
            <p>
              I develop and execute test plans, automated test scripts,
               and debugging procedures to ensure software reliability and performance.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsAI.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* DevOps & Cloud Infrastructure */}
>>>>>>> 908fb09d820e48a2e239e69236b950bd9c9c2c51
          <div className="skill">
            <FontAwesomeIcon icon={faDatabase} size="3x" />
            <h3>Database Management</h3>
            <p>
              I have experience designing, implementing, and maintaining 
<<<<<<< HEAD
              relational and NoSQL databases such as PostgreSQL, MySQL, 
=======
              relational and NoSQL databases such as MySQL, 
>>>>>>> 908fb09d820e48a2e239e69236b950bd9c9c2c51
              and MongoDB. I ensure data integrity, efficiency, and scalability.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
<<<<<<< HEAD
              {labelsDatabase.map((label, index) => (
=======
              {labelsDevOps.map((label, index) => (
>>>>>>> 908fb09d820e48a2e239e69236b950bd9c9c2c51
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
