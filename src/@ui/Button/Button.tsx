import { ReactNode } from "react";
import "./Button.scss";
const Button = ({ children }: { children: ReactNode }) => {
  return <button className="button">{children}</button>;
};
export default Button;
