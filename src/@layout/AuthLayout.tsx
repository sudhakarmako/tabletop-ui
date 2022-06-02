import { AppBar } from "@components";
import { Button, Modal } from "@ui";
import { Player } from "pages";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  let { pathname } = useLocation();
  const [openNewPlayer, setOpenNewPlayer] = useState(false);
  const [openNewSession, setOpenNewSession] = useState(false);
  const [openNewGame, setOpenNewGame] = useState(false);

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

  const changeRightNavContent = useCallback(() => {
    if (pathname.includes("session")) {
      return <Button onClick={() => setOpenNewPlayer(true)}>ADD NEW SESSION</Button>
    }
    if (pathname.includes("game")) {
      return <Button onClick={() => setOpenNewSession(true)}>ADD NEW GAME</Button>
    }
    if (pathname.includes("player")) {
      return <Button onClick={() => setOpenNewGame(true)}>ADD NEW PLAYER</Button>
    }
    if (pathname === "/") {
      return <Button onClick={() =>  setOpenNewPlayer(true)}>ADD NEW GAME</Button>
    }
  }, [pathname])

  useEffect(() => {
    if (pathname) changeBG(pathname);
  }, [pathname]);

  return (
    <main>
      <AppBar pathname={pathname} contentRight={changeRightNavContent()} />
      {children}
      <Modal open={openNewPlayer} onClose={() => setOpenNewPlayer(false)}>
        <Player closeAfterSubmit={() => setOpenNewPlayer(false)} />
      </Modal>
      <Modal open={openNewSession} onClose={() => setOpenNewSession(false)}>
        <Player closeAfterSubmit={() => setOpenNewSession(false)} />
      </Modal>
      <Modal open={openNewGame} onClose={() => setOpenNewGame(false)}>
        <Player closeAfterSubmit={() => setOpenNewGame(false)} />
      </Modal>
    </main>
  );
};

export default AuthLayout;
