import { Card, Typography } from '@mui/material';
import React from 'react'
import LoanForm from '../../components/apply/loan/LoanForm';
import Image from 'next/image';
import loanIcon from '../../public/images/demos/loanIcon.png'
const VisaLoan = () => {
  return (
    <React.Fragment>
        <div className='visa-page'>
        <div className='visa-page-header'>
        <Image src={loanIcon}/>
        <Typography align='center' style={{fontSize:'1.4rem'}}>Loan Applicatoin Form</Typography>
       </div>
      
      <Card className='visa-page-form' elevation={2}>

      <LoanForm/>
      </Card>
        </div>
    </React.Fragment>
  )
}

export default VisaLoan
