import { Link } from "react-router-dom";
import "./SessionCard.scss";

type SessionCardType = {
  sessionId: number;
  players?: string;
  startTime?: string;
  stopTime?: string;
};

const SessionCard = ({
  sessionId,
  players,
  startTime,
  stopTime
}: SessionCardType) => {

  return (
    <Link className="session-card" to={`/session/${sessionId}`}>
      <div className="session-id">
        <i className="bi bi-hash"></i>
        <h3>{sessionId}</h3>
      </div>
      <div className="session-players">
        <i className="bi bi-people"></i>
        <h3>{players}</h3>
      </div>
      <div className="session-timings">
        <p>
          Started at: <strong>{startTime}</strong>
        </p>
        <p>
          Ended at: <strong>{stopTime}</strong>
        </p>
      </div>
    </Link>
  );
};

export default SessionCard;
