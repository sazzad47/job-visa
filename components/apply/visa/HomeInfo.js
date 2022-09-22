import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useContext, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs';
import FileUpload from './FileUpload';
import { DataContext } from '../../../store/GlobalState';

const HomeInfo = ({handleBack, handleNext}) => {
  const { state, dispatch } = useContext(DataContext);
  const {
    locatedAtHome,
    homeStreetAddress,
    homeStreetAddressLine2,
    homeCity,
    homeProvince,
    homePostal,
    homeStayDuration,
    familyDependentOn,
    currentJob,
    monthlyIncome,
    familyMember,
    educationalQualification,
    languages,
    ieltsScore,
    ieltsDocument,
  } = state.visaApplicant.home;

  const emptyInput = (
    !locatedAtHome ||
    !homeStreetAddress ||
    !homeStreetAddressLine2 ||
    !homeCity ||
    !homeProvince ||
    !homePostal ||
    !homeStayDuration ||
    !familyDependentOn ||
    !currentJob ||
    !monthlyIncome ||
    !familyMember ||
    !educationalQualification ||
    !languages ||
    !ieltsScore ||
    !ieltsDocument
    )
    const handleInput = (e) => {
      dispatch({
        type: 'CHANGE_VISA_APPLICANTS_HOME_INPUTS', 
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
      <FormLabel id="locatedAtHome">Located at the home address?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="locatedAtHome"
        name="locatedAtHome"
      >
        <FormControlLabel name='locatedAtHome' onChange={handleInput} value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel name='locatedAtHome' onChange={handleInput} value="No" control={<Radio />} label="No" />
        
      </RadioGroup>
      <div className='mt-3'>Your Current Position</div>
      <div className='visa-form-input'>
        <TextField name='homeStreetAddress' onChange={handleInput} required fullWidth label="Street Address" variant="outlined" />
      </div>
      
      <div className='visa-form-input'>
        <TextField name='homeStreetAddressLine2' onChange={handleInput} required fullWidth label="Street Address Line 2" variant="outlined" />
      </div>
      <div className='visa-form-input'>
        <TextField name='homeCity' onChange={handleInput} required fullWidth label="City" variant="outlined" />
      </div>
      <div className='visa-form-input'>
        <TextField name='homeProvince' onChange={handleInput} required fullWidth label="State/Province" variant="outlined" />
      </div>
      <div className='visa-form-input'>
        <TextField name='homePostal' onChange={handleInput} required fullWidth label="Postal/Zip Code" variant="outlined" />
      </div>
      <div className='mt-3'>How long you are in this address?</div>
      <div className='visa-form-input'>
        <TextField name='homeStayDuration' onChange={handleInput} required fullWidth variant="outlined" />
      </div>
      <FormLabel className='mt-3' id="familyDependentOn">Who does your family depend on?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="familyDependentOn"
        name="familyDependentOn"
      >
        <FormControlLabel name='familyDependentOn' onChange={handleInput} value="My father" control={<Radio />} label="My father" />
        <FormControlLabel name='familyDependentOn' onChange={handleInput} value="My mother" control={<Radio />} label="My mother" />
        <FormControlLabel name='familyDependentOn' onChange={handleInput} value="Myself" control={<Radio />} label="Myself" />
        <FormControlLabel name='familyDependentOn' onChange={handleInput} value="Other" control={<Radio />} label="Other" />
        
      </RadioGroup>
      <div className='mt-3'>What do you do now?</div>
      <div className='visa-form-input'>
        <TextField name='currentJob' onChange={handleInput} required fullWidth variant="outlined" />
      </div>
      <div className='mt-3'>How much is your monthly income?</div>
      <div className='visa-form-input'>
        <TextField name='monthlyIncome' onChange={handleInput} required fullWidth variant="outlined" />
      </div>
      <div className='mt-3'>How many people are in your family?</div>
      <div className='visa-form-input'>
        <TextField name='familyMember' onChange={handleInput} required fullWidth variant="outlined" />
      </div>
      <div className='mt-3'>Educational Qualification</div>
      <div className='visa-form-input'>
        <TextField name='educationalQualification' onChange={handleInput} required fullWidth variant="outlined" />
      </div>
      <div className='mt-3'>How many languages do you know?</div>
      <div className='visa-form-input'>
        <TextField name='languages' onChange={handleInput} required fullWidth variant="outlined" />
      </div>
      <div className='mt-3'>IELTS Score</div>
      <div className='visa-form-input'>
        <TextField
            name='ieltsScore'
            onChange={handleInput}
            select
            fullWidth
            label=""
            >
            <MenuItem value="No">No</MenuItem>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="5">5</MenuItem>
            <MenuItem value="6">6</MenuItem>
            <MenuItem value="7">7</MenuItem>
            <MenuItem value="8">8</MenuItem>
            <MenuItem value="9">9</MenuItem>
         </TextField>
        </div>
        <div className='mt-3 mb-2'>IELTS Document</div>
          <FileUpload name="ieltsDocument" type="CHANGE_VISA_APPLICANTS_HOME_INPUTS"/>
          <div className='mt-4 d-flex align-items-center justify-content-between'>
          <Button variant='contained' onClick={handleBack}>Back</Button>
          {emptyInput?
          <Button type='submit' variant='contained'>Next</Button>:
          <Button variant='contained' onClick={handleNext}>Next</Button>
        }
          </div>
        </form>
    </React.Fragment>
  )
}

export default HomeInfo
