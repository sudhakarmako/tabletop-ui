import { AppBar } from "@components";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  let { pathname } = useLocation();

  const changeBG = (pathname: string) => {
    document.body.className = "";
    if (pathname.includes("session")) {
      document.body.classList.add("session");
    }
    if (pathname.includes("game")) {
      document.body.classList.add("game");
    }
    if (pathname.includes("player")) {
      document.body.classList.add("player");
    }
  };
  useEffect(() => {
    if (pathname) changeBG(pathname);
  }, [pathname]);

  return (
    <main>
      <AppBar pathname={pathname} />
      {children}
    </main>
  );
};

export default AuthLayout;
