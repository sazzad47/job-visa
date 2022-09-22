import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useContext, useReducer, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs';
import FileUpload from './FileUpload';
import { DataContext } from '../../../store/GlobalState';
import { useRef } from 'react';

const PersonalInfo = ({handleNext}) => {
 
  const { state, dispatch } = useContext(DataContext);
  const {
    IdentityCard,
    IdCardNumber,
    fullName,
    fathersName,
    mothersName,
    streetAddress,
    streetAddressLine2,
    city,
    province,
    postal,
    gender,
    dateOfBirth,
    dateOfIdCardIssue,
    religion,
    nationality,
    bloodGroup,
    maritalStatus,
    frontPhotoOfIdCard,
    backPhotoOfIdCard,
    photo,
    signature
  } = state.visaApplicant.personalInfo;

  const emptyInput = (
    !IdentityCard ||
    !IdCardNumber ||
    !fullName ||
    !fathersName ||
    !mothersName ||
    !streetAddress ||
    !streetAddressLine2 ||
    !city ||
    !province ||
    !postal ||
    !gender ||
    !dateOfBirth ||
    !dateOfIdCardIssue ||
    !religion ||
    !nationality ||
    !bloodGroup ||
    !maritalStatus ||
    !frontPhotoOfIdCard ||
    !backPhotoOfIdCard ||
    !photo ||
    !signature
    )

   
      const [dob, setDob] = useState(null);
      const [doi, setDoi] = useState(null);
    
      const handleDateOfBirth = (newValue) => {
      dispatch({
        type: 'CHANGE_VISA_APPLICANTS_PERSONAL_INPUTS', 
        payload: {name: "dateOfBirth", value: newValue}
      })
      setDob(newValue);
    };
   
    const handleDateOfIssue = (newValue) => {
      dispatch({
        type: 'CHANGE_VISA_APPLICANTS_PERSONAL_INPUTS', 
        payload: {name: "dateOfIdCardIssue", value: newValue}
      })
      setDoi(newValue);
    };
   
    const handleInput = (e) => {
      dispatch({
        type: 'CHANGE_VISA_APPLICANTS_PERSONAL_INPUTS', 
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
      <FormLabel id="identityCard">Identity Card</FormLabel>
      <RadioGroup
        row
        aria-labelledby="identityCard"
        name="identityCard"
        required
        
      >
        <FormControlLabel name='IdentityCard' onChange={handleInput} value="National ID Card" control={<Radio />} label="National ID Card" />
        <FormControlLabel name='IdentityCard' onChange={handleInput} value="Passport" control={<Radio />} label="Passport" />
        <FormControlLabel name='IdentityCard' onChange={handleInput} value="Birth Certificate" control={<Radio />} label="Birth Certificate" />
        <FormControlLabel name='IdentityCard' onChange={handleInput} value="Other" control={<Radio />} label="Other" />
      </RadioGroup>
      <div className='visa-form-input'>
        <TextField name='IdCardNumber' onChange={handleInput} required fullWidth label="ID Card Number" placeholder='Enter your ID card number' variant="outlined" />
      </div>
      <div className='visa-form-input'>
        <TextField name='fullName' onChange={handleInput} required fullWidth label="Full Name" placeholder='Enter your full name' variant="outlined" />
      </div>
      <div className='visa-form-input'>
        <TextField name='fathersName' onChange={handleInput} required fullWidth label="Father's Name" placeholder="Enter your father's name" variant="outlined" />
      </div>
      <div className='visa-form-input'>
        <TextField name='mothersName' onChange={handleInput} required fullWidth label="Mother's Name" placeholder="Enter your mother's name" variant="outlined" />
      </div>
      <div className='mt-3'>Address</div>
      <div className='visa-form-input'>
        <TextField name='streetAddress' onChange={handleInput} required fullWidth label="Street Address" variant="outlined" />
      </div>
      
      <div className='visa-form-input'>
        <TextField name='streetAddressLine2' onChange={handleInput} required fullWidth label="Street Address Line 2" variant="outlined" />
      </div>
      <div className='visa-form-input'>
        <TextField name='city' onChange={handleInput} required fullWidth label="City" variant="outlined" />
      </div>
      <div className='visa-form-input'>
        <TextField name='province' onChange={handleInput} required fullWidth label="State/Province" variant="outlined" />
      </div>
      <div className='visa-form-input'>
        <TextField name='postal' onChange={handleInput} required fullWidth label="Postal/Zip Code" variant="outlined" />
      </div>
      <div className='visa-form-input'>

      <FormLabel id="gender">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="gender"
        name="gender"
      >
        <FormControlLabel name='gender' onChange={handleInput} value="Male" control={<Radio />} label="Male" />
        <FormControlLabel name='gender' onChange={handleInput} value="Female" control={<Radio />} label="Female" />
        <FormControlLabel name='gender' onChange={handleInput} value="Other" control={<Radio />} label="Other" />
        
      </RadioGroup>
      </div>
     
      
      <div className='visa-form-input d-flex justify-content-between'>
       
         <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DesktopDatePicker
          label="Date of Birth"
          inputFormat="MM/DD/YYYY"
          value={dob}
          onChange={handleDateOfBirth}
          renderInput={(params) => <TextField fullWidth {...params} />}
        />
         </LocalizationProvider>
         </div>
      
      
      <div className='visa-form-input d-flex justify-content-between'>
       
         <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DesktopDatePicker
          label="Date of Issue"
          inputFormat="MM/DD/YYYY"
          value={doi}
          onChange={handleDateOfIssue}
          renderInput={(params) => <TextField fullWidth {...params} />}
        />
         </LocalizationProvider>
         </div>
         <div className='visa-form-input'>
           <TextField name='religion' onChange={handleInput} required fullWidth label="Religion" variant="outlined" />
        </div>
         <div className='visa-form-input'>
           <TextField name='nationality' onChange={handleInput} required fullWidth label="Nationality" variant="outlined" />
        </div>
      <div className='visa-form-input'>
        <TextField
            name='bloodGroup' 
            onChange={handleInput}
            select
            fullWidth
            label="Blood Group"
            >
            <MenuItem value="A+">A+</MenuItem>
            <MenuItem value="A-">A-</MenuItem>
            <MenuItem value="B+">B+</MenuItem>
            <MenuItem value="B-">B-</MenuItem>
            <MenuItem value="AB+">AB+</MenuItem>
            <MenuItem value="AB-">AB-</MenuItem>
            <MenuItem value="O+">O+</MenuItem>
            <MenuItem value="O-">O-</MenuItem>
         </TextField>
        </div>
        <div className='visa-form-input'>
            <FormLabel id="maritalStatus">Marital Status</FormLabel>
            <RadioGroup
                row
                aria-labelledby="maritalStatus"
                name="maritalStatus"
            >
                <FormControlLabel name='maritalStatus' onChange={handleInput} value="Single" control={<Radio />} label="Single" />
                <FormControlLabel name='maritalStatus' onChange={handleInput} value="Married" control={<Radio />} label="Married" />
                <FormControlLabel name='maritalStatus' onChange={handleInput} value="Divorced" control={<Radio />} label="Divorced" />
                <FormControlLabel name='maritalStatus' onChange={handleInput} value="Widow(er)" control={<Radio />} label="Widow(er)" />
            </RadioGroup>
        </div>
        <div className='mt-3 mb-2'>Front Photo of your ID Card</div>
          <FileUpload name="frontPhotoOfIdCard" type='CHANGE_VISA_APPLICANTS_PERSONAL_INPUTS'/>
        <div className='mt-3 mb-2'>Back Photo of your ID Card</div>
          <FileUpload name="backPhotoOfIdCard" type='CHANGE_VISA_APPLICANTS_PERSONAL_INPUTS'/>
        <div className='mt-3 mb-2'>Your Photo</div>
          <FileUpload name="photo" type='CHANGE_VISA_APPLICANTS_PERSONAL_INPUTS'/>
        <div className='mt-3 mb-2'>Your Signature</div>
          <FileUpload name="signature" type='CHANGE_VISA_APPLICANTS_PERSONAL_INPUTS'/>
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

export default PersonalInfo
