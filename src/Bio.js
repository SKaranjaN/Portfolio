import React from "react";

function Bio() {
  const bioStyle = {
    fontFamily: "Georgia",
    fontSize: "20px",
    color: "#fff",
    textAlign: "center",
    maxWidth: "950px",
    margin: "0 auto",
    paddingTop: "20px",
  };

  return (
    <div style={bioStyle}>
      <p>
        I'm a dynamic software engineer proficient in JavaScript, HTML, CSS,
        React, Python, Flask, and SQL. With expertise in both front-end and
        back-end development, I create immersive user experiences and build
        robust web solutions. Let's collaborate and transform your digital
        vision into reality.
      </p>
    </div>
  );
}

export default Bio;
