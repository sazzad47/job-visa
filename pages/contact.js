import React from 'react'
import Breadcrumb from '../components/BreadCrumb'

import Form from '../components/contact/Form'
import Info from '../components/contact/Info'
import Intro from '../components/contact/Intro'


const ContactSection = () => (
  <> 
   <Breadcrumb title="Contact"/>
   <Intro/>
    <div className="contact-section">
      <Form />
      <Info />
    </div>
  </>
)

export default ContactSection
