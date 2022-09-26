import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useContext, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs';
import FileUpload from './FileUpload';
import { DataContext } from '../../../store/GlobalState';

const HomeInfo = ({handleBack, handleNext}) => {
  const { state, dispatch } = useContext(DataContext);
  const {
    passportCountry,
    passportNumber,
    passportDateOfIssue,
    passportDateOfExpiry,
    visaApplicationID,
    medicalReport,
  } = state.jobApplicant.passportVisaDetails;

  const emptyInput = (
    !passportCountry ||
    !passportNumber ||
    !passportDateOfIssue ||
    !passportDateOfExpiry ||
    !visaApplicationID ||
    !medicalReport
    ) 

    const [doi, setDoi] = useState(null);
    const [doe, setDoe] = useState(null);

    const handleDateOfIssue = (newValue) => {
      dispatch({
        type: 'CHANGE_JOB_APPLICANTS_PASSPORT_INPUTS', 
        payload: {name: "passportDateOfIssue", value: newValue}
      })
      setDoi(newValue);
    };
   
    const handleDateOfExpiry = (newValue) => {
      dispatch({
        type: 'CHANGE_JOB_APPLICANTS_PASSPORT_INPUTS', 
        payload: {name: "passportDateOfExpiry", value: newValue}
      })
      setDoe(newValue);
    };

    const handleInput = (e) => {
      dispatch({
        type: 'CHANGE_JOB_APPLICANTS_PASSPORT_INPUTS', 
        payload: {name: e.target.name, value: e.target.value}
      })

    }

    const handleSubmit = (e) => {
     e.preventDefault();
    }
    console.log('state',state)
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
      
      
      <div className='visa-form-input'>
        <TextField name='passportCountry' onChange={handleInput} required fullWidth label="Passport Country Name" variant="standard" />
      </div>
      
      <div className='visa-form-input'>
        <TextField name='passportNumber' onChange={handleInput} required fullWidth label="Passport Number" variant="standard" />
      </div>
      <div className='visa-form-input d-flex justify-content-between'>
       
         <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DesktopDatePicker
          
          label="Date of Issue"
          inputFormat="MM/DD/YYYY"
          value={doi}
          onChange={handleDateOfIssue}
          renderInput={(params) => <TextField variant='standard' fullWidth {...params} />}
        />
         </LocalizationProvider>
      </div>
      <div className='visa-form-input d-flex justify-content-between'>
       
         <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DesktopDatePicker
          
          label="Date of Expiry"
          inputFormat="MM/DD/YYYY"
          value={doe}
          onChange={handleDateOfExpiry}
          renderInput={(params) => <TextField variant='standard' fullWidth {...params} />}
        />
         </LocalizationProvider>
      </div>
      <div className='visa-form-input'>
        <TextField name='visaApplicationID' onChange={handleInput} required fullWidth label="Visa Application ID" variant="standard" />
      </div>
      <div className='mt-3 mb-2'>Medical Report</div>
          <FileUpload name="medicalReport" type="CHANGE_JOB_APPLICANTS_PASSPORT_INPUTS"/>
     
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

export default HomeInfo
