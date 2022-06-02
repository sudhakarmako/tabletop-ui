import { AppBar } from "@components";
import { Button } from "@ui";
import { useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  let { pathname } = useLocation();

  // CHANGES THE BACKGROUND IMAGE OF THE PAGE
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
    if (pathname === "/") {
      document.body.classList.add("game");
    }
  };

  // CHANGES THE RIGHT ACTION BUTTON ON THE NAV
  const changeRightNavContent = useCallback(() => {
    if (pathname.includes("session")) {
      return <Link to={"/session"}><Button>ADD NEW SESSION</Button></Link>
    }
    if (pathname.includes("game")) {
      return <Link to={"/game"}><Button>ADD NEW GAME</Button></Link>
    }
    if (pathname.includes("player")) {
      return <Link to={"/player"}><Button>ADD NEW PLAYER</Button></Link>
    }
    if (pathname === "/") {
      return <Link to={"/game"}><Button>ADD NEW GAME</Button></Link>
    }
  }, [pathname])

  useEffect(() => {
    if (pathname) changeBG(pathname);
  }, [pathname]);

  return (
    <main>
      <AppBar pathname={pathname} contentRight={changeRightNavContent()} />
      {children}
    </main>
  );
};

export default AuthLayout;
