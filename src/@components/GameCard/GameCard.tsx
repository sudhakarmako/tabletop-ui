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
  setGameDetail: React.Dispatch<React.SetStateAction<number | null>>;
  setGameModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const GameCard = ({ 
  game, 
  setGameDetail, 
  setGameModal }: GameCardType) => {
  const onHandleClick = (id: number) => {
    setGameDetail(id);
    setGameModal(true);
  };
  return (
    <div className="card" key={game.id} onClick={() => onHandleClick(game.id)}>
      <div className="card-img-container">
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
      <div className="card-action">
        <span className="count">{game?.session?.length  || 0}</span> <span>Sessions</span>
      </div>
    </div>
  );
};

export default GameCard;
