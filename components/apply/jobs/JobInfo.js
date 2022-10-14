import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useContext, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs';
import FileUpload from './FileUpload';
import { DataContext } from '../../../store/GlobalState';
import { toast } from 'react-toastify';

const BankStatement = ({handleBack, handleNext}) => {
  const { state, dispatch } = useContext(DataContext);
  const {
    fJobCountry,
    fJobNo,
    fJobSL,
    fJobName,
    fJobExperience,
    fJobExperienceCertificate,
    sJobCountry,
    sJobNo,
    sJobSL,
    sJobName,
    sJobExperience,
    sJobExperienceCertificate,
    tJobCountry,
    tJobNo,
    tJobSL,
    tJobName,
    tJobExperience,
    tJobExperienceCertificate,
    foJobCountry,
    foJobNo,
    foJobSL,
    foJobName,
    foJobExperience,
    foJobExperienceCertificate,
  } = state.jobApplicant.jobInfo;

  const emptyInput = (
    !fJobCountry ||
    !fJobNo ||
    !fJobSL ||
    !fJobName ||
    !fJobExperience ||
    !fJobExperienceCertificate ||
    !sJobCountry ||
    !sJobNo ||
    !sJobSL ||
    !sJobName ||
    !sJobExperience ||
    !sJobExperienceCertificate ||
    !tJobCountry ||
    !tJobNo ||
    !tJobSL ||
    !tJobName ||
    !tJobExperience ||
    !tJobExperienceCertificate ||
    !foJobCountry ||
    !foJobNo ||
    !foJobSL ||
    !foJobName ||
    !foJobExperience ||
    !foJobExperienceCertificate
    
    )
    
   
    
   
    const handleInput = (e) => {
      dispatch({
        type: 'CHANGE_JOB_APPLICANTS_JOB_INPUTS', 
        payload: {name: e.target.name, value: e.target.value}
      })

    }
    const handleChangeStep = () => {
      if (emptyInput) return toast('Please fill out all the fieds!', {type: 'error'})
      handleNext()
    }
    const handleSubmit = (e) => {
     e.preventDefault();
    }
    console.log('state',state)

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} style={{minWidth:'100%'}}>
      <Typography>First Choice Job</Typography>
      <div className=''>
        <TextField name='fJobCountry' onChange={handleInput} required fullWidth label="Job Country Name" variant="standard" />
      </div>
      <div className='visa-form-input'>
        <TextField name='fJobNo' onChange={handleInput} required fullWidth label="Job Post No." variant="standard" />
      </div>
      <div className='visa-form-input'>
        <TextField name='fJobSL' onChange={handleInput} required fullWidth label="Job SL No." variant="standard" />
      </div>
      <div className='visa-form-input'>
        <TextField name='fJobName' onChange={handleInput} required fullWidth label="Job Name" variant="standard" />
      </div>
      <div className='visa-form-input'>
        <TextField name='fJobExperience' onChange={handleInput} required fullWidth label="How many years of experience do you have?" variant="standard" />
      </div>
      <div className='mt-3 mb-2'>Job Experience Certificate</div>
          <FileUpload accept="application/pdf" name="fJobExperienceCertificate" type="CHANGE_JOB_APPLICANTS_JOB_INPUTS"/>
      <Typography className='mt-5'>Second Choice Job</Typography>
      <div className=''>
        <TextField name='sJobCountry' onChange={handleInput} required fullWidth label="Job Country Name" variant="standard" />
      </div>
      <div className='visa-form-input'>
        <TextField name='sJobNo' onChange={handleInput} required fullWidth label="Job Post No." variant="standard" />
      </div>
      <div className='visa-form-input'>
        <TextField name='sJobSL' onChange={handleInput} required fullWidth label="Job SL No." variant="standard" />
      </div>
      <div className='visa-form-input'>
        <TextField name='sJobName' onChange={handleInput} required fullWidth label="Job Name" variant="standard" />
      </div>
      <div className='visa-form-input'>
        <TextField name='sJobExperience' onChange={handleInput} required fullWidth label="How many years of experience do you have?" variant="standard" />
      </div>
      <div className='mt-3 mb-2'>Job Experience Certificate</div>
          <FileUpload accept="application/pdf" name="sJobExperienceCertificate" type="CHANGE_JOB_APPLICANTS_JOB_INPUTS"/>
      <Typography className='mt-5'>Third Choice Job</Typography>
      <div className=''>
        <TextField name='tJobCountry' onChange={handleInput} required fullWidth label="Job Country Name" variant="standard" />
      </div>
      <div className='visa-form-input'>
        <TextField name='tJobNo' onChange={handleInput} required fullWidth label="Job Post No." variant="standard" />
      </div>
      <div className='visa-form-input'>
        <TextField name='tJobSL' onChange={handleInput} required fullWidth label="Job SL No." variant="standard" />
      </div>
      <div className='visa-form-input'>
        <TextField name='tJobName' onChange={handleInput} required fullWidth label="Job Name" variant="standard" />
      </div>
      <div className='visa-form-input'>
        <TextField name='tJobExperience' onChange={handleInput} required fullWidth label="How many years of experience do you have?" variant="standard" />
      </div>
      <div className='mt-3 mb-2'>Job Experience Certificate</div>
          <FileUpload accept="application/pdf" name="tJobExperienceCertificate" type="CHANGE_JOB_APPLICANTS_JOB_INPUTS"/>
      <Typography className='mt-5'>Fourth Choice Job</Typography>
      <div className=''>
        <TextField name='foJobCountry' onChange={handleInput} required fullWidth label="Job Country Name" variant="standard" />
      </div>
      <div className='visa-form-input'>
        <TextField name='foJobNo' onChange={handleInput} required fullWidth label="Job Post No." variant="standard" />
      </div>
      <div className='visa-form-input'>
        <TextField name='foJobSL' onChange={handleInput} required fullWidth label="Job SL No." variant="standard" />
      </div>
      <div className='visa-form-input'>
        <TextField name='foJobName' onChange={handleInput} required fullWidth label="Job Name" variant="standard" />
      </div>
      <div className='visa-form-input'>
        <TextField name='foJobExperience' onChange={handleInput} required fullWidth label="How many years of experience do you have?" variant="standard" />
      </div>
      <div className='mt-3 mb-2'>Job Experience Certificate</div>
          <FileUpload accept="application/pdf" name="foJobExperienceCertificate" type="CHANGE_JOB_APPLICANTS_JOB_INPUTS"/>
       <div className='mt-4 d-flex align-items-center justify-content-between'>
          <Button variant='contained' onClick={handleBack}>Back</Button>
      
          <Button type='submit' variant='contained' onClick={handleChangeStep}>Next</Button>
          
        
          </div>
        </form>
    </React.Fragment>
  )
}

export default BankStatement
