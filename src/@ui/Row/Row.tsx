import React from "react";
import "./Row.scss";

type RowType = {
  children: React.ReactNode;
  justify?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  align?: "center" | "flex-start" | "flex-end";
};

const Row = ({ children, justify, align }: RowType) => {
  let RowClassName = "row";
  RowClassName += !!justify ? ` justify-${justify}` : "";
  RowClassName += !!align ? ` align-${align}` : "";

  return <div className={RowClassName}>{children}</div>;
};
export default Row;
