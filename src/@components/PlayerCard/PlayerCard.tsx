import { Link } from "react-router-dom";
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
  }
};
const PlayerCard = ({
  player,
}: PlayerCardType) => {
  return (
    <div className={`player-container ${!player.is_active && "player-inactive"}`}>
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
       <Link to={`/session/${player.id}`}>
       <button className="edit-player">
          <i className="bi bi-pencil-square"></i> Edit
        </button>
        </Link>
        <button className="remove-player">
          <i className="bi bi-person-dash"></i> Remove
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
