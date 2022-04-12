import { Link } from "react-router-dom";
import "./GameCard.scss";

type GameCardType = {
  children?: React.ReactNode;
  game: {
    id: number;
    image: string;
    count: number;
    title: string;
    shortDes: string;
  };
};
const GameCard = ({ game, children }: GameCardType) => {
  return (
    <Link to="/">
      <div className="card">
        <img className="card-img" src={game.image} />
        <h5 className="card-title">{game.title}</h5>
        <p className="card-text">
          {game.shortDes} <strong>more</strong>
        </p>
        <div className="card-action">
          <span className="count">{game.count}</span> <span>Sessions</span>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
