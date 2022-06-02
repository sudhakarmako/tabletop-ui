import { ReactNode } from "react";
import "./ButtonGroup.scss";
const ButtonGroup = ({ children }: { children: ReactNode}) => {
  return <div className="button-group">{children}</div>;
};
export default ButtonGroup;
