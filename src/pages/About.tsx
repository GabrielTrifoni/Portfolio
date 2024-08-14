import React from "react";
import "../styles/About.css";
import photo from "../assets/foto.jpg";

const About: React.FC = () => {
  const description: String = "My journey in computing began in high school, and now, in my Computer Science course, I’m diving into projects that challenge my limits and expand my skills. Each new challenge, from complex applications to working with emerging technologies, has been an opportunity to refine my critical thinking and problem-solving abilities. Today, I focus on expanding my knowledge and applying everything I've learned to projects that make a difference.";

  return (
    <>
      <div className="about">
        <div className="title">About Me!</div>
        <div className="sec">
          <div className="photo"><img src={photo} alt="About Me Photo" /></div>
          <div className="description">{description}</div>
        </div>
      </div>
    </>
  );
};

export default About;
