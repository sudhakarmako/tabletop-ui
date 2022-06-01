import { ReactNode } from "react";
import "./Button.scss";
const Button = ({ children, type }: { children: ReactNode, type?:"button" | "submit" | "reset" | undefined }) => {
  return <button className="button" type={type}>{children}</button>;
};
export default Button;
