import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useContext, useReducer, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs';
import FileUpload from '../visa/FileUpload';
import { DataContext } from '../../../store/GlobalState';
import { useRef } from 'react';

const ApplicantInfo = ({handleBack, handleNext}) => {
 
  const { state, dispatch } = useContext(DataContext);
  const {
    idNumber,
    frontPhotoOfIdCard,
    backPhotoOfIdCard,
    photoOfApplicant,
    signature,
  } = state.loanApplicant.appliantInfo;

  const emptyInput = (
    !idNumber ||
    !frontPhotoOfIdCard ||
    !backPhotoOfIdCard ||
    !photoOfApplicant ||
    !signature
    )

   
    const handleInput = (e) => {
      dispatch({
        type: 'CHANGE_LOAN_APPLICANTS_INPUTS', 
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
        <TextField name='idNumber' onChange={handleInput} required fullWidth label="ID Card Number" placeholder='Enter your ID card number' variant="outlined" />
      </div>
        <div className='mt-3 mb-2'>Front Photo of your ID Card</div>
          <FileUpload name="frontPhotoOfIdCard" type='CHANGE_LOAN_APPLICANTS_INPUTS'/>
        <div className='mt-3 mb-2'>Back Photo of your ID Card</div>
          <FileUpload name="backPhotoOfIdCard" type='CHANGE_LOAN_APPLICANTS_INPUTS'/>
        <div className='mt-3 mb-2'>Your Photo</div>
          <FileUpload name="photoOfApplicant" type='CHANGE_LOAN_APPLICANTS_INPUTS'/>
        <div className='mt-3 mb-2'>Your Signature</div>
          <FileUpload name="signature" type='CHANGE_LOAN_APPLICANTS_INPUTS'/>
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

export default ApplicantInfo
