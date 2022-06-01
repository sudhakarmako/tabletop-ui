import "./PlayerCard.scss";

type PlayerCardType = {
  player:{
    id: number,
    first_name: string,
    last_name: string,
    dob: string,
    age: number,
    phone_number: string,
    created_at: string,
    updated_at: string,
    is_active: boolean,
    avatar: string
  },
  setPlayerDetail: React.Dispatch<React.SetStateAction<number | null>>;
  setPlayerModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const PlayerCard = ({
  player,
  setPlayerModal,
  setPlayerDetail,
}: PlayerCardType) => {
  const onHandleClick = (id: number) => {
    setPlayerModal(true);
    setPlayerDetail(id);
  };
  return (
    <div className="player-container">
      <div className="player-content">
        {!!player.avatar && (
          <img className="player-image" src={player.avatar} alt="player" />
        )}
        <div>
          <p>{`${player.first_name} ${player.last_name}`}</p>
          <p>{`${player.phone_number ?? '---'}`}</p>
        </div>
      </div>
      <div className="player-action">
        <button className="edit-player" onClick={() => onHandleClick(player.id)}>
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
