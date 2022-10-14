import React, {useState} from 'react'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PaymentWithCard from '../components/payment/Card'
import Bank from '../components/payment/Bank'

import Breadcrumb from '../components/BreadCrumb';
import { useContext } from 'react';
import { DataContext } from '../store/GlobalState';
import Auth from '../components/Auth';





export default function Checkout() {
  const { state, dispatch } = useContext(DataContext);
  const {auth} = state
  const [value, setValue] = useState('1');
  const [checkAuth, setCheckAuth] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
   
     <> 
     {auth.token? <>
     <Breadcrumb title="Payment"/>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box className="d-block mx-auto" sx={{ borderBottom: 1, borderColor: 'divider', maxWidth:'16rem' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab style={{textTransform:'none'}} label="Pay with card" value="1" />
                <Tab style={{textTransform:'none'}} label="Pay with bank" value="2" />
                
              </TabList>
            </Box>
           

            <TabPanel value="1"><PaymentWithCard setCheckAuth={setCheckAuth} /></TabPanel>
            <TabPanel value="2"><Bank setCheckAuth={setCheckAuth} /></TabPanel>
          
            
          </TabContext>
        </Box>
      
       
      </Container>
      </> : 
       <div className='authContainer'>
       <Auth/>
       
     </div>
      }
      </>
    
  );
}