import "./DateInput.scss";
type DateInputType = {
  label?: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string;
};

const DateInput = ({ label, name, value, onChange }: DateInputType) => {
  return (
    <div className="input-date">
      <label htmlFor={name}>{label}</label>
      <input
        type="date"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default DateInput;
