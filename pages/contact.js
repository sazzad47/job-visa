import React from 'react'
import Breadcrumb from '../components/Breadcrumb'

import Form from '../components/contact/Form'
import Info from '../components/contact/Info'
import { getData } from '../utils/fetchData'



const Contact = ({data}) => {
 
  return (
 <> 
   <Breadcrumb title="Contact"/>
   
    <div className="">
      {/* <Info data={data} /> */}
      <Form />
    </div>
  </>
  )
}

export async function getServerSideProps() {
  
  const res = await getData(
    `help?index=1`
  )
  
  return {
    props: {
        data: res.data,
    }, 
  }
}

export default Contact
