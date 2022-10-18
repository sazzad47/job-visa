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

import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Notices from '../components/notices/Notices'
import { getData } from '../utils/fetchData'

import { Icon, InlineIcon } from '@iconify/react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Parser from 'html-react-parser';
import facebookIcon from '@iconify/icons-mdi/facebook'
import linkedinIcon from '@iconify/icons-mdi/linkedin'
import twitterIcon from '@iconify/icons-mdi/twitter'

const Notice = ({data}) => {
    return (
        <React.Fragment>
           <Breadcrumb title="Contact"/>
           <section className="info">
    <h2 className="info-h2">Contact information</h2>

    {/* <div className="d-flex flex-column">
      <div className='d-flex mb-2'><LocalPhoneIcon sx={{mr:2}} /> {Parser(data.phone)}</div>
      <div className='d-flex my-2'><EmailIcon sx={{mr:2}} /> {Parser(data.email)}</div>
      <div className='d-flex'><LocationOnIcon sx={{mr:2}} /> {Parser(data.address)}</div>
    </div> */}

    
  </section>
            
        </React.Fragment>
    )
}

export async function getServerSideProps() {
  
    const res = await getData('contact?index=1')
    console.log('noticeddd', res.data)
    return {
      props: {
          data: res.data,
      }, 
    }
  }

export default Notice