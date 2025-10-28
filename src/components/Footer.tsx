import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Telegram } from "@mui/icons-material";
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Kalabbezuayhu" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://t.me/kaleabbezuayhu/" target="_blank" rel="noreferrer"><Telegram/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/Kalabbezuayhu" target="_blank" rel="noreferrer">kalab Bezuayhu</a> with 💜</p>
    </footer>
  );
}

export default Footer;