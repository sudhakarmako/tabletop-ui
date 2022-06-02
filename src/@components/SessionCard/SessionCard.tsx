import { Link } from "react-router-dom";
import "./SessionCard.scss";

type SessionCardType = {
  session:   {
    id: number,
    gameId:number,
    playerId: [],
    created_at: string,
    updated_at: string,
    is_active: boolean
  },
};

const SessionCard = ({
  session
}: SessionCardType) => {

  return (
    <Link className="session-card" to={`/session/${session.id}`}>
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
          Started at: <strong>{session.created_at}</strong>
        </p>
        <p>
          Ended at: <strong>{session.updated_at}</strong>
        </p>
      </div>
    </Link>
  );
};

export default SessionCard;
