import { AutoComplete, Button, Chip, Row } from "@ui";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "store";
import "./Session.scss";
import dayjs from "dayjs";

const Session = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [playersData, setPlayersData] = useState([]);
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
  const { games } = useSelector((state: RootState) => state.game);

  useEffect(() => {
    if (params && params.sessionId && sessions.length) {
      const [selectedSession] = sessions.filter(
        (ses: any) => ses.id === Number(params.sessionId)
      );
      setSession(selectedSession);
    }
  }, [params, sessions]);

  useEffect(() => {
    !!players.length && setPlayersData(players)
  }, [players]);

  return (
    <div className="session-container">
      <Row>
        {!!session.id && (
          <Chip
            onClose={() => navigate("/sessions")}
          >{`Session: #${session.id}`}</Chip>
        )}
      </Row>
      {session.game.title ? (
        <>
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
        </>
      ) : (
        <>
        <Button>
          <i className="bi bi-plus"></i> Add Game
        </Button>
        <AutoComplete
        data={games}
        onSelected={data => console.log(data)}
        searchKey={["title"]}
        placeholder={'Search for Games...'}
      />
      </>
      )}
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
        <Button>
          <i className="bi bi-plus"></i> Add Player
        </Button>
      </Row>
        <AutoComplete
          data={players}
          onSelected={data => console.log(data)}
          searchKey={["first_name"]}
          placeholder={'Search for players...'}
        />
    </div>
  );
};

export default Session;
