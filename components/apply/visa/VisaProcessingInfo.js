import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useContext, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs';
import FileUpload from './FileUpload';
import { countries } from './data';
import { DataContext } from '../../../store/GlobalState';

const VisaProcessingInfo = ({handleBack, handleNext}) => {
  const { state, dispatch } = useContext(DataContext);
  const {
    wishedCountry,
    visaType,
    marriageCertificate,
    wishedStayDuration,
    isWishingCitizenship,
  } = state.visaApplicant.visaProcessingInfo;

  const emptyInput = (
    !wishedCountry ||
    !visaType ||
    !marriageCertificate ||
    !wishedStayDuration ||
    !isWishingCitizenship
    )

    const handleInput = (e) => {
      dispatch({
        type: 'CHANGE_VISA_APPLICANTS_VISA_INPUTS', 
        payload: {name: e.target.name, value: e.target.value}
      })

    }

    const handleSubmit = (e) => {
     e.preventDefault();
    }
   
   
    const countryList = countries.map((country, index) => (
      <MenuItem key={index} value={country.name}>{country.name}</MenuItem>
    ))
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div>Name of the country you wish to visit</div>
      <div className='visa-form-input mb-3'>
        <TextField
            name="wishedCountry"
            onChange={handleInput}
            select
            fullWidth
            label=""
            >
            {countryList}
            
         </TextField>
        </div>
      <FormLabel id="visaType">Select your visa</FormLabel>
      <RadioGroup
        row
        aria-labelledby="visaType"
        name="visaType"
      >
        <FormControlLabel name='visaType' onChange={handleInput} value="Working Visa" control={<Radio />} label="Working Visa" />
        <FormControlLabel name='visaType' onChange={handleInput} value="Marriage Visa" control={<Radio />} label="Marriage Visa" />
        <FormControlLabel name='visaType' onChange={handleInput} value="Immigrant Visa" control={<Radio />} label="Immigrant Visa" />
        
      </RadioGroup>
      <div className='mt-3 mb-2'>Upload your marriage certificate</div>
          <FileUpload name="marriageCertificate" type="CHANGE_VISA_APPLICANTS_VISA_INPUTS"/>
          <FormLabel className='mt-4' id="wishedStayDuration">How many months/years do you want to stay?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="wishedStayDuration"
        name="wishedStayDuration"
      >
        <FormControlLabel name='wishedStayDuration' onChange={handleInput} value="7 months" control={<Radio />} label="7 months" />
        <FormControlLabel name='wishedStayDuration' onChange={handleInput} value="3 years" control={<Radio />} label="3 years" />
        <FormControlLabel name='wishedStayDuration' onChange={handleInput} value="other" control={<Radio />} label="other" />
        
      </RadioGroup>
      <FormLabel className='mt-4' id="isWishingCitizenship">Do you want to be citizen there?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="isWishingCitizenship"
        name="isWishingCitizenship"
      >
        <FormControlLabel name='isWishingCitizenship' onChange={handleInput} value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel name='isWishingCitizenship' onChange={handleInput} value="No" control={<Radio />} label="No" />
        
        
      </RadioGroup>
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

export default VisaProcessingInfo
