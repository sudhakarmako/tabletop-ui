import { Button, Container } from "@ui";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./AppBar.scss";
const AppBar = ({
  pathname,
  contentRight,
}: {
  pathname: string;
  contentRight: React.ReactNode;
}) => {
  const [indicatorPos, setIndicatorPos] = useState({ width: 108, left: 0 });

  const moveIndicator = (e: any) => {
    setIndicatorPos({ width: e.target.offsetWidth, left: e.target.offsetLeft });
  };
  useEffect(() => {
    if (pathname.includes("session")) {
      setIndicatorPos({ width: 152, left: 172 });
    }
    if (pathname.includes("game")) {
      setIndicatorPos({ width: 108, left: 0 });
    }
    if (pathname.includes("player")) {
      setIndicatorPos({ width: 139, left: 387 });
    }
  }, [pathname]);
  return (
    <Container>
      <nav className="nav">
        <ul className="nav-list nav-left">
          <li className="nav-item" onClick={moveIndicator}>
            <Link to="/games">GAMES</Link>
          </li>
          <li className="nav-item" onClick={moveIndicator}>
            <Link to="/sessions">SESSIONS</Link>
          </li>
          <li className="nav-item" onClick={moveIndicator}>
            <Link to="/players">PLAYERS</Link>
          </li>
          <div className="nav-indicator" style={indicatorPos}></div>
        </ul>
        <ul className="nav-list nav-right">
          <li className="nav-item">{contentRight}</li>
          <li className="nav-item">
            <Button>
              <i className="bi bi-search"></i>
            </Button>
          </li>
          <li className="nav-item">
            <Button>
              <i className="bi bi-person"></i>
            </Button>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default AppBar;
