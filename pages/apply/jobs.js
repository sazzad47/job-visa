import { Card, Typography } from '@mui/material';
import React from 'react'
import JobForm from '../../components/apply/jobs/JobForm';

const Job = () => {
  return (
    <React.Fragment>
        <div className='visa-page'>
      <Card style={{margin:'2rem', padding:'2rem'}} elevation={2}><Typography align='center' variant='h4'>Job Applicatoin Form</Typography></Card>
      <Card style={{margin:'2rem', padding:'2rem'}} elevation={2}>

      <JobForm/>
      </Card>
        </div>
    </React.Fragment>
  )
}

export default Job
