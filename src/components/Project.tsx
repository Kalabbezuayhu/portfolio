
import React from "react";
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock9.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';
import GitHubIcon from '@mui/icons-material/GitHub';

function Project() {
    return (
        <div className="projects-container" id="projects">
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

            </div>
        </div>
    );
}

export default Project;
