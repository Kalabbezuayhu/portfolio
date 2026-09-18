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
<<<<<<< HEAD
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: easeOut }
=======
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: easeOut }
>>>>>>> 908fb09d820e48a2e239e69236b950bd9c9c2c51
    },
  };

  return (
<<<<<<< HEAD
    <div id="timeline" style={{ position: "relative" }}>
      <div className="items-container" style={{ position: "relative", zIndex: 1 }}>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="timeline-heading"
=======
    <div id="timeline" style={{ position: "relative", overflow: "hidden" }}>
      {/* Floating animated background orbs */}
      <motion.div
        animate={{ y: [0, 25, 0], x: [0, 15, 0], rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: 140,
          height: 140,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #6c63ff88, #ff658488)",
          top: "10%",
          left: "12%",
          filter: "blur(25px)",
          zIndex: 0,
        }}
      />
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, -20, 0], rotate: [0, -15, 15, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #00c85188, #ffbb3388)",
          top: "55%",
          left: "70%",
          filter: "blur(35px)",
          zIndex: 0,
        }}
      />
      <motion.div
        animate={{ y: [0, 15, 0], x: [0, -10, 0], rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: 100,
          height: 100,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #ff658488, #6c63ff88)",
          top: "30%",
          left: "45%",
          filter: "blur(20px)",
          zIndex: 0,
        }}
      />

      <div className="items-container" style={{ position: "relative", zIndex: 1 }}>
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            fontSize: "2.8rem",
            marginBottom: "3rem",
            background: "linear-gradient(90deg, #6c63ff, #00c851, #ff6584)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
>>>>>>> 908fb09d820e48a2e239e69236b950bd9c9c2c51
        >
          About Me
        </motion.h1>

        <VerticalTimeline>
          {/* Personal Intro */}
          <VerticalTimelineElement
<<<<<<< HEAD
            date="Hello!"
=======
            contentStyle={{
              background: "linear-gradient(135deg, #6c63ff, #ff6584)",
              color: "#fff",
              borderRadius: "16px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
            }}
            contentArrowStyle={{ borderRight: '7px solid #6c63ff' }}
            date="Hello!"
            iconStyle={{ background: '#fff', color: '#6c63ff' }}
>>>>>>> 908fb09d820e48a2e239e69236b950bd9c9c2c51
            icon={<FontAwesomeIcon icon={faUser} />}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeSlideUp}
<<<<<<< HEAD
            >
              <h3>Hi, I'm Kaleab Bezuayhu</h3>
              <p>
                Full-stack developer with a B.Sc. in Computer Science and a B.Sc. in Software Engineering. I design and build production web applications end-to-end — from architecture to deployment — including a live financial dashboard tracking the Ethiopian stock market and a Telegram bot serving real users on the Ethio-Djibouti Railway.
=======
              whileHover={{ scale: 1.05 }}
            >
              <h3>Hi, I'm Kaleb Bezuayhu</h3>
              <p>
                I’m a passionate software developer and final-year Software Engineering 
                student at Addis Ababa University, with a B.Sc. in Computer Science 
                from St. Mary’s University. I love creating functional, beautiful, 
                and scalable digital experiences.
>>>>>>> 908fb09d820e48a2e239e69236b950bd9c9c2c51
              </p>
            </motion.div>
          </VerticalTimelineElement>

          {/* Education 1 */}
          <VerticalTimelineElement
<<<<<<< HEAD
            date="2021 - 2025"
=======
            contentStyle={{
              background: "linear-gradient(135deg, #00c851, #33b5e5)",
              color: "#fff",
              borderRadius: "16px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
            }}
            contentArrowStyle={{ borderRight: '7px solid #00c851' }}
            date="2021 - 2025"
            iconStyle={{ background: '#fff', color: '#00c851' }}
>>>>>>> 908fb09d820e48a2e239e69236b950bd9c9c2c51
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeSlideUp}
<<<<<<< HEAD
            >
              <h3>B.Sc. Computer Science</h3>
              <h4>St. Mary’s University · 2021–2025</h4>
              <p>
                Networking, systems administration, database design, and software fundamentals
=======
              whileHover={{ scale: 1.05 }}
            >
              <h3>B.Sc. Computer Science</h3>
              <h4>St. Mary’s University</h4>
              <p>
                Specialized in software development, database design, and frontend technologies.
>>>>>>> 908fb09d820e48a2e239e69236b950bd9c9c2c51
              </p>
            </motion.div>
          </VerticalTimelineElement>

          {/* Education 2 */}
          <VerticalTimelineElement
<<<<<<< HEAD
            date="2022 - 2026"
=======
            contentStyle={{
              background: "linear-gradient(135deg, #33b5e5, #00c851)",
              color: "#fff",
              borderRadius: "16px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
            }}
            contentArrowStyle={{ borderRight: '7px solid #33b5e5' }}
            date="2022 - Present"
            iconStyle={{ background: '#fff', color: '#33b5e5' }}
>>>>>>> 908fb09d820e48a2e239e69236b950bd9c9c2c51
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeSlideUp}
<<<<<<< HEAD
            >
              <h3>B.Sc. Software Engineering</h3>
              <h4>Addis Ababa University · 2022–2026</h4>
              <p>
                Software architecture, DevOps, cloud infrastructure, and AI/ML, with hands-on system design projects.
=======
              whileHover={{ scale: 1.05 }}
            >
              <h3>B.Sc. Software Engineering</h3>
              <h4>Addis Ababa University</h4>
              <p>
                Focused on DevOps, Cloud, and AI/ML engineering with hands-on system design projects.
>>>>>>> 908fb09d820e48a2e239e69236b950bd9c9c2c51
              </p>
            </motion.div>
          </VerticalTimelineElement>

          {/* Skills */}
          <VerticalTimelineElement
<<<<<<< HEAD
            date="Skills"
=======
            contentStyle={{
              background: "linear-gradient(135deg, #ffbb33, #ff4444)",
              color: "#fff",
              borderRadius: "16px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
            }}
            contentArrowStyle={{ borderRight: '7px solid #ffbb33' }}
            date="Skills"
            iconStyle={{ background: '#fff', color: '#ffbb33' }}
>>>>>>> 908fb09d820e48a2e239e69236b950bd9c9c2c51
            icon={<FontAwesomeIcon icon={faLaptopCode} />}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeSlideUp}
<<<<<<< HEAD
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
=======
              whileHover={{ scale: 1.05 }}
            >
              <h3>Technical Skills</h3>
              <p>
                JavaScript, TypeScript, React, Next.js, Tailwind, Framer, Vite, 
                Angular, Vue.js, Node.js, PHP, Python, Java, Kotlin, Swift, Flutter, 
                PostgreSQL, MySQL, Firebase, REST APIs.
              </p>
>>>>>>> 908fb09d820e48a2e239e69236b950bd9c9c2c51
            </motion.div>
          </VerticalTimelineElement>

          {/* Hobbies */}
          <VerticalTimelineElement
<<<<<<< HEAD
            date="Hobbies"
=======
            contentStyle={{
              background: "linear-gradient(135deg, #33b5e5, #00c851)",
              color: "#fff",
              borderRadius: "16px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
            }}
            contentArrowStyle={{ borderRight: '7px solid #33b5e5' }}
            date="Hobbies"
            iconStyle={{ background: '#fff', color: '#33b5e5' }}
>>>>>>> 908fb09d820e48a2e239e69236b950bd9c9c2c51
            icon={<FontAwesomeIcon icon={faStar} />}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeSlideUp}
<<<<<<< HEAD
=======
              whileHover={{ scale: 1.05 }}
>>>>>>> 908fb09d820e48a2e239e69236b950bd9c9c2c51
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
