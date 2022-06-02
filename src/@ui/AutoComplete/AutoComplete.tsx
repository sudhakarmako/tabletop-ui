import { useEffect, useState } from "react";
import "./AutoComplete.scss";

const AutoComplete = ({
  data,
  onSelected,
  placeholder,
  searchKey,
}: {
  data: [] | never[];
  onSelected: ({}) => void;
  placeholder?: string;
  searchKey: string[];
}) => {
  const [localData, setLocalData] = useState<[] | never[]>([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    !!data.length && setLocalData(data);
  }, [data]);

  useEffect(() => {
    if (searchText) {
      const filterData = localData.filter((i: any) =>
        i[searchKey[0]].includes(searchText)
      );
      setLocalData(filterData);
    } else {
      setLocalData(data);
    }
  }, [searchText]);

  return (
    <div className="autocomplete">
      <div className="autocomplete-container">
        <input
          type="text"
          placeholder={placeholder}
          onFocus={() => setLocalData(data)}
          value={searchText}
          onChange={(e: any) => setSearchText(e.target.value)}
        />
        <i className="ac-icon bi bi-search"></i>
      </div>
      {searchText && !!localData.length && (
        <div className="auto-options">
          {localData.map((option: any, key) => (
            <button
              key={key}
              className="auto-option"
              onClick={() => {
                onSelected(option);
                setSearchText("");
              }}
            >
              {option[searchKey[0]]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoComplete;
