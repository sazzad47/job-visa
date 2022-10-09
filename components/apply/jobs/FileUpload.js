import {Button } from '@mui/material';

import React, { useContext, useState } from 'react'
import { DataContext } from '../../../store/GlobalState';




const FileUpload = ({accept, name, type}) => {
    const {state, dispatch} = useContext(DataContext);
    const [currentFile, setCurrentFile] = useState(null);
   
    const selectFile = (e) => {
      const file = e.target.files[0]
      if(!file)
          return dispatch({type: 'NOTIFY', payload: {error: 'File does not exist.'}})

      // if(file.size > 1024 * 1024) //1mb
      //     return dispatch({type: 'NOTIFY', payload: {error: 'The largest image size is 1mb.'}})

      // if(file.type !== "image/jpeg" && file.type !== "image/png") //1mb
      //     return dispatch({type: 'NOTIFY', payload: {error: 'Image format is incorrect.'}})
      
      dispatch({ type: type, payload: {name: e.target.name, value: file}})
      setCurrentFile(file)
      

    }


  return (
    <div>
      <div className="mg20">
        <label htmlFor={name}>
          <input
            id={name}
            name={name}
            style={{ display: 'none' }}
            type="file"
            // accept="image/*"
            // accept="application/pdf"
            accept={accept}
            onChange={selectFile} />
          <Button
            className="btn-choose"
            variant="outlined"
            component="span" >
             {accept==="image/*" ? "Browse Image" : "Browse file"}
          </Button>
        </label>
        <div className="file-name">
        {currentFile ? currentFile.name : null}
        </div>
      
      </div >
    </div>
  )
}

export default FileUpload
