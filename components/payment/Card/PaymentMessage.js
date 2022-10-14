import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import { useContext } from 'react';
import { DataContext } from '../../../store/GlobalState';
import { useEffect } from 'react';
import Link from 'next/link';
const PaymentMessage = ({status, item}) => {
  const { state, dispatch } = useContext(DataContext);
  const {auth} = state
 
  return (
    <React.Fragment>
        {status && status === 'success' && (
        <Box sx={{ maxWidth: 450, flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pl: 2,
            bgcolor: 'background.default',
          }}
        >  
          <Box sx={{m:1}}><CheckCircleOutlineIcon color='primary' /></Box>
          <Typography className='visa-page-form-title'>Payment successful!</Typography>
          
          
        </Paper>
        <div className='d-flex align-items-center justify-content-center mb-2'>
  
      
        <Box sx={{ width: '100%', mt: 3 }}>
         <Typography align='center'>Go to your dashboard to check your payment information.</Typography>
        </Box>
        </div>
        <Box sx={{  maxWidth: 450, minWidth: {xs: 300, sm: 450}, width: '100%', p: 2, display: 'flex', justifyContent: 'center' }}>
        <Link href="/dashboard"><Button variant='contained'>dashboard</Button></Link>
        </Box>
        
        
      </Box>
        )}
        {status && status === 'cancel' && (
        <Box sx={{ maxWidth: 450, flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pl: 2,
            bgcolor: 'background.default',
          }}
        >  
          <Box sx={{m:1}}><ErrorOutlineIcon color='primary' /></Box>
          <Typography className='visa-page-form-title'>Payment failed!</Typography>
          
          
        </Paper>
        <div className='d-flex align-items-center justify-content-center mb-2'>
  
      
        <Box sx={{ width: '100%', mt: 3 }}>
         <Typography align='center'>Something went wrong! Please try again with valid information.</Typography>
        </Box>
        </div>
        <Box sx={{  maxWidth: 450, minWidth: {xs: 300, sm: 450}, width: '100%', p: 2, display: 'flex', justifyContent: 'center' }}>
          <Button variant='contained'>Back</Button>
        </Box>
        
        
      </Box>
)}
    </React.Fragment>
  )
}

export default PaymentMessage