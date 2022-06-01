import { useEffect, useState } from "react";
import "./FileInput.scss";
type FileInputType = {
  label?: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string;
  preview?:string;
};

const FileInput = ({ label, name, value, onChange, preview }: FileInputType) => {
  const [selectedFile, setSelectedFile] = useState()
  const [previewImg, setPreview] = useState<any>()
  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
      if (!selectedFile) {
          setPreview(undefined)
          return
      }
      const objectUrl = URL.createObjectURL(selectedFile)
      setPreview(objectUrl)
      // free memory when ever this component is unmounted
      return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = (e:any) => {
      if (!e.target.files || e.target.files.length === 0) {
          setSelectedFile(undefined)
          return
      }
      // I've kept this example simple by using the first image instead of multiple
      setSelectedFile(e.target.files[0])
  }
  return (
    <div className="input-file">
      <div className="file-label">{label}</div>
      <div className="img-preview" style={{backgroundImage : `url(${previewImg ? previewImg : preview})`}}>
      <label htmlFor={name}>
        <input
          type="file"
          id={name}
          name={name}
          value={value}
          onChange={onSelectFile}
          accept="image/png, image/gif, image/jpeg"
        />
        <div className="file-content">
          <i className="file-icon bi bi-cloud-upload"></i>
          <small>Drop Here</small>
        </div>
      </label>
      </div>
    </div>
  );
};

export default FileInput;
