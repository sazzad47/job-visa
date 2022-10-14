import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import Link from 'next/link';
const PaymentMessage = ({status}) => {
  return (
    <React.Fragment>
        
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
          <Typography className='visa-page-form-title'>Uploaded successfully!</Typography>
          
          
        </Paper>
        <div className='d-flex align-items-center justify-content-center mb-2'>
  
      
        <Box sx={{ width: '100%', mt: 3 }}>
         <Typography align='center'>We'll check your bank receipt and notify you soon. Go to your dashboard to check your payment information.</Typography>
        </Box>
        </div>
        <Box sx={{  maxWidth: 450, minWidth: {xs: 300, sm: 450}, width: '100%', p: 2, display: 'flex', justifyContent: 'center' }}>
        <Link href="/dashboard"><Button variant='contained'>dashboard</Button></Link>
        </Box>
        
        
      </Box>
       
    </React.Fragment>
  )
}

export default PaymentMessage