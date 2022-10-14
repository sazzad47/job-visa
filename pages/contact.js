import React from 'react'
import Breadcrumb from '../components/Breadcrumb'

import Form from '../components/contact/Form'
import Info from '../components/contact/Info'
import { getData } from '../utils/fetchData'



const ContactSection = ({data}) => {
 
  return (
 <> 
   <Breadcrumb title="Contact"/>
   
    <div className="contact-section">
      <Form />
      <Info data={data} />
    </div>
  </>
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

export default ContactSection
