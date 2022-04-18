import "./Chip.scss";

type ChipInteface = {
  image?: string;
  children?: string;
};
const Chip = ({ image, children }: ChipInteface) => {
  return (
    <div className="chip-container">
      {!!image && <img className="chip-image" src={image} alt="chip" />}
      <div className="chip-content">
        {children && children?.length > 26
          ? children?.substring(0, 26) + "..."
          : children}
      </div>
      <div className="chip-close">
        <i className="bi bi-x-lg"></i>
      </div>
    </div>
  );
};

export default Chip;
