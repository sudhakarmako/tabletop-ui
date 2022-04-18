import "./PlayerCard.scss";

type PlayerCardType = {
  playerId: number;
  name?: string;
  avatarUrl?: string;
  phone?: string;
  setPlayerDetail: React.Dispatch<React.SetStateAction<number | null>>;
  setPlayerModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const PlayerCard = ({
  playerId,
  name,
  avatarUrl,
  phone,
  setPlayerModal,
  setPlayerDetail,
}: PlayerCardType) => {
  const onHandleClick = (id: number) => {
    setPlayerModal(true);
    setPlayerDetail(id);
  };
  return (
    <div className="player-container" onClick={() => onHandleClick(playerId)}>
      <div className="player-content">
        {!!avatarUrl && (
          <img className="player-image" src={avatarUrl} alt="player" />
        )}
        <div>
          <p>Joe Caputo</p>
          <p>+07 658 312 387</p>
        </div>
      </div>
      <div className="player-action">
        <button className="edit-player">
          <i className="bi bi-pencil-square"></i> Edit
        </button>
        <button className="remove-player">
          <i className="bi bi-person-dash"></i> Remove
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
