import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useContext, useReducer, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs';
import FileUpload from './FileUpload';
import { DataContext } from '../../../store/GlobalState';
import { countries } from '../visa/data';
import InputModal from '../../InputModal';


const PersonalInfo = ({handleBack, handleNext}) => {
 
  const { state, dispatch } = useContext(DataContext);
  const {
    languages,
    nationality,
    nidCard,
    fullName,
    fathersName,
    mothersName,
    streetAddress,
    streetAddressLine2,
    city,
    province,
    postal,
    country,
    dateOfBirth,
    photo,
    signature,
  } = state.jobApplicant.appliantInfo;

  const emptyInput = (
    !languages ||
    !nationality ||
    !nidCard ||
    !fullName ||
    !fathersName ||
    !mothersName ||
    !streetAddress ||
    !streetAddressLine2 ||
    !city ||
    !province ||
    !postal ||
    !country ||
    !dateOfBirth ||
    !photo ||
    !signature
    )

   
      const [dob, setDob] = useState(null);
    
    
      const handleDateOfBirth = (newValue) => {
      dispatch({
        type: 'CHANGE_JOB_APPLICANTS_INPUTS', 
        payload: {name: "dateOfBirth", value: newValue}
      })
      setDob(newValue);
    };
   
    
   
    const handleInput = (e) => {
      dispatch({
        type: 'CHANGE_JOB_APPLICANTS_INPUTS', 
        payload: {name: e.target.name, value: e.target.value}
      })

    }

    const handleSubmit = (e) => {
     e.preventDefault();
    }
    console.log('state',state)

    const countryList = countries.map((country, index) => (
      <MenuItem key={index} value={country.name}>{country.name}</MenuItem>
    ))
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
      <FormLabel id="languages">How many languages do you know?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="languages"
        name="languages"
      >
        <FormControlLabel name='languages' onChange={handleInput} value="English" control={<Radio />} label="English" />
        <FormControlLabel name='languages' onChange={handleInput} value="Hindi" control={<Radio />} label="Hindi" />
        <InputModal handleInput={handleInput} name="languages" label="How many languages do you know?" placeholder="" />
      </RadioGroup>
      
      <div className='visa-form-input'>
        <TextField name='nationality' onChange={handleInput} required fullWidth label="What is your nationality?" variant="standard" />
      </div>
      <div className='visa-form-input'>
        <TextField name='nidCard' onChange={handleInput} required fullWidth label="National ID card Number" variant="standard" />
      </div>
      <div className='visa-form-input'>
        <TextField name='fullName' onChange={handleInput} required fullWidth label="Full Name" variant="standard" />
      </div>
      <div className='visa-form-input'>
        <TextField name='fathersName' onChange={handleInput} required fullWidth label="Father&rsquo;s Name" variant="standard" />
      </div>
      <div className='visa-form-input'>
        <TextField name='mothersName' onChange={handleInput} required fullWidth label="Mother&rsquo;s Name" variant="standard" />
      </div>
      <div className='mt-3'>Address</div>
      <div className=''>
        <TextField name='streetAddress' onChange={handleInput} required fullWidth label="Street Address" variant="standard" />
      </div>
      
      <div className='visa-form-input'>
        <TextField name='streetAddressLine2' onChange={handleInput} required fullWidth label="Street Address Line 2" variant="standard" />
      </div>
      <div className='visa-form-input'>
        <TextField name='city' onChange={handleInput} required fullWidth label="City" variant="standard" />
      </div>
      <div className='visa-form-input'>
        <TextField name='province' onChange={handleInput} required fullWidth label="State/Province" variant="standard" />
      </div>
      <div className='visa-form-input'>
        <TextField name='postal' onChange={handleInput} required fullWidth label="Postal/Zip Code" variant="standard" />
      </div>
      <div className='visa-form-input'>
        <TextField
            name="country"
            onChange={handleInput}
            select
            fullWidth
            label="Country"
            variant='standard'
            
            >
            {countryList}
            
         </TextField>
        </div>
        <div className='visa-form-input d-flex justify-content-between'>
       
         <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DesktopDatePicker
          
          label="Date of Birth"
          inputFormat="MM/DD/YYYY"
          value={dob}
          onChange={handleDateOfBirth}
          renderInput={(params) => <TextField variant='standard' fullWidth {...params} />}
        />
         </LocalizationProvider>
         </div>
         <div className='mt-3 mb-2'>Your Photo</div>
          <FileUpload accept="image/*" name="photo" type='CHANGE_JOB_APPLICANTS_INPUTS'/>
         <div className='mt-3 mb-2'>Your Signature</div>
           <FileUpload accept="image/*" name="signature" type='CHANGE_JOB_APPLICANTS_INPUTS'/>
       
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

export default PersonalInfo
