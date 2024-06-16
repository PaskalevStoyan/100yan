import React from "react";
import "./showcase.css";

export const Showcase = (props: any) => {
  return (
    <div className="showcase">
      <h2 className="mid-headings">Hello Wonderer!</h2>
      <h1 className="big-heading">I'm Stoyan Paskalev</h1>
      <p>I see you've entered my <span className="individual-word-style">realm!</span></p>
    </div>
  );
};
