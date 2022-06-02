import { Link } from "react-router-dom";
import "./GameCard.scss";

type GameCardType = {
  game: {
    "id": number,
    "title": string,
    "short_desc": string,
    "body": string,
    "thumb": string,
    "authour": string,
    "created_at":string,
    "updated_at": string,
    "is_active": boolean,
    "session":[],
    "slider": [
      {
        "id": number,
        "img_url": string
      }
    ]
  };
  setGameId: React.Dispatch<React.SetStateAction<number |null>>;
  setGameModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const GameCard = ({ game, setGameId, setGameModal }: GameCardType) => {
  const onHandleClick = (id: number) => {
    setGameId(id);
    setGameModal(true);
  };
  return (
    <div className="card" key={game.id}>
      <div className="card-img-container" onClick={() => onHandleClick(game.id)}>
        <div
          className="card-img"
          style={{
            backgroundImage: `url("${game.thumb}")`,
          }}
        ></div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{game.title}</h5>
        <p className="card-text">
          {game.short_desc.substring(0, game.title.length > 20 ? 45 : 75)}...{" "}
          <strong>more</strong>
        </p>
      </div>
      <Link to={`/sessions/${game.id}`} className="card-action">
        <span className="count">{game?.session?.length  || 0}</span> <span>Sessions</span>
      </Link>
    </div>
  );
};

export default GameCard;
