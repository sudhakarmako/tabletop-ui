import "./GameCard.scss";

type GameCardType = {
  game: {
    id: number;
    image: string;
    count: number;
    title: string;
    shortDes: string;
  };
  setGameDetail: React.Dispatch<React.SetStateAction<number | null>>;
  setGameModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const GameCard = ({ game, setGameDetail, setGameModal }: GameCardType) => {
  const onHandleClick = (id: number) => {
    setGameDetail(id);
    setGameModal(true);
  };
  return (
    <div className="card" onClick={() => onHandleClick(game.id)}>
      <div className="card-img-container">
        <div
          className="card-img"
          style={{
            backgroundImage: `url("${game.image}")`,
          }}
        ></div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{game.title}</h5>
        <p className="card-text">
          {game.shortDes.substring(0, game.title.length > 20 ? 45 : 75)}...{" "}
          <strong>more</strong>
        </p>
      </div>
      <div className="card-action">
        <span className="count">{game.count}</span> <span>Sessions</span>
      </div>
    </div>
  );
};

export default GameCard;
