import React from "react";

function LinkBio() {
  const githubLink = "https://github.com/skaranjan";
  const email = "skaranja654@gmail.com";

  return (
    <div
      style={{
        position: "fixed",
        bottom: "18px",
        fontFamily: "Serif",
        fontSize: "18px",
      }}
    >
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <span> | </span>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  );
}

export default LinkBio;
