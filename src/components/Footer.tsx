import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Telegram } from "@mui/icons-material";
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://www.linkedin.com/in/kaleab-bezuayhu-5b5636305" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://t.me/kaleabbezuayhu/" target="_blank" rel="noreferrer"><Telegram/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://www.linkedin.com/in/kaleab-bezuayhu-5b5636305" target="_blank" rel="noreferrer">Kaleab Bezuayhu</a> with 💜</p>
    </footer>
  );
}

export default Footer;
