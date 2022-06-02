import { Chip, Row } from "@ui";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "store";
import "./Session.scss";
import dayjs from "dayjs";

const Session = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [session, setSession] = useState({
    id: 0,
    gameId: 0,
    playerId: [],
    created_at: "",
    updated_at: "",
    is_active: false,
    game: {
      title: "",
      body: "",
      authour: "",
      created_at: "",
      is_active: false,
    },
  });
  const { sessions } = useSelector((state: RootState) => state.session);
  const { players } = useSelector((state: RootState) => state.player);

  useEffect(() => {
    if (params && params.sessionId && sessions.length) {
      const [selectedSession] = sessions.filter(
        (ses: any) => ses.id === Number(params.sessionId)
      );
      setSession(selectedSession);
    }
  }, [params, sessions]);

  return (
    <div className="session-container">
      <Row>
        <Chip
          onClose={() => navigate("/sessions")}
        >{`Session: #${session.id}`}</Chip>
      </Row>
      <h2>{session.game.title}</h2>
      <p>{session.game.body}</p>
      <h4>More info:</h4>
      <ul className="session-game-meta">
        <li>
          <strong>Authour : </strong>
          {session.game.authour}
        </li>
        <li>
          <strong>Created on : </strong>
          {dayjs(session.game.created_at).format("DD-MMM-YYYY")}
        </li>
        <li>
          <strong>Active : </strong>
          {session.game.is_active ? "Yes" : "No"}
        </li>
      </ul>
      <h2 className="player">
        Players
        <span>
          <i className="bi bi-people"></i>
          {session.playerId.length}
        </span>
      </h2>
      <Row>
        {!!players.length &&
          session.playerId.map((player: { id: number }, key) => {
            const [chip]: {
              first_name: string;
              avatar: string;
              last_name: string;
            }[] = players.filter((pl: any) => pl.id === player.id);
            return (
              chip && (
                <Chip key={key} image={chip.avatar}>
                  {`${chip.first_name} ${chip.last_name}`}
                </Chip>
              )
            );
          })}
      </Row>
    </div>
  );
};

export default Session;
