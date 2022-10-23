import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CircularProgress, FormControlLabel, Grid, TextField } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useNotify, useRecordContext } from 'react-admin';
import { useState } from 'react';
import {patchData } from '../../../utils/fetchData';
import FileUpload from "react-material-file-upload";

import { imageUpload } from '../../../utils/imageUpload';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid blue',
  boxShadow: 24,
  p: 4,
};

export default function UploadVisa() {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [files, setFiles] = useState([]);
  const selectedFile = files[0]
  const notify = useNotify()
  const record = useRecordContext();
  if (!record) return null;
    
    const handleSetCost = async () => {
      let media
      if(!selectedFile) return;
      setLoading(true)
      
        media = await imageUpload([
          selectedFile
      ])
          let id = record.id
          
          patchData(`visaApplicants/${id}?visa=${media[0]}`, auth.token)
          handleClose()
          setLoading(false)
          notify('Visa has been uploaded successfully!', {type: 'success'})
    }

  return (
    <div>
      <Button color="primary" onClick={handleOpen}><CloudUploadIcon className="me-2" sx={{fontSize:'0.9rem'}}/>{loading? "Uploading...": "Upload Visa"} </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <div className='mt-3 mb-2'>Upload Visa</div>
          {loading? <div className='d-flex align-items-center justify-content-center'><CircularProgress/></div>: <FileUpload value={files} onChange={setFiles} />}
            <Grid className='d-flex justify-content-between mt-4'>
                <Button variant='contained' onClick={handleSetCost} >Submit</Button>
                <Button variant='outlined' onClick={handleClose} >close</Button>
                </Grid>
           
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}