import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { DataContext } from "../../store/GlobalState";

const FileUpload = ({label, accept, name, type }) => {
  const { dispatch } = useContext(DataContext);
  const [currentFile, setCurrentFile] = useState(null);

  const selectFile = (e) => {
    const file = e.target.files[0];
    if (!file)
      return dispatch({
        type: "NOTIFY",
        payload: { error: "File does not exist." },
      });
    dispatch({ type: type, payload: { name: e.target.name, value: file } });
    setCurrentFile(file);
  };
  return (
    <div>
      <h6 style={{color:'#000'}}>{label}</h6>
      <div className="mg20">
        <label htmlFor={name}>
          <input
            id={name}
            name={name}
            style={{ display: "none" }}
            type="file"
            accept={accept}
            onChange={selectFile}
          />
          <Button className="btn-choose" color="inherit" variant="contained" component="span">
            {accept === "image/*" ? "Browse Image" : "Browse file"}
          </Button>
        </label>
        <div className="file-name">{currentFile ? currentFile.name : null}</div>
      </div>
    </div>
  );
};

export default FileUpload;
