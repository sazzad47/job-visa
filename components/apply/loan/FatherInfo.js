import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'

import React, { useContext, useReducer, useState } from 'react'

import FileUpload from '../visa/FileUpload';
import { DataContext } from '../../../store/GlobalState';


const FatherInfo = ({handleBack, handleNext}) => {
 
  const { state, dispatch } = useContext(DataContext);
  const {
    isFatherPresent,
    fatherDeathCertificate,
    fatherIdNumber,
    fatherFrontPhotoOfIdCard,
    fatherBackPhotoOfIdCard,
    photoOfFather,
    signatureOfFather,
  } = state.loanApplicant.fatherInfo;

  const emptyInput = (
    !isFatherPresent ||
    !fatherDeathCertificate ||
    !fatherIdNumber ||
    !fatherFrontPhotoOfIdCard ||
    !fatherBackPhotoOfIdCard ||
    !photoOfFather ||
    !signatureOfFather
    )

   
    const handleInput = (e) => {
      dispatch({
        type: 'CHANGE_LOAN_APPLICANTS_FATHER_INPUTS', 
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
      <FormLabel id="isFatherPresent">Father is</FormLabel>
      <RadioGroup
        row
        aria-labelledby="isFatherPresent"
        name="isFatherPresent"
        required
        
      >
        <FormControlLabel name='isFatherPresent' onChange={handleInput} value="yes" control={<Radio />} label="Alive and kicking" />
        <FormControlLabel name='isFatherPresent' onChange={handleInput} value="no" control={<Radio />} label="Dead" />
       
      </RadioGroup>
      <div className='mt-3 mb-2'>Death Certificate</div>
          <FileUpload accept="application/pdf" name="fatherDeathCertificate" type='CHANGE_LOAN_APPLICANTS_FATHER_INPUTS'/>
      <div className='visa-form-input'>
        <TextField name='fatherIdNumber' onChange={handleInput} required fullWidth label="ID Card Number" variant="outlined" />
      </div>
     
        <div className='mt-3 mb-2'>Front Photo of ID Card</div>
          <FileUpload accept="image/*" name="fatherFrontPhotoOfIdCard" type='CHANGE_LOAN_APPLICANTS_FATHER_INPUTS'/>
        <div className='mt-3 mb-2'>Back Photo of ID Card</div>
          <FileUpload accept="image/*" name="fatherBackPhotoOfIdCard" type='CHANGE_LOAN_APPLICANTS_FATHER_INPUTS'/>
        <div className='mt-3 mb-2'>Father&#39;s Photo</div>
          <FileUpload accept="image/*" name="photoOfFather" type='CHANGE_LOAN_APPLICANTS_FATHER_INPUTS'/>
        <div className='mt-3 mb-2'>Signature</div>
          <FileUpload accept="image/*" name="signatureOfFather" type='CHANGE_LOAN_APPLICANTS_FATHER_INPUTS'/>
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

export default FatherInfo
