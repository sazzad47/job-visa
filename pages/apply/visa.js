import { Card, Typography } from '@mui/material';
import React from 'react'
import VisaForm from '../../components/apply/visa/VisaForm';

const Visa = () => {
  return (
    <React.Fragment>
        <div className='visa-page'>
      <Card style={{margin:'2rem', padding:'2rem'}} elevation={2}><Typography align='center' className="text-3xl font-bold underline">Visa Applicatoin Form</Typography></Card>
      <Card style={{margin:'2rem', padding:'2rem'}} elevation={2}>

      <VisaForm/>
      </Card>
        </div>
    </React.Fragment>
  )
}

export default Visa
