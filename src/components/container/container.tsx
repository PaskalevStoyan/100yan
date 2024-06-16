import React from "react";
import "./container.css";
export const Container = (props: any) => {
  return <div className="container">{props.children}</div>;
};
