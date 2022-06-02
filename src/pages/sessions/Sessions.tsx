import { PlayerCard, SessionCard, SessionTitle } from "@components";
import { Chip, Row, Col} from "@ui";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "store";

const Sessions = () => {
  const {sessions} = useSelector((state:RootState) => state.session)
  const {players} = useSelector((state:RootState) => state.player)
  const {games} = useSelector((state:RootState) => state.game)
  const params = useParams();
  const [gameData, setGameData] = useState({
    id: 0,
    title: "",
    short_desc: "",
    body: "",
    thumb: "",
    authour: "",
    created_at:"",
    updated_at: "",
    is_active: false,
    session:[],
    slider: []
  });
  console.log(sessions, players, games);
  
  useEffect(() => {
    if(params && params.gameId && games.length){
      const [game] = games.filter((g:any) => g.id === params.gameId);
      setGameData(game);
    }
  }, [params, games]);

  return (
    <>
      <Row justify={"space-between"}>
        <Row>
          {params.gameId && gameData && gameData && <Chip image={gameData.thumb}>{gameData.title}</Chip>}
        </Row>
        <p>
          Current Session: <strong>{sessions.length}</strong>
        </p>
      </Row>
      <div className="session-margin_top">
      <Row align="flex-start">
        <Col sm={12} md={12} lg={5} xl={5} xxl={5}>
          {sessions.map((session, key) => (
            <SessionCard
              key={key}
              session={session}
            />
          ))}
        </Col>
        <Col sm={12} md={12} lg={7} xl={7} xxl={7}>
          <SessionTitle />
          <Row justify="space-evenly">
          {players.map((player, key) => (
              <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
                <PlayerCard
                  key={key}
                  player={player}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      </div>
    </>
  );
};

export default Sessions;
