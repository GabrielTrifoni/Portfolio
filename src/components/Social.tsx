import React from "react";
import linkedin from "../assets/linkedin-icon.png"
import github from"../assets/github-icon.png"
import youtube from"../assets/youtube-icon.png"
const Social: React.FC = () => {
  return (
    <>
      <div>
        <a href="https://www.linkedin.com/in/gabriel-trifoni-767932245/">
          <img alt="" src={linkedin} />
        </a>
        <a href="https://github.com/GabrielTrifoni/">
          <img alt="" src={github} />
        </a>
        <a href="https://www.youtube.com/@gabrieltrifoni">
          <img alt="" src={youtube} />
        </a>
      </div>
    </>
  );
};

export default Social;
