import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'

import React, { useContext,} from 'react'

import FileUpload from '../visa/FileUpload';
import { DataContext } from '../../../store/GlobalState';


const MotherInfo = ({handleBack, handleNext}) => {
 
  const { state, dispatch } = useContext(DataContext);
  const {
    isMotherPresent,
    motherDeathCertificate,
    motherIdNumber,
    motherFrontPhotoOfIdCard,
    motherBackPhotoOfIdCard,
    photoOfMother,
    signatureOfMother,
  } = state.loanApplicant.motherInfo;

  const emptyInput = (
    !isMotherPresent ||
    !motherDeathCertificate ||
    !motherIdNumber ||
    !motherFrontPhotoOfIdCard ||
    !motherBackPhotoOfIdCard ||
    !photoOfMother ||
    !signatureOfMother
    )

   
    const handleInput = (e) => {
      dispatch({
        type: 'CHANGE_LOAN_APPLICANTS_MOTHER_INPUTS', 
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
      <FormLabel id="isMotherPresent">Mother is</FormLabel>
      <RadioGroup
        row
        aria-labelledby="isMotherPresent"
        name="isMotherPresent"
        required
        
      >
        <FormControlLabel name='isMotherPresent' onChange={handleInput} value="yes" control={<Radio />} label="Alive and kicking" />
        <FormControlLabel name='isMotherPresent' onChange={handleInput} value="no" control={<Radio />} label="Dead" />
       
      </RadioGroup>
      {isMotherPresent ==='no'? <> <div className='mt-3 mb-2'>Death Certificate</div>
          <FileUpload name="motherDeathCertificate" type='CHANGE_LOAN_APPLICANTS_MOTHER_INPUTS'/></>:null}
      <div className='visa-form-input'>
        <TextField name='motherIdNumber' onChange={handleInput} required fullWidth label="ID Card Number" variant="outlined" />
      </div>
     
        <div className='mt-3 mb-2'>Front Photo of ID Card</div>
          <FileUpload name="motherFrontPhotoOfIdCard" type='CHANGE_LOAN_APPLICANTS_MOTHER_INPUTS'/>
        <div className='mt-3 mb-2'>Back Photo of ID Card</div>
          <FileUpload name="motherBackPhotoOfIdCard" type='CHANGE_LOAN_APPLICANTS_MOTHER_INPUTS'/>
        <div className='mt-3 mb-2'>Mother&#39;s Photo</div>
          <FileUpload name="photoOfMother" type='CHANGE_LOAN_APPLICANTS_MOTHER_INPUTS'/>
        <div className='mt-3 mb-2'>Signature</div>
          <FileUpload name="signatureOfMother" type='CHANGE_LOAN_APPLICANTS_MOTHER_INPUTS'/>
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

export default MotherInfo
