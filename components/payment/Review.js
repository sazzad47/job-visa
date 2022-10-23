import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useContext } from 'react';
import { DataContext } from '../../store/GlobalState';
import { Button } from '@mui/material';
import Card from './Card'
import Link from 'next/link';

export default function Review({handleBack}) {
  const { state, dispatch } = useContext(DataContext);
  const {auth} = state
  const {
       firstName,
       lastName,
       address1,
       address2,
       city,
       customer_state,
       zip,
       country,
       visaApplyID,
       method,
       amount
      } = state.paymentInfo
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Review your information
      </Typography>
      <List disablePadding>
       

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Visa Application ID" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {visaApplyID}
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total Amount" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${amount}
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Method" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {method}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        
        <Grid item container direction="column" xs={12}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping Address
          </Typography>
          <Grid container>
            
                <Grid item xs={6}>
                  <Typography gutterBottom>Name</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom> {firstName} {lastName} </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Address line 1</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{address1} </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Address line 2</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{address2} </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>City</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom> {city} </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>State/Province/Region</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom> {customer_state} </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom> Zip / Postal code</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom> {zip} </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom> Country </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom> {country} </Typography>
                </Grid>
             
          
          </Grid>
        </Grid>
        <Grid item xs={12} className="d-flex justify-content-between">

        <Button variant='contained' onClick={handleBack}>Back</Button>
        {method==='card'? <Card/> : <Link href="/payment/bank" ><Button variant='contained'>Checkout</Button></Link>}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}