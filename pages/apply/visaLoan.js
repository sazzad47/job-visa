import { Box, Card, LinearProgress, Typography } from '@mui/material';
import React from 'react'
import LoanForm from '../../components/apply/loan/LoanForm';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import Image from 'next/image';
import loanIcon from '../../public/images/demos/loanIcon.png'
import { useState } from 'react';

const Visa = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  return (
    <React.Fragment>
        <div className='visa-page'>
       <div className='visa-page-header'>
        <Image src={loanIcon}/>
        <Typography align='center' style={{fontSize:'1.4rem'}}>Loan Application Form</Typography>
       </div>
      
      <Card className={loading? 'form-no-border': 'visa-page-form'} elevation={2}>
       {loading? <Box sx={{ width: '100%' }}>
      <LinearProgress />
     </Box> : null}
     <div className='p-4'>

      <LoanForm loading={loading} setLoading={setLoading} success={success} setSuccess={setSuccess} />
     </div>
      </Card>
        </div>
    </React.Fragment>
  )
}

export default Visa
