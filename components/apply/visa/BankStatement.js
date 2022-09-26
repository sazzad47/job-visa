import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useContext, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs';
import FileUpload from './FileUpload';
import { DataContext } from '../../../store/GlobalState';

const BankStatement = ({handleBack, handleNext}) => {
  const { state, dispatch } = useContext(DataContext);
  const {
    bankName,
    bankStateIssuDate,
    bankStateDocument,
  } = state.visaApplicant.bank;

  const emptyInput = (
    !bankName ||
    !bankStateIssuDate ||
    !bankStateDocument
    )
    
   
    const [doi, setDoi] = useState(null);
   
    const handleDateOfIssue = (newValue) => {
      dispatch({
        type: 'CHANGE_VISA_APPLICANTS_BANK_INPUTS', 
        payload: {name: "bankStateIssuDate", value: newValue}
      })
      setDoi(newValue);
    };
   
    const handleInput = (e) => {
      dispatch({
        type: 'CHANGE_VISA_APPLICANTS_BANK_INPUTS', 
        payload: {name: e.target.name, value: e.target.value}
      })

    }

    const handleSubmit = (e) => {
     e.preventDefault();
    }
    console.log('state',state)

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} style={{minWidth:'100%'}}>
      <div className='visa-form-input'>
        <TextField name="bankName" onChange={handleInput} required fullWidth label="Name of the bank" variant="outlined" />
      </div>
      <div className='visa-form-input d-flex justify-content-between'>
       
         <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DesktopDatePicker
          label="Date of Issue"
          inputFormat="MM/DD/YYYY"
          value={doi}
          onChange={handleDateOfIssue}
          renderInput={(params) => <TextField fullWidth {...params} />}
        />
         </LocalizationProvider>
         </div>
         <div className='mt-3 mb-2'>Upload bank statement file</div>
          <FileUpload name="bankStateDocument" type="CHANGE_VISA_APPLICANTS_BANK_INPUTS"/>
          <div className='mt-4 d-flex align-items-center justify-content-between'>
          <Button variant='contained' onClick={handleBack}>Back</Button>
          {emptyInput?
          <Button type='submit' variant='contained' onClick={handleNext}>Next</Button>:
          <Button variant='contained' onClick={handleNext}>Next</Button>
        }
          </div>
        </form>
    </React.Fragment>
  )
}

export default BankStatement
