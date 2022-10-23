import { Button } from "@mui/material";
import React, { useState } from "react";

const FileUpload = ({ accept, name, data, setData }) => {
  const [currentFile, setCurrentFile] = useState(null);

  const selectFile = (e) => {
    const file = e.target.files[0];
    if (!file)
      return dispatch({
        type: "NOTIFY",
        payload: { error: "File does not exist." },
      });

    setData({ ...data, file: file });
    setCurrentFile(file);
  };

  return (
    <div>
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
          <Button className="btn-choose" variant="outlined" component="span">
            {accept === "image/*" ? "Browse Image" : "Browse file"}
          </Button>
        </label>
        <div className="file-name">{currentFile ? currentFile.name : null}</div>
      </div>
    </div>
  );
};

export default FileUpload;
