import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'

import React, { useContext, useReducer, useState } from 'react'

import { DataContext } from '../../../store/GlobalState';


const LoanInfo = ({handleNext}) => {
 
  const { state, dispatch } = useContext(DataContext);
  const {
    visaApplyID,
    jobApplyID,
    totalRS,
    loanAmount,
    amountOfMoney,
  } = state.loanApplicant.loanInfo;

  const emptyInput = (
    !visaApplyID ||
    !jobApplyID ||
    !totalRS ||
    !loanAmount ||
    !amountOfMoney 
    )

   
   
    const handleInput = (e) => {
      dispatch({
        type: 'CHANGE_LOAN_APPLICANTS_LOAN_INPUTS', 
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
        <TextField name='visaApplyID' onChange={handleInput} required fullWidth label="Visa Apply ID" placeholder='Enter your visa apply ID' variant="outlined" />
      </div>
      <div className='visa-form-input'>
        <TextField name='jobApplyID' onChange={handleInput} required fullWidth label="Job Apply ID" placeholder='Enter your job apply ID' variant="outlined" />
      </div>
      <div className='visa-form-input'>
        <TextField name='totalRS' onChange={handleInput} required fullWidth label="Total Rs" variant="outlined" />
      </div>
      <div className='visa-form-input'>
        <TextField name='loanAmount' onChange={handleInput} required fullWidth label="Loan Amount" placeholder="Enter loan amount" variant="outlined" />
      </div>
      <div className='visa-form-input'>
        <TextField name='amountOfMoney' onChange={handleInput} required fullWidth label="Amount of Money" variant="outlined" />
      </div>
    
          <div className='mt-4 d-flex align-items-center justify-content-end'>

          {emptyInput?
          <Button type='submit' variant='contained' onClick={handleNext}>Next</Button>:
          <Button variant='contained' onClick={handleNext}>Next</Button>
        }
          </div>
        </form>
    </React.Fragment>
  )
}

export default LoanInfo
