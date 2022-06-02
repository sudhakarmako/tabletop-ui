import { ReactNode } from "react";
import "./Button.scss";
const Button = ({ children, type, onClick }: { children: ReactNode, type?:"button" | "submit" | "reset" | undefined, onClick?:(() => void) }) => {
  return <button className="button" onClick={onClick} type={type}>{children}</button>;
};
export default Button;
