import { Card, Typography } from '@mui/material';
import React from 'react'
import LoanForm from '../../components/apply/loan/LoanForm';

const VisaLoan = () => {
  return (
    <React.Fragment>
        <div className='visa-page'>
      <Card style={{margin:'2rem', padding:'2rem'}} elevation={2}><Typography align='center' variant='h4'>Loan Applicatoin Form</Typography></Card>
      <Card style={{margin:'2rem', padding:'2rem'}} elevation={2}>

      <LoanForm/>
      </Card>
        </div>
    </React.Fragment>
  )
}

export default VisaLoan
