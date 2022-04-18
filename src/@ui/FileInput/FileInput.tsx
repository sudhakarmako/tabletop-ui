import "./FileInput.scss";
type FileInputType = {
  label?: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string;
};

const FileInput = ({ label, name, value, onChange }: FileInputType) => {
  return (
    <div className="input-file">
      <div className="file-label">{label}</div>
      <label htmlFor={name}>
        <input
          type="file"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        />
        <div className="file-content">
          <i className="file-icon bi bi-cloud-upload"></i>
          <small>Drop Here</small>
        </div>
      </label>
    </div>
  );
};

export default FileInput;
