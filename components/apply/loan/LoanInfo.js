import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'

import React, { useContext, useReducer, useRef, useState } from 'react'
import { toast } from 'react-toastify';
import { DataContext } from '../../../store/GlobalState';
import InputModal from '../../InputModal';


const LoanInfo = ({setTotalCost, setLoan, handleNext}) => {
  
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
     function percentageToActual () {
      const amountToApplyFor = ((parseInt(loanAmount)/100) * parseInt(totalRS)).toFixed(2);
      const invalidAmount = isNaN(amountToApplyFor);
      if (invalidAmount) return null;
      return amountToApplyFor;
     }
    const handleNextPage = () => {
      setTotalCost()
      setLoan()
      handleNext()
    }
    const handleNotify = () => {
      toast("Sorry! You can't apply for more than 70% loan.", {type: 'error'})
    }
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
      <div className='mt-3'>Total Rs</div>
      <div className='visa-form-input mb-3'>
        {/* <TextField name='totalRS' required fullWidth variant="outlined" ref={totalRSField} />  */}
        <div className='loan-amount'>{totalRS}</div>
      </div>
      
      <FormLabel id="loanAmount">Loan Amount</FormLabel>
      <RadioGroup
        row
        aria-labelledby="loanAmount"
        name="loanAmount"
        required
        
      >
        <FormControlLabel name='loanAmount' onChange={handleInput} value="15" control={<Radio />} label="15%" />
        <FormControlLabel name='loanAmount' onChange={handleInput} value="25" control={<Radio />} label="25%" />
        <InputModal handleInput={handleInput} name="loanAmount" label="Loan Amount" placeholder="Ex. 30%" />
       
      </RadioGroup>
      <div className='mt-3'>Amount of Money</div>
      <div className='visa-form-input'>
        {/* <TextField name='amountOfMoney' value={percentageToActual()} onChange={handleInput} required fullWidth disabled variant="outlined" /> */}
       <div className='loan-amount'>{percentageToActual()}</div>
      </div>
    
          <div className='mt-4 d-flex align-items-center justify-content-end'>

          {emptyInput?
          <Button type='submit' variant='contained' onClick={handleNext}>Next</Button>:
          <Button variant='contained' onClick={ parseInt(loanAmount) > 70? handleNotify: handleNextPage}>Next</Button>
        }
          </div>
        </form>
    </React.Fragment>
  )
}

export default LoanInfo
