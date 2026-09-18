import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap, faLaptopCode, faStar } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion, easeOut } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  // Fade + slide-up animation
  const fadeSlideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: easeOut }
    },
  };

  return (
    <div id="timeline" style={{ position: "relative" }}>
      <div className="items-container" style={{ position: "relative", zIndex: 1 }}>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="timeline-heading"
        >
          About Me
        </motion.h1>

        <VerticalTimeline>
          {/* Personal Intro */}
          <VerticalTimelineElement
            date="Hello!"
            icon={<FontAwesomeIcon icon={faUser} />}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeSlideUp}
            >
              <h3>Hi, I'm Kaleab Bezuayhu</h3>
              <p>
                Full-stack developer with a B.Sc. in Computer Science and a B.Sc. in Software Engineering. I design and build production web applications end-to-end — from architecture to deployment — including a live financial dashboard tracking the Ethiopian stock market and a Telegram bot serving real users on the Ethio-Djibouti Railway.
              </p>
            </motion.div>
          </VerticalTimelineElement>

          {/* Education 1 */}
          <VerticalTimelineElement
            date="2021 - 2025"
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeSlideUp}
            >
              <h3>B.Sc. Computer Science</h3>
              <h4>St. Mary’s University · 2021–2025</h4>
              <p>
                Networking, systems administration, database design, and software fundamentals
              </p>
            </motion.div>
          </VerticalTimelineElement>

          {/* Education 2 */}
          <VerticalTimelineElement
            date="2022 - 2026"
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeSlideUp}
            >
              <h3>B.Sc. Software Engineering</h3>
              <h4>Addis Ababa University · 2022–2026</h4>
              <p>
                Software architecture, DevOps, cloud infrastructure, and AI/ML, with hands-on system design projects.
              </p>
            </motion.div>
          </VerticalTimelineElement>

          {/* Skills */}
          <VerticalTimelineElement
            date="Skills"
            icon={<FontAwesomeIcon icon={faLaptopCode} />}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeSlideUp}
            >
              <h3>Technical Skills</h3>
              <div className="timeline-skills-tiers">
                <div className="timeline-tier core">
                  <span className="tier-tag">CORE STACK</span>
                  <p className="tier-items">React, Next.js, Node.js, JavaScript, TypeScript, Tailwind CSS</p>
                </div>
                <div className="timeline-tier familiar">
                  <span className="tier-tag">ALSO FAMILIAR WITH</span>
                  <p className="tier-items">HTML5, CSS3, Python, SQL, PostgreSQL, MySQL, Kotlin, Swift, Flutter, Firebase, Git, Express, MongoDB, REST APIs, Postman</p>
                </div>
              </div>
            </motion.div>
          </VerticalTimelineElement>

          {/* Hobbies */}
          <VerticalTimelineElement
            date="Hobbies"
            icon={<FontAwesomeIcon icon={faStar} />}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeSlideUp}
            >
              <h3>Interests & Hobbies</h3>
              <p>Traveling, Coding, Music, Sports, Gaming.</p>
            </motion.div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
