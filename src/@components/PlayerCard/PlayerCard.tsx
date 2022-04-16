import "./PlayerCard.scss";

type PlayerCardType = {
  name?: string;
  avatarUrl?: string;
  phone?: string;
};
const PlayerCard = ({ name, avatarUrl, phone }: PlayerCardType) => {
  return (
    <div className="player-container">
      <div className="player-content">
        {!!avatarUrl && (
          <img className="player-image" src={avatarUrl} alt="player-image" />
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
