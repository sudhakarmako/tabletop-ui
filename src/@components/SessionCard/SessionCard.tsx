import dayjs from "dayjs";
import { Link } from "react-router-dom";
import "./SessionCard.scss";

type SessionCardType = {
  session:   {
    id: number;
    gameId:number;
    playerId: [];
    created_at: string;
    updated_at: string;
    is_active: boolean;
    game:{thumb:string}
  },
};

const SessionCard = ({
  session
}: SessionCardType) => {
  return (
    <Link className={`session-card ${!session.is_active && "session-disabled"}`} to={`/session/${session.id}`}>
      <img className="chip-image" src={session?.game?.thumb} alt="chip" />

      <div className="session-id">
        <i className="bi bi-hash"></i>
        <h3>{session.id}</h3>
      </div>
      <div className="session-players">
        <i className="bi bi-people"></i>
        <h3>{session?.playerId?.length}</h3>
      </div>
      <div className="session-timings">
        <p>
          Started at: <strong>{dayjs(session.created_at).format("hh:mm a")}</strong>
        </p>
        <p>
          Ended at: <strong>{dayjs(session.updated_at).format("hh:mm a")}</strong>
        </p>
      </div>
    </Link>
  );
};

export default SessionCard;
