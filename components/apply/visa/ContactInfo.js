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

const ContactInfo = ({setLoading, setSuccess, handleBack}) => {
  const { state, dispatch } = useContext(DataContext);
  const {auth, visaApplicant} = state;
  const {
    frontPhotoOfIdCard,
    backPhotoOfIdCard,
    photo,
    signature,
  } = state.visaApplicant.personalInfo;
  
  const {
    passportDocument
  } = state.visaApplicant.passportInfo;
  
  const {
    marriageCertificate
  } = state.visaApplicant.visaProcessingInfo;
  
  const {
    ieltsDocument
  } = state.visaApplicant.home;
  
  const {
    bankStateDocument
  } = state.visaApplicant.bank;
  
  const {
    MedicalReportDocument
  } = state.visaApplicant.medical;

  const invalidDocument = (
    !frontPhotoOfIdCard ||
    !backPhotoOfIdCard ||
    !photo ||
    !signature ||
    !passportDocument ||
    !marriageCertificate ||
    !ieltsDocument ||
    !bankStateDocument ||
    !MedicalReportDocument
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
        type: 'CHANGE_VISA_APPLICANTS_CONTACT_INPUTS', 
        payload: {name: "phone", value: newValue}
      })
      setPhnValue(newValue);
    };
   
    const handleHomePhn = (newValue) => {
      dispatch({
        type: 'CHANGE_VISA_APPLICANTS_CONTACT_INPUTS', 
        payload: {name: "homePhone", value: newValue}
      })
      setHomePhnValue(newValue);
    };

  const handleInput = (e) => {
    dispatch({
      type: 'CHANGE_VISA_APPLICANTS_CONTACT_INPUTS', 
      payload: {name: e.target.name, value: e.target.value}
    })

  }

  const handleSubmit = async e => {
    e.preventDefault()
    
    let media
    // dispatch({ type: 'NOTIFY', payload: {loading: true} })
    setLoading(true)
    if (!invalidDocument) {
       media = await imageUpload([
       frontPhotoOfIdCard,
       backPhotoOfIdCard,
       photo,
       signature,
       passportDocument,
       marriageCertificate,
       ieltsDocument,
       bankStateDocument,
       MedicalReportDocument
    ])} else media = await imageUpload([
      frontPhotoOfIdCard,
      backPhotoOfIdCard,
      photo,
      signature,
      passportDocument,
      marriageCertificate,
      bankStateDocument,
      MedicalReportDocument
   ])
    

    const res = await postData('visaApplicants', { 
      ...visaApplicant,
      personalInfo: {
        ...visaApplicant.personalInfo,
        frontPhotoOfIdCard: media[0].url,
        backPhotoOfIdCard: media[1].url,
        photo: media[2].url,
        signature: media[3].url,
      },
      passportInfo: {
        ...visaApplicant.passportInfo,
        passportDocument: media[4].url,
      },
      visaProcessingInfo: {
        ...visaApplicant.visaProcessingInfo,
        marriageCertificate: media[5].url,
      },
      home: {
        ...visaApplicant.home,
        ieltsDocument: ieltsDocument? media[6].url : '',
      },
      bank: {
        ...visaApplicant.bank,
        bankStateDocument: ieltsDocument? media[7].url : media[6].url,
      },
      medical: {
        ...visaApplicant.medical,
        MedicalReportDocument: ieltsDocument? media[8].url : media[7].url,
      },
  })
    
    if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })
    setLoading(false)
    setSuccess(true)
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
