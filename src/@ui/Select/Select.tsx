import { useSelectOutside } from "hooks/SelectClickOutside";
import { useEffect, useRef, useState } from "react";
import "./Select.scss";

type SelectType = {
  label?: string;
  name?: string;
  onChange: (value: string) => void;
  value?: string;
  options?: { name: string; value: string }[];
};

const Select = ({ label, name, onChange, value, options }: SelectType) => {
  const selectRef = useRef(null);
  const [active, setActive] = useState(false);
  const [selectValue, setselectValue] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  useSelectOutside(selectRef, () => {
    setActive(false);
  });
  useEffect(() => {
    value && setSelected(value);
    console.log(selectValue);
  }, [value]);

  const handleClick = (name: string, value: string) => {
    name && setSelected(name);
    value && setselectValue(value);
    value && onChange(value);
    setActive(false);
  };
  return (
    <div
      className="select-container"
      onClick={() => setActive(true)}
      ref={selectRef}
    >
      <label className="select-label">{label}</label>
      <div className="select-body">
        {selected ? (
          <div className="option-selected">{selected}</div>
        ) : (
          <div className="option-default">Please Select</div>
        )}

        {active ? (
          <div className="select-list">
            {!!options?.length &&
              options.map(({ name, value }, key) => (
                <div
                  key={key}
                  className="select-option"
                  onClick={() => handleClick(name, value)}
                >
                  {name}
                </div>
              ))}
          </div>
        ) : null}
        <i className={`bi bi-chevron-${active ? "up" : "down"}`}></i>
      </div>
    </div>
  );
};

export default Select;
