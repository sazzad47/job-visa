import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FormControlLabel, Grid, TextField } from '@mui/material';

import AddCardIcon from '@mui/icons-material/AddCard';
import { useNotify, useRecordContext } from 'react-admin';
import { useState } from 'react';
import {putData } from '../../utils/fetchData';
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

export default function SetCost({resource}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [amount, setAmount] = useState("");
  const notify = useNotify()
  const record = useRecordContext();
  if (!record) return null;
    
    const handleSetCost = () => {
          if (!amount) return;
          let id = record.id
          
          putData(`${resource}/${id}`, {cost: amount})
          handleClose()
          notify('Cost has been set successfully!', {type: 'success'})
    }

  return (
    <div>
      <Button color="primary" onClick={handleOpen}><AddCardIcon className="me-2" sx={{fontSize:'0.9rem'}}/> Set Cost</Button>
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
            <TextField required fullWidth label="Set cost" variant="outlined" onChange={(e) => setAmount(e.target.value)} />
            <Grid className='d-flex justify-content-between mt-4'>
                <Button variant='contained' onClick={handleSetCost} >submit</Button>
                <Button variant='outlined' onClick={handleClose} >close</Button>
                </Grid>
           
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}