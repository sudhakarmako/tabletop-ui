import React from "react";
import "./Row.scss";

const Row = ({ children }: { children: React.ReactNode }) => {
  return <div className="row">{children}</div>;
};
export default Row;
