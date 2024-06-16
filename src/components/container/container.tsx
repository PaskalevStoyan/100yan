import React from "react";
import "./container.css";

type ContainerProps = {
  children: React.ReactNode;
};

export const Container = (props: ContainerProps) => {
  return <div className="container">{props.children}</div>;
};
