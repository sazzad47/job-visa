import { Box, Card, LinearProgress, Typography } from '@mui/material';
import React from 'react'
import JobForm from '../../components/apply/jobs/JobForm';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import Image from 'next/image';
import jobIcon from '../../public/images/demos/jobIcon.png'
import { useState } from 'react';

const Job = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  return (
    <React.Fragment>
        <div className='visa-page'>
       <div className='visa-page-header'>
        <Image src={jobIcon}/>
        <Typography align='center' style={{fontSize:'1.4rem'}}>Job Application Form</Typography>
       </div>
      
      <Card className={loading? 'form-no-border': 'visa-page-form'} elevation={2}>
       {loading? <Box sx={{ width: '100%' }}>
      <LinearProgress />
     </Box> : null}
     <div className='p-4'>

      <JobForm loading={loading} setLoading={setLoading} success={success} setSuccess={setSuccess} />
     </div>
      </Card>
        </div>
    </React.Fragment>
  )
}

export default Job
