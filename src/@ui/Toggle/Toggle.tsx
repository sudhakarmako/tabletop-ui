import { useEffect, useState } from "react";
import "./Toggle.scss";

type ToggleType = {
  id?: string;
  label?: string;
  name?: string;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
  onText?: string | "Active";
  offText?: string | "In-Active";
  defaultChecked: boolean;
};

const Toggle = ({
  label,
  name,
  defaultChecked,
  onText,
  offText,
  onChange,
}: ToggleType) => {

  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    setToggle(defaultChecked)
  }, [defaultChecked]);

  return (
    <div className="toggle">
     <label htmlFor={name}>{label}</label>
        <input
        style={{height:0, width:0, display:"none"}}
          id={name}
          type="checkbox"
          name={name}
          checked={toggle}
          onChange={e => {setToggle(e.target.checked); onChange(e.target.checked)}}
        />
      <button className="toggle-container" type="button" onClick={() => setToggle(!toggle)}>
        <div className={`toggle-indicator ${toggle ? "on" : "off"}`}>
          <p>{onText}</p>
          <p>{offText}</p>
        </div>
      </button>
     </div>
  );
};
export default Toggle;
