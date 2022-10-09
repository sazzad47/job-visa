import { Box, Card, LinearProgress, Typography } from '@mui/material';
import React from 'react'
import VisaForm from '../../components/apply/visa/VisaForm';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import Image from 'next/image';
import visaIcon from '../../public/images/demos/visaIcon.png'
import { useState } from 'react';

const Visa = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  return (
    <React.Fragment>
        <div className='visa-page'>
       <div className='visa-page-header'>
        <Image src={visaIcon}/>
        <Typography align='center' style={{fontSize:'1.4rem'}}>Visa Application Form</Typography>
       </div>
      
      <Card className={loading? 'form-no-border': 'visa-page-form'} elevation={2}>
       {loading? <Box sx={{ width: '100%' }}>
      <LinearProgress />
     </Box> : null}
     <div className='p-4'>

      <VisaForm loading={loading} setLoading={setLoading} success={success} setSuccess={setSuccess} />
     </div>
      </Card>
        </div>
    </React.Fragment>
  )
}

export default Visa
