import React from "react";
import githubIcon from "./Images/github-6-512.png";
import emailIcon from "./Images/Gmail_Logo_White_512px.png";

function LinkBio() {
  const githubLink = "https://github.com/skaranjan";
  const email = "skaranja654@gmail.com";

  return (
    <div
      style={{
        position: "fixed",
        bottom: "15px",
        fontFamily: "Serif",
        fontSize: "18px",
      }}
    >
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <img
          src={githubIcon}
          alt="GitHub Icon"
          style={{ width: "24px", height: "24px" }}
        />
      </a>

      <span style={{ color: "white" }}> | </span>

      <a href={`mailto:${email}`}>
        <img
          src={emailIcon}
          alt="Email Icon"
          style={{ width: "24px", height: "24px" }}
        />
      </a>
    </div>
  );
}

export default LinkBio;
