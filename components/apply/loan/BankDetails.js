import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useContext, useReducer, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs';
import FileUpload from '../visa/FileUpload';
import { DataContext } from '../../../store/GlobalState';
import { useRef } from 'react';

const BankDetails = ({handleBack, handleNext}) => {
 
  const { state, dispatch } = useContext(DataContext);
  const {
    bankName,
    accountIdNumber,
    bankBranchName,
    bankStatement,
  } = state.loanApplicant.bankDetails;

  const emptyInput = (
    !bankName ||
    !accountIdNumber ||
    !bankBranchName ||
    !bankStatement
    )

   
     
   
    const handleInput = (e) => {
      dispatch({
        type: 'CHANGE_LOAN_APPLICANTS_BANK_INPUTS', 
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
        <TextField name='bankName' onChange={handleInput} required fullWidth label="Bank Name" variant="outlined" />
      </div>
      <div className='visa-form-input'>
        <TextField name='accountIdNumber' onChange={handleInput} required fullWidth label="Account ID Number" variant="outlined" />
      </div>
      <div className='visa-form-input'>
        <TextField name='bankBranchName' onChange={handleInput} required fullWidth label="Bank Branch Name" variant="outlined" />
      </div>
     
        <div className='mt-3 mb-2'>Bank Statement</div>
          <FileUpload name="bankStatement" type='CHANGE_LOAN_APPLICANTS_BANK_INPUTS'/>
        
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

export default BankDetails
