// import React from 'react'
// import Breadcrumb from '../components/Breadcrumb'

// import Form from '../components/contact/Form'
// import Info from '../components/contact/Info'
// import { getData } from '../utils/fetchData'



// const Contact = ({data}) => {
 
//   return (
//  <> 
//    <Breadcrumb title="Contact"/>
   
//     <div className="">
//       {/* <Info data={data} /> */}
//       <Form />
//     </div>
//   </>
//   )
// }

// export async function getServerSideProps() {
  
//   const res = await getData(
//     `contact?index=1`
//   )
  
//   return {
//     props: {
//         data: res.data,
//     }, 
//   }
// }

// export default Contact

import { Container, Grid } from '@mui/material'
import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { getData } from '../utils/fetchData'
import Parser from 'html-react-parser';

const Services = ({data}) => {
   
    

    return (
        <React.Fragment>
           <Breadcrumb title="Services"/>
           <Container sx={{minHeight:'100vh'}}>
            <Grid>
            {Parser(data.phone)}
            </Grid>
            <Grid>
            {Parser(data.email)}
            </Grid>
            <Grid>
            {Parser(data.address)}
            </Grid>
           </Container>
        </React.Fragment>
    )
}

export async function getServerSideProps() {
  
  const res = await getData(
    `contact?index=1`
  )
  
  return {
    props: {
        data: res.data,
    }, 
  }
}

export default Services