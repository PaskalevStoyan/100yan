import React from "react";
import "./showcase.css";

export const Showcase = (props: any) => {
  return (
    <div className="showcase">
      <h1 className="big-heading">Hi there wonderer!</h1>
      <p>I see you've entered my <span className="individual-word-style">realm!</span></p>
    </div>
  );
};
