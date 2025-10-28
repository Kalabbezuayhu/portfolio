import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Telegram } from "@mui/icons-material";
import '../assets/styles/Main.scss';

// Import avatar image from local assets
import avatar from "../assets/images/image.jpg"; // <-- replace with your actual file name

function Main() {
  return (
    <div id="home" className="container"> {/* id="home" required for nav -> main */}
      <div className="about-section">
        <div className="image-wrapper">
          <img 
            src={avatar} 
            alt="Avatar" 
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Kalabbezuayhu" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://t.me/kaleabbezuayhu/" target="_blank" rel="noreferrer"><Telegram/></a>
          </div>
          <h1>Kalab Bezuayhu</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Kalabbezuayhu" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://t.me/kaleabbezuayhu/" target="_blank" rel="noreferrer"><Telegram/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
