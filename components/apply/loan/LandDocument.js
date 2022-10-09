import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useContext, useReducer, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs';
import FileUpload from '../visa/FileUpload';
import { DataContext } from '../../../store/GlobalState';
import { useRef } from 'react';
import InputModal from '../../InputModal';

const LandDocument = ({handleBack, handleNext}) => {
 
  const { state, dispatch } = useContext(DataContext);
  const {
    landLocation,
    landAmount,
    mediumOfGetting,
    plotNo,
    precursorDeathCertificate,
    inheritanceCertificate,
    houseLandDocuments,
    loanForm,
  } = state.loanApplicant.landDocument;

  const emptyInput = (
    !landLocation ||
    !landAmount ||
    !mediumOfGetting ||
    !plotNo ||
    !precursorDeathCertificate ||
    !inheritanceCertificate ||
    !houseLandDocuments ||
    !loanForm
    )

   
    const handleInput = (e) => {
      dispatch({
        type: 'CHANGE_LOAN_APPLICANTS_LAND_INPUTS', 
        payload: {name: e.target.name, value: e.target.value}
      })

    }

    const handleSubmit = (e) => {
     e.preventDefault();
    }
    console.log('state',state.visaApplicant)
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
      <div className='mt-3'>Where is the land located?</div>
      <div className='visa-form-input'>
        <TextField name='landLocation' onChange={handleInput} required fullWidth variant="outlined" />
      </div>
      <div className='mt-3'>What is the total amount of land?</div>
      <div className='visa-form-input'>
        <TextField name='landAmount' onChange={handleInput} required fullWidth variant="outlined" />
      </div>
      <div className='visa-form-input'>

      <FormLabel id="mediumOfGetting">How did you get this property?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="mediumOfGetting"
        name="mediumOfGetting"
      >
        <FormControlLabel name='mediumOfGetting' onChange={handleInput} value="Purchased property" control={<Radio />} label="Purchased property" />
        <FormControlLabel name='mediumOfGetting' onChange={handleInput} value="Father&#39;s property" control={<Radio />} label="Father&#39;s property" />
        <FormControlLabel name='mediumOfGetting' onChange={handleInput} value="Mother&#39;s property" control={<Radio />} label="Mother&#39;s property" />
        <FormControlLabel name='mediumOfGetting' onChange={handleInput} value="Grandfather&#39;s property" control={<Radio />} label="Grandfather&#39;s property" />
        <InputModal handleInput={handleInput} name="mediumOfGetting" label="How did you get this property?" placeholder="" />
      </RadioGroup>
      </div>
      <div className='visa-form-input'>
        <TextField name='plotNo' onChange={handleInput} required fullWidth label="Plot no" variant="outlined" />
      </div>
      
   
        {mediumOfGetting !== "Purchased property" && <> 
        <div className='mt-3 mb-2'>Death Certificate</div>
          <FileUpload accept="application/pdf" name="precursorDeathCertificate" type='CHANGE_LOAN_APPLICANTS_LAND_INPUTS'/>
        
        <div className='mt-3 mb-2'>Inheritance Certificate</div>
          <FileUpload accept="application/pdf" name="inheritanceCertificate" type='CHANGE_LOAN_APPLICANTS_LAND_INPUTS'/>
         </>}
        <div className='mt-3 mb-2'>Upload complete house land documents</div>
          <FileUpload accept="application/pdf" name="houseLandDocuments" type='CHANGE_LOAN_APPLICANTS_LAND_INPUTS'/>
        <div className='mt-3 mb-2'>Loan Form</div>
          <FileUpload accept="application/pdf" name="loanForm" type='CHANGE_LOAN_APPLICANTS_LAND_INPUTS'/>
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

export default LandDocument
