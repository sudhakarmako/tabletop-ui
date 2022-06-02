import "./Chip.scss";

type ChipInteface = {
  image?: string;
  children?: string;
  onClose?: (() => void)
};
const Chip = ({ image, children, onClose }: ChipInteface) => {
  return (
    <div className="chip-container">
      {!!image && <img className="chip-image" src={image} alt="chip" />}
      <div className="chip-content">
        {children && children?.length > 26
          ? children?.substring(0, 26) + "..."
          : children}
      </div>
      <button className="chip-close" onClick={onClose}>
        <i className="bi bi-x-lg"></i>
      </button>
    </div>
  );
};

export default Chip;
