
import React from "react";
<<<<<<< HEAD
import Chip from '@mui/material/Chip';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import tickerImg from '../assets/images/ticker.png';
import railwayImg from '../assets/images/railway-bot.png';
import pylionImg from '../assets/images/pylion.png';
import viecareImg from '../assets/images/viecare.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

interface CompactProject {
    title: string;
    description: string;
    stack: string[];
    status: 'Live' | 'In development';
    image: string;
    link: string;
    linkLabel: string;
}

const compactProjects: CompactProject[] = [
    {
        title: "Ticker.et — Real-Time Ethiopian Stock Market Dashboard",
        description: "Live dashboard for ESX stock prices with real-time updates, charts, search, favorites, XLSX export, and a news feed. Built solo to solve the lack of a single place to track Ethiopian stock prices.",
        stack: ["React (Vite)", "Node.js", "Tailwind CSS", "WebSockets", "Scheduled data refresh"],
        status: "Live",
        image: tickerImg,
        link: "https://ticker.et/",
        linkLabel: "View Website"
    },
    {
        title: "Ethio-Djibouti Railway Seat Checker Bot",
        description: "Free Telegram bot that checks live seat availability across all 15 stations on the Ethio-Djibouti Railway before booking. Built solo to save travelers from the slow official booking flow.",
        stack: ["Node.js", "Telegram Bot API", "Web scraping", "Scheduled checks"],
        status: "Live",
        image: railwayImg,
        link: "https://t.me/EDRSeatsBot",
        linkLabel: "Open @EDRSeatsBot"
    },
    {
        title: "Pylion Trading PLC — Corporate Website",
        description: "Corporate site for a medical device importer with a hero carousel, product catalog, blog, and WhatsApp-integrated quote system. Built solo; live and generating client leads.",
        stack: ["Next.js", "React", "Tailwind CSS", "React Hook Form"],
        status: "Live",
        image: pylionImg,
        link: "https://www.pyliontrading.com/",
        linkLabel: "View Website"
    },
    {
        title: "VieCare Medical PLC — Healthcare Solutions Website",
        description: "Large multi-page healthcare site with services, project showcase, blog, and dual consultation/contact forms. Built solo, including full site architecture.",
        stack: ["Next.js", "React", "Tailwind CSS", "MDX"],
        status: "In development",
        image: viecareImg,
        link: "https://viecare.vercel.app/",
        linkLabel: "View Website"
    },
    {
        title: "Digital Services Company",
        description: "Developed and delivered a range of digital solutions including web development, mobile apps, and creative design services focused on user-friendly and engaging experiences.",
        stack: ["React", "JavaScript", "HTML5", "CSS3", "UI/UX Design"],
        status: "Live",
        image: mock10,
        link: "https://Habeshabytes.netlify.app",
        linkLabel: "View Website"
    }
];
=======
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock9.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
>>>>>>> 908fb09d820e48a2e239e69236b950bd9c9c2c51

function Project() {
    return (
        <div className="projects-container" id="projects">
<<<<<<< HEAD
            <h1>Projects</h1>
            <div className="projects-grid">
                {compactProjects.map((project, index) => (
                    <div className="project compact-card" key={index}>
                        <a href={project.link} target="_blank" rel="noreferrer" className="card-image-link">
                            <img src={project.image} className="zoom" alt={project.title} />
                        </a>
                        <div className="card-body">
                            <div className="card-header">
                                <a href={project.link} target="_blank" rel="noreferrer">
                                    <h2>{project.title}</h2>
                                </a>
                                <span className={`status-badge ${project.status === 'Live' ? 'live' : 'in-dev'}`}>
                                    <span className="status-dot"></span>
                                    {project.status}
                                </span>
                            </div>
                            <p className="card-description">{project.description}</p>
                            <div className="card-stack">
                                {project.stack.map((tech, idx) => (
                                    <Chip key={idx} className="chip" label={tech} />
                                ))}
                            </div>
                            <div className="project-link-group">
                                <div className="project-link">
                                    <OpenInNewIcon style={{ verticalAlign: 'middle', marginRight: '6px', fontSize: '1.1rem' }} />
                                    <a href={project.link} target="_blank" rel="noreferrer">
                                        {project.linkLabel}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
=======
            <h1>Personal Projects</h1>
            <div className="projects-grid">

                <div className="project">
                    <a href="https://Habeshabytes.netlify.app" target="_blank" rel="noreferrer">
                        <img src={mock10} className="zoom" alt="thumbnail" width="100%"/>
                    </a>
                    <a href="https://Habeshabytes.netlify.app" target="_blank" rel="noreferrer">
                        <h2>Digital Services Company</h2>
                    </a>
                    <p>Developed and delivered a range of digital solutions including 
                        web development, mobile apps, and creative design services. Focused 
                        on building user-friendly, interactive, and visually engaging experiences 
                        for clients across different industries.</p>
                    <div className="project-link">
                        <GitHubIcon style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                        <a href="https://github.com/Studio-III-3/Portfolio-main" target="_blank" rel="noreferrer">
                            View Project
                        </a>
                    </div>
                </div>

            <div className="project">
                <a href="addis-e-learning.vercel.app/" target="_blank" rel="noreferrer">
                    <img src={mock09} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="addis-e-learning.vercel.app" target="_blank" rel="noreferrer">
                    <h2>Addis-E-learning</h2>
                </a>
                <div>
                  <p>Designed, developed, and launched Addis Learning, a 
                    responsive e-learning website using HTML5, CSS3, Bootstrap 5, 
                    and JavaScript. The platform allows learners to explore courses, register, and access interactive 
                    lessons, while instructors can apply to share their expertise online.</p>
                    <div className="project-link">
                        <GitHubIcon style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                        <a href="https://github.com/Kalabbezuayhu/addis-E-learning" target="_blank" rel="noreferrer">
                            View Project
                        </a>
                    </div>
                </div>
            </div>

                <div className="project">
                    <a href="https://github.com/Studio-III-3/Studio-3" target="_blank" rel="noreferrer">
                        <img src={mock08} className="zoom" alt="thumbnail" width="100%"/>
                    </a>
                    <a href="https://github.com/Studio-III-3/Studio-3" target="_blank" rel="noreferrer">
                        <h2>Studio 3 IT support</h2>
                    </a>
                    <p>Studio 3 IT Support provides fast and reliable IT solutions, including troubleshooting, 
                        system maintenance, software setup, and network support for individuals and businesses.</p>
                    <div className="project-link">
                        <GitHubIcon style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                        <a href="https://github.com/Studio-III-3/Studio-3" target="_blank" rel="noreferrer">
                            View Project
                        </a>
                    </div>
                </div>

                <div className="project">
                    <a href="https://github.com/Kalabbezuayhu/portfolio" target="_blank" rel="noreferrer">
                        <img src={mock07} className="zoom" alt="thumbnail" width="100%"/>
                    </a>
                    <a href="https://github.com/Kalabbezuayhu/portfolio" target="_blank" rel="noreferrer">
                        <h2>portfolio</h2>
                    </a>
                    <p>modern, interactive portfolio</p>
                    <div className="project-link">
                        <GitHubIcon style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                        <a href="https://github.com/Kalabbezuayhu/portfolio" target="_blank" rel="noreferrer">
                            View Project
                        </a>
                    </div>
                </div>
                <div className="project">
                    <a href="https://kaleab-b.netlify.app" target="_blank" rel="noreferrer">
                        <img src={mock06} className="zoom" alt="thumbnail" width="100%"/>
                    </a>
                    <a href="https://kaleab-b.netlify.app" target="_blank" rel="noreferrer">
                        <h2>ui/ux</h2>
                    </a>
                    <p>intuitive and engaging user interfaces that focus on a seamless user experience.</p>
                </div>

>>>>>>> 908fb09d820e48a2e239e69236b950bd9c9c2c51
            </div>
        </div>
    );
}

export default Project;
