import "./Input.scss";
type NumberInputType = {
  label?: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?: number;
  min?:string | "";
  max?:string | "";
};

const NumberInput = ({ label, name, value, onChange, min, max }: NumberInputType) => {
  return (
    <div className="input-text">
      <label htmlFor={name}>{label}</label>
      <input
        type="number"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
      />
    </div>
  );
};

export default NumberInput;
