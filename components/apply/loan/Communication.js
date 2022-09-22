import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextareaAutosize, TextField, Typography } from '@mui/material'
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

const Communication = ({handleBack}) => {
  const { state, dispatch } = useContext(DataContext);
  const {auth, loanApplicant} = state;
  const {
    frontPhotoOfIdCard,
    backPhotoOfIdCard,
    photoOfApplicant,
    signature,
  } = state.loanApplicant.appliantInfo;
  
  const {
    fatherDeathCertificate,
    fatherFrontPhotoOfIdCard,
    fatherBackPhotoOfIdCard,
    photoOfFather,
    signatureOfFather,
  } = state.loanApplicant.fatherInfo;
  
  const {
    motherDeathCertificate,
    motherFrontPhotoOfIdCard,
    motherBackPhotoOfIdCard,
    photoOfMother,
    signatureOfMother,
  } = state.loanApplicant.motherInfo;
  
  const {
    precursorDeathCertificate,
    inheritanceCertificate,
    houseLandDocuments,
    loanForm,
  } = state.loanApplicant.landDocument;
  
  const {
    bankStatement
  } = state.loanApplicant.bankDetails;
  
 
  const invalidDocument = (
    !frontPhotoOfIdCard ||
    !backPhotoOfIdCard ||
    !photoOfApplicant ||
    !signature ||
    !fatherDeathCertificate ||
    !fatherFrontPhotoOfIdCard ||
    !fatherBackPhotoOfIdCard ||
    !photoOfFather ||
    !signatureOfFather ||
    !motherDeathCertificate ||
    !motherFrontPhotoOfIdCard ||
    !motherBackPhotoOfIdCard ||
    !photoOfMother ||
    !signatureOfMother ||
    !precursorDeathCertificate ||
    !inheritanceCertificate ||
    !houseLandDocuments ||
    !loanForm ||
    !bankStatement
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
        type: 'CHANGE_LOAN_APPLICANTS_COMMUNICATION_INPUTS', 
        payload: {name: "phoneNumber", value: newValue}
      })
      setPhnValue(newValue);
    };
   
    const handleHomePhn = (newValue) => {
      dispatch({
        type: 'CHANGE_LOAN_APPLICANTS_COMMUNICATION_INPUTS', 
        payload: {name: "homePhoneNumber", value: newValue}
      })
      setHomePhnValue(newValue);
    };

  const handleInput = (e) => {
    dispatch({
      type: 'CHANGE_LOAN_APPLICANTS_COMMUNICATION_INPUTS', 
      payload: {name: e.target.name, value: e.target.value}
    })

  }

  const handleSubmit = async e => {
    e.preventDefault()
    
    let media
    dispatch({ type: 'NOTIFY', payload: {loading: true} })
    
    if(!invalidDocument) media = await imageUpload([
        frontPhotoOfIdCard,
        backPhotoOfIdCard,
        photoOfApplicant,
        signature,
        fatherDeathCertificate,
        fatherFrontPhotoOfIdCard,
        fatherBackPhotoOfIdCard,
        photoOfFather,
        signatureOfFather,
        motherDeathCertificate,
        motherFrontPhotoOfIdCard,
        motherBackPhotoOfIdCard,
        photoOfMother,
        signatureOfMother,
        precursorDeathCertificate,
        inheritanceCertificate,
        houseLandDocuments,
        loanForm,
        bankStatement
    ])
    

    const res = await postData('apply/loan', { 
      ...loanApplicant,
      appliantInfo: {
        ...loanApplicant.appliantInfo,
        frontPhotoOfIdCard: media[0].url,
        backPhotoOfIdCard: media[1].url,
        photoOfApplicant: media[2].url,
        signature: media[3].url,
      },
      fatherInfo: {
        ...loanApplicant.fatherInfo,
        fatherDeathCertificate: media[4].url,
        fatherFrontPhotoOfIdCard: media[5].url,
        fatherBackPhotoOfIdCard: media[6].url,
        photoOfFather: media[7].url,
        signatureOfFather: media[8].url,
      },
      motherInfo: {
        ...loanApplicant.motherInfo,
        motherDeathCertificate: media[9].url,
        motherFrontPhotoOfIdCard: media[10].url,
        motherBackPhotoOfIdCard: media[11].url,
        photoOfMother: media[12].url,
        signatureOfMother: media[13].url,
      },
      landDocument: {
        ...loanApplicant.landDocument,
        precursorDeathCertificate: media[14].url,
        inheritanceCertificate: media[15].url,
        houseLandDocuments: media[16].url,
        loanForm: media[17].url,
      },
      bankDetails: {
        ...loanApplicant.bankDetails,
        bankStatement: media[18].url,
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
      <div className='mt-3 mb-3'>Comments or Questions</div>
      <TextareaAutosize
        
        minRows={3}
        name="comments"
        onChange={handleInput}
        style={{ width: 200 }}
      />
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

export default Communication
