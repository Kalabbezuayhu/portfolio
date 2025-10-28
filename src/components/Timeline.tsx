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
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: easeOut }
    },
  };

  return (
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
        >
          About Me
        </motion.h1>

        <VerticalTimeline>
          {/* Personal Intro */}
          <VerticalTimelineElement
            contentStyle={{
              background: "linear-gradient(135deg, #6c63ff, #ff6584)",
              color: "#fff",
              borderRadius: "16px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
            }}
            contentArrowStyle={{ borderRight: '7px solid #6c63ff' }}
            date="Hello!"
            iconStyle={{ background: '#fff', color: '#6c63ff' }}
            icon={<FontAwesomeIcon icon={faUser} />}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeSlideUp}
              whileHover={{ scale: 1.05 }}
            >
              <h3>Hi, I'm Kaleb Bezuayhu</h3>
              <p>
                I’m a passionate software developer and final-year Software Engineering 
                student at Addis Ababa University, with a B.Sc. in Computer Science 
                from St. Mary’s University. I love creating functional, beautiful, 
                and scalable digital experiences.
              </p>
            </motion.div>
          </VerticalTimelineElement>

          {/* Education 1 */}
          <VerticalTimelineElement
            contentStyle={{
              background: "linear-gradient(135deg, #00c851, #33b5e5)",
              color: "#fff",
              borderRadius: "16px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
            }}
            contentArrowStyle={{ borderRight: '7px solid #00c851' }}
            date="2021 - 2025"
            iconStyle={{ background: '#fff', color: '#00c851' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeSlideUp}
              whileHover={{ scale: 1.05 }}
            >
              <h3>B.Sc. Computer Science</h3>
              <h4>St. Mary’s University</h4>
              <p>
                Specialized in software development, database design, and frontend technologies.
              </p>
            </motion.div>
          </VerticalTimelineElement>

          {/* Education 2 */}
          <VerticalTimelineElement
            contentStyle={{
              background: "linear-gradient(135deg, #33b5e5, #00c851)",
              color: "#fff",
              borderRadius: "16px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
            }}
            contentArrowStyle={{ borderRight: '7px solid #33b5e5' }}
            date="2022 - Present"
            iconStyle={{ background: '#fff', color: '#33b5e5' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeSlideUp}
              whileHover={{ scale: 1.05 }}
            >
              <h3>B.Sc. Software Engineering</h3>
              <h4>Addis Ababa University</h4>
              <p>
                Focused on DevOps, Cloud, and AI/ML engineering with hands-on system design projects.
              </p>
            </motion.div>
          </VerticalTimelineElement>

          {/* Skills */}
          <VerticalTimelineElement
            contentStyle={{
              background: "linear-gradient(135deg, #ffbb33, #ff4444)",
              color: "#fff",
              borderRadius: "16px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
            }}
            contentArrowStyle={{ borderRight: '7px solid #ffbb33' }}
            date="Skills"
            iconStyle={{ background: '#fff', color: '#ffbb33' }}
            icon={<FontAwesomeIcon icon={faLaptopCode} />}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeSlideUp}
              whileHover={{ scale: 1.05 }}
            >
              <h3>Technical Skills</h3>
              <p>
                JavaScript, TypeScript, React, Next.js, Tailwind, Framer, Vite, 
                Angular, Vue.js, Node.js, PHP, Python, Java, Kotlin, Swift, Flutter, 
                PostgreSQL, MySQL, Firebase, REST APIs.
              </p>
            </motion.div>
          </VerticalTimelineElement>

          {/* Hobbies */}
          <VerticalTimelineElement
            contentStyle={{
              background: "linear-gradient(135deg, #33b5e5, #00c851)",
              color: "#fff",
              borderRadius: "16px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
            }}
            contentArrowStyle={{ borderRight: '7px solid #33b5e5' }}
            date="Hobbies"
            iconStyle={{ background: '#fff', color: '#33b5e5' }}
            icon={<FontAwesomeIcon icon={faStar} />}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeSlideUp}
              whileHover={{ scale: 1.05 }}
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
