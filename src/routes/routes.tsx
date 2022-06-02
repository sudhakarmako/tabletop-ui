import {
  Game,
  Games,
  Login,
  PageNotFound,
  Player,
  Players,
  Register,
  Session,
  Sessions,
} from "pages";
import { RouteObject } from "react-router-dom";

export const protectedRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Games />,
  },
  {
    path: "home",
    element: <Games />,
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
    path: "sessions/:gameId",
    element: <Sessions />,
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
];

export const publicRoutes: RouteObject[] = [
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];
