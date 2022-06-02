import { AutoComplete, Button, Chip, Row } from "@ui";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "store";
import "./Session.scss";
import dayjs from "dayjs";
import {
  addSessionAction,
  deleteSessionAction,
  getSessionsAction,
  updateSessionAction,
} from "store/actions/session.actions";
import { getPlayersAction } from "store/actions/player.actions";

type SessionType = {
  id: 0;
  gameId: 0;
  playerId: {}[];
  created_at: "";
  updated_at: "";
  is_active: false;
  game: {
    title: "";
    body: "";
    authour: "";
    created_at: "";
    is_active: false;
  };
};

const Session = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [playersData, setPlayersData] = useState([]);
  const [session, setSession] = useState<SessionType>({
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
    setSession({
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
    if (params && params.sessionId && sessions.length) {
      const [selectedSession] = sessions.filter(
        (ses: any) => ses.id === Number(params.sessionId)
      );
      setSession(selectedSession);
    }
  }, [params, sessions]);

  useEffect(() => {
    !!players.length && setPlayersData(players);
  }, [players]);

  const handleSesssionCreate = async (gameId: number) => {
    const [res]: any = await Promise.all([
      dispatch(addSessionAction({ gameId })),
      dispatch(getSessionsAction("?_sort=is_active&_order=DESC&_expand=game")),
    ]);
    navigate(`/session/${res.payload.id}`);
  };
  const handleAddPlayerToSession = async (playerId: number) => {
    let payload = {...session};
    if (Array.isArray(payload.playerId)) {
      const temp = [...payload.playerId, {
        id:playerId,
        joined_at: dayjs(),
        left_at: dayjs(),
      }]
      payload.playerId = temp;
    } else {
      payload.playerId = new Array(
        {
          id:playerId,
          joined_at: dayjs(),
          left_at: dayjs(),
        });
    }
   await Promise.all([
      dispatch(updateSessionAction(payload)),
      dispatch(getPlayersAction("?_sort=is_active,first_name&_order=DESC,ASC")),
      dispatch(getSessionsAction("?_sort=is_active&_order=DESC&_expand=game")),
    ]);
  };
  const handleRemovePlayerFromSession = async (playerId:number) => {
    const otherPlayers = session.playerId.filter((pl:any)=> pl.id !== playerId);
    let payload = {...session};
    payload.playerId = otherPlayers;
    await Promise.all([
      dispatch(updateSessionAction(payload)),
      dispatch(getPlayersAction("?_sort=is_active,first_name&_order=DESC,ASC")),
      dispatch(getSessionsAction("?_sort=is_active&_order=DESC&_expand=game")),
    ]); 
  }
const handleDeleteSession =async (sessionId:number) => {
  await Promise.all([
    dispatch(deleteSessionAction(sessionId)),
    dispatch(getSessionsAction("?_sort=is_active&_order=DESC&_expand=game")),
  ]);
  navigate("/sessions"); 
}
  return (
    <div className="session-container">
      <Row justify="space-between">
        {!!session.id && (
          <Chip
            onClose={() => {handleDeleteSession(session.id)}}
          >{`Session: #${session.id}`}</Chip>
        )}
        <Button onClick={() => navigate("/sessions")}>Go Back</Button>
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
        <AutoComplete
          data={games}
          onSelected={(data: any) => handleSesssionCreate(Number(data.id))}
          searchKey={["title"]}
          placeholder={"Search for Games..."}
        />
      )}
      {!!session.id && (
        <>
          <h2 className="player">
            Players
            <span>
              <i className="bi bi-people"></i>
              {session?.playerId?.length}
            </span>
          </h2>
          <AutoComplete
            data={players}
            onSelected={(data: any) =>
              handleAddPlayerToSession(Number(data.id))
            }
            searchKey={["first_name"]}
            placeholder={"Search for players..."}
          />
          <br />
          <br />
          <Row>
            {!!players.length &&
              !!session?.playerId?.length &&
              session.playerId.map((player: any, key) => {
                const [chip]: {
                  id:number,
                  first_name: string;
                  avatar: string;
                  last_name: string;
                }[] = players.filter((pl: any) => pl.id === player.id);
                return (
                  chip && (
                    <Chip key={key} image={chip.avatar} onClose={() => handleRemovePlayerFromSession(chip.id)}>
                      {`${chip.first_name} ${chip.last_name}`}
                    </Chip>
                  )
                );
              })}
          </Row>
        </>
      )}
    </div>
  );
};

export default Session;
