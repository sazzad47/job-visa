import { Box, Button, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Link from 'next/link';
const PaymentMessage = () => {

  return (
    <React.Fragment>
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
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
      </Paper>
      </Container>
    </React.Fragment>
  )
}

export default PaymentMessage