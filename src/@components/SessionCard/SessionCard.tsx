import "./SessionCard.scss";

type SessionCardType = {
  sessionId: number;
  players?: string;
  startTime?: string;
  stopTime?: string;
  setSessionDetail: React.Dispatch<React.SetStateAction<number | null>>;
  setSessionModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const SessionCard = ({
  sessionId,
  players,
  startTime,
  stopTime,
  setSessionModal,
  setSessionDetail,
}: SessionCardType) => {
  const onHandleClick = (id: number) => {
    setSessionModal(true);
    setSessionDetail(id);
  };
  return (
    <div className="session-card" onClick={() => onHandleClick(sessionId)}>
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
    </div>
  );
};

export default SessionCard;
