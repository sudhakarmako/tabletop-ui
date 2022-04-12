import "./Card.scss";

type CardType = {
  children?: React.ReactNode;
};

const Card = ({ children }: CardType) => {
  return <div className="card">{children}</div>;
};

export default Card;
