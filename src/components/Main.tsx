import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import Article from '@mui/icons-material/Article';
import profile_pic from '../assets/images/IMG_1906_2.png';

import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profile_pic} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/sofiakwok" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sofiakwok/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:sofiakwok8@gmail.com" target="_blank" rel="noreferrer"><MailIcon/></a>
            <a href="https://drive.google.com/file/d/1ioJZOdRj4lQY6y68mH5pT8S_YvrGLlZZ/view?usp=sharing" target="_blank" rel="noreferrer"><Article/></a>
          </div>
          <h1>Sofia Kwok</h1>
          <p>Hello! I am a robotics engineer currently working at <a target='_blank' rel='noopener noreferrer' 
            href="https://www.starfishspace.com/"> <u>Starfish Space</u>, </a>
            an in-orbit satellite servicing startup in Seattle.</p>
          <p>I have a Master of Science in Robotics from Carnegie Mellon University and a Bachelor of Science in Mechanical Engineering from the California Institute of Technology. 
            My past experience includes building a bipedal robot, designing a percussive drill for lunar regolith, and creating robot arms that can solve jigsaw puzzles and play Bananagrams.
            For more details, refer to my 
            <a target='_blank' rel='noopener noreferrer' 
            href="https://drive.google.com/file/d/1ioJZOdRj4lQY6y68mH5pT8S_YvrGLlZZ/view?usp=sharing"> <u>CV</u>.</a>
            </p>
          <div className="mobile_social_icons">
            <a href="https://github.com/sofiakwok" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sofiakwok/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:sofiakwok8@gmail.com" target="_blank" rel="noreferrer"><MailIcon/></a>
            <a href="https://drive.google.com/file/d/1ioJZOdRj4lQY6y68mH5pT8S_YvrGLlZZ/view?usp=sharing" target="_blank" rel="noreferrer"><Article/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;