import { Box, Card, LinearProgress, Typography } from '@mui/material';
import React from 'react'
import LoanForm from '../../components/apply/loan/LoanForm';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import Image from 'next/image';
import loanIcon from '../../public/images/demos/loanIcon.png'
import { useState } from 'react';
import Auth from '../../components/Auth';
import { useContext } from 'react';
import { DataContext } from '../../store/GlobalState';

const Loan = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const {state, dispatch} = useContext(DataContext)
  const { auth } = state
  return (
    <React.Fragment>
        <div className={auth.token? 'visa-page': 'authContainer'}>
          {auth.token? 
          <> 
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
      </> : <Auth/>
       }
        </div>
    </React.Fragment>
  )
}

export default Loan
