import { SessionCard, SessionTitle } from "@components";
import { Chip, Row, Col } from "@ui";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "store";

const Sessions = () => {
  const { sessions } = useSelector((state: RootState) => state.session);
  const { games } = useSelector((state: RootState) => state.game);
  const [sessionForGame, setSessionForGame] = useState([]);
  const [currentSession, setCurrentSession] = useState(0);
  const params = useParams();
  const navigate = useNavigate();
  const [gameData, setGameData] = useState({
    id: 0,
    title: "",
    short_desc: "",
    body: "",
    thumb: "",
    authour: "",
    created_at: "",
    updated_at: "",
    is_active: false,
    session: [],
    slider: [],
  });

  useEffect(() => {
    if (params && params.gameId && games.length) {
      const [game] = games.filter((g: any) => g.id === Number(params.gameId));
      setGameData(game);
    }
    if (params && params.gameId && sessions.length) {
      const session = sessions.filter(
        (s: any) => s.gameId === Number(params.gameId)
      );
      const cur_sess = session.filter((ses: any) => ses.is_active);
      setCurrentSession(cur_sess.length);
      setSessionForGame(session);
    } else if (sessions.length) {
      const cur_sess = sessions.filter((ses: any) => ses.is_active);
      setCurrentSession(cur_sess.length);
    }
  }, [params, games, sessions]);

  return (
    <>
      <Row justify={"space-between"}>
        <Row>
          {params.gameId && gameData && gameData && (
            <Chip image={gameData.thumb} onClose={() => navigate("/sessions")}>{gameData.title}</Chip>
          )}
        </Row>
        <p>
          Current Session: <strong>{currentSession || sessions.length}</strong>
        </p>
      </Row>
      <div className="session-margin_top">
        <Row align="flex-start">
          {params.gameId
            ? sessionForGame.map((session, key) => (
                <Col sm={12} md={12} lg={4} xl={4} xxl={4}>
                  <SessionCard key={key} session={session} />
                </Col>
              ))
            : sessions.map((session, key) => (
                <Col sm={12} md={12} lg={4} xl={4} xxl={4}>
                  <SessionCard key={key} session={session} />
                </Col>
              ))}
        </Row>
      </div>
    </>
  );
};

export default Sessions;
