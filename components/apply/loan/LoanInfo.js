import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'

import React, { useContext, useEffect, useReducer, useRef, useState } from 'react'
import { toast } from 'react-toastify';
import { DataContext } from '../../../store/GlobalState';
import { getData } from '../../../utils/fetchData';
import InputModal from '../../InputModal';


const LoanInfo = ({totalCost, setTotalCost, setLoan, handleNext}) => {
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useContext(DataContext);
  const {auth} = state
  const {
    visaApplyID,
    jobApplyID,
    totalRS,
    loanAmount,
    amountOfMoney,
  } = state.loanApplicant.loanInfo;

  const emptyInput = (
    !visaApplyID ||
    !loanAmount
   
    )
    const [message, setMessage] = useState('')

      const getTotalCost = async() => {
        if (!visaApplyID) return
        setLoading(true)
        const res = await getData(
          `totalCost?visaApplyID=${visaApplyID}`, auth.token
        )
        console.log('res', res)
        if(res.err) {
          setLoading(false);
          setMessage(res.err) 
        } else {
          setLoading(false);
          setMessage(`Total Cost: $${res.totalCost}`)
          setTotalCost(res.totalCost)
        }
        
      }
    function percentageToActual () {
     const amountToApplyFor = ((parseInt(loanAmount)/100) * parseInt(totalCost)).toFixed(2);
     const invalidAmount = isNaN(amountToApplyFor);
     if (invalidAmount) return null;
     return amountToApplyFor;
    }
    const amountToApplyFor = percentageToActual()
    const handleNextPage = () => {
      if (emptyInput) return toast('Please fill out all the fieds!', {type: 'error'})
      setLoan(amountToApplyFor)
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
    useEffect(()=> {
      if (!visaApplyID) {
        setMessage('')
      }
    },[visaApplyID])

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
      
      <div className='visa-form-input'>
        <TextField name='visaApplyID' onChange={handleInput} onKeyUp={getTotalCost} required fullWidth label="Visa Apply ID" placeholder='Enter your visa apply ID' variant="outlined" />
      </div>
      <div className='visa-form-input'>
        <TextField name='jobApplyID' onChange={handleInput} onKeyUp={getTotalCost} required fullWidth label="Job Apply ID" placeholder='Enter your job apply ID' variant="outlined" />
      </div>
      <div className='mt-3'>Total Rs</div>
      <div className='visa-form-input mb-3'>
        {/* <TextField name='totalRS' required fullWidth variant="outlined" ref={totalRSField} />  */}
        <div className='loan-amount'>{loading? "loading..." : message? message: null}</div>
      </div>
      
      {totalCost &&
        <> 
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
      </>
      }
      {totalCost && loanAmount && 
      <>
      <div className='mt-3'>Amount of Money</div>
      <div className='visa-form-input'>
        {/* <TextField name='amountOfMoney' value={percentageToActual()} onChange={handleInput} required fullWidth disabled variant="outlined" /> */}
       <div className='loan-amount'>{amountToApplyFor}</div>
      </div>
      </>
      }
    
          <div className='mt-4 d-flex align-items-center justify-content-end'>

          
          
          <Button variant='contained' onClick={ parseInt(loanAmount) > 70? handleNotify: handleNextPage}>Next</Button>
        
          </div>
        </form>
    </React.Fragment>
  )
}

export default LoanInfo
