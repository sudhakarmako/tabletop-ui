import {
  Game,
  Games,
  Home,
  PageNotFound,
  Player,
  Players,
  Session,
  Sessions,
} from "pages";
import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "games",
    element: <Games />,
  },
  {
    path: "game",
    element: <Games />,
  },
  {
    path: "game/:gameId",
    element: <Game />,
  },
  {
    path: "sessions",
    element: <Sessions />,
  },
  {
    path: "session",
    element: <Session />,
  },
  {
    path: "session/:sessionId",
    element: <Session />,
  },
  {
    path: "players",
    element: <Players />,
  },
  {
    path: "player",
    element: <Player />,
  },
  {
    path: "player/:playerId",
    element: <Player />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];
