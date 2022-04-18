import "./Input.scss";
type InputType = {
  label?: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string;
};

const Input = ({ label, name, value, onChange }: InputType) => {
  return (
    <div className="input-text">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
