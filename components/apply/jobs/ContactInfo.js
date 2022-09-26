import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useContext, useRef, useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {Row } from 'reactstrap';
import { DataContext } from '../../../store/GlobalState';
import { postData } from '../../../utils/fetchData';
import {imageUpload} from '../../../utils/imageUpload';

const ContactInfo = ({handleBack}) => {
  const { state, dispatch } = useContext(DataContext);
  const {auth, jobApplicant} = state;
  
  const {
    fJobExperienceCertificate,
    sJobExperienceCertificate,
    tJobExperienceCertificate,
    foJobExperienceCertificate,
  } = state.jobApplicant.jobInfo;
  
  const {
    photo,
    signature
  } = state.jobApplicant.appliantInfo;
  
  const {
    medicalReport
  } = state.jobApplicant.passportVisaDetails;
 

  const invalidDocument = (
    !fJobExperienceCertificate ||
    !sJobExperienceCertificate ||
    !tJobExperienceCertificate ||
    !foJobExperienceCertificate ||
    !photo ||
    !signature ||
    !medicalReport
    )
  const [phnValue, setPhnValue] = useState(null);
  const [homePhnValue, setHomePhnValue] = useState(null);
  const recaptcha = useRef(null);
  const [isHuman, setIsHuman] = useState(false)
  
  function onChange(value) {
    setIsHuman(true)
  }

     
    
      const handlePhn = (newValue) => {
      dispatch({
        type: 'CHANGE_JOB_APPLICANTS_CONTACT_INPUTS', 
        payload: {name: "phoneNumber", value: newValue}
      })
      setPhnValue(newValue);
    };
   
    const handleHomePhn = (newValue) => {
      dispatch({
        type: 'CHANGE_JOB_APPLICANTS_CONTACT_INPUTS', 
        payload: {name: "homePhoneNumber", value: newValue}
      })
      setHomePhnValue(newValue);
    };

  const handleInput = (e) => {
    dispatch({
      type: 'CHANGE_JOB_APPLICANTS_CONTACT_INPUTS', 
      payload: {name: e.target.name, value: e.target.value}
    })

  }

  const handleSubmit = async e => {
    e.preventDefault()
    
    let media
    dispatch({ type: 'NOTIFY', payload: {loading: true} })
    
    if(!invalidDocument) media = await imageUpload([
      fJobExperienceCertificate,
      sJobExperienceCertificate,
      tJobExperienceCertificate,
      foJobExperienceCertificate,
      photo,
      signature,
      medicalReport
    ])
    

    const res = await postData('jobApplicants', { 
      ...jobApplicant,
      jobInfo: {
        ...jobApplicant.jobInfo,
        fJobExperienceCertificate: media[0].url,
        sJobExperienceCertificate: media[1].url,
        tJobExperienceCertificate: media[2].url,
        foJobExperienceCertificate: media[3].url,
      },
      appliantInfo: {
        ...jobApplicant.appliantInfo,
        photo: media[4].url,
        signature: media[5].url,
      },
      passportVisaDetails: {
        ...jobApplicant.passportVisaDetails,
        medicalReport: media[6].url,
      },
  })
    
    if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })

    return dispatch({ type: 'NOTIFY', payload: {success: res.msg} })
  }

  

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} style={{minWidth:'100%'}}>
      <div className='mt-3'>Email</div>
      <div className='visa-form-input'>
        <TextField name='email' onChange={handleInput} required fullWidth variant="outlined" />
      </div>
      
      <div className='mt-3'>Phone Number</div>
      <div className='mt-3'>

      <PhoneInput
      placeholder="Enter phone number"
      
      value={phnValue}
      onChange={handlePhn}
      required
      />
      </div>
      <div className='mt-3'>Home Phone Number</div>
      <div className='mt-3'>

      <PhoneInput
      placeholder="Enter your home phone number"
      
      value={homePhnValue}
      onChange={handleHomePhn}
      required
      />
      </div>
       <Row className="d-flex mt-3">
        <div className='d-flex align-items-center justify-content-start mb-2'>
          <Typography>Verify that you are not a robot</Typography>
        </div>
      <div className='recap d-none d-md-block'>

      <ReCAPTCHA
       ref={recaptcha}
       sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
       onChange={onChange}
      
         />
      </div>
      <div className='d-block d-md-none'>

      <ReCAPTCHA
       ref={recaptcha}
       sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
       onChange={onChange}
      
         />
      </div>
       </Row>
       <div className='mt-4 d-flex align-items-center justify-content-between'>
          <Button  variant='contained' onClick={handleBack}>Back</Button>
          
          <Button disabled={!isHuman} type='submit' variant='contained'>Submit</Button>
         
      
        </div>
        </form>
    </React.Fragment>
  )
}

export default ContactInfo
