// import React from 'react'
// import Breadcrumb from '../components/Breadcrumb'

// import Form from '../components/contact/Form'
// import Info from '../components/contact/Info'
// import { getData } from '../utils/fetchData'



// const Contact = ({data}) => {
 
//   return (
//  <> 
//    <Breadcrumb title="Contact"/>
   
//     <div className="contact-">
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
import Parser from 'html-react-parser';
import { getData, postData } from '../utils/fetchData'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Notice = ({data}) => {
  const [loading, setLoading] = useState(false)
  const initialState = { name: '', email: '', message: '' }
    const [userData, setUserData] = useState(initialState)
    const { name, email, message } = userData
    const handleChangeInput = e => {
      const {name, value} = e.target
      setUserData({...userData, [name]:value})
    }
    const valid = Object.values(userData).every(item => item !== '')
    
    const handleSubmit = async e => {
      e.preventDefault()
      if (!valid) return toast('Please fill out all the fieds!', {type: 'error'})
      setLoading(true)
      await postData('messages', userData)
      setLoading(false)
      setUserData(initialState)
      toast('Thank you for contacting us!', {type: 'success'})
     
    }

    return (
        <React.Fragment>
           <Breadcrumb title="Contact"/>
          <div className='contact-page-container'>
            
           <div className="contact-page">
    <div className="contact-content">
      <div className="contact-left-side">
        <div className="contact-address details">
          <i className="fas fa-map-marker-alt"></i>
          <div className="contact-topic">Address</div>
          <div className="contact-text-one">{Parser(data.address)}</div>
          
        </div>
        <div className="contact-phone details">
          <i className="fas fa-phone-alt"></i>
          <div className="contact-topic">Phone</div>
          <div className="contact-text-one">{Parser(data.phone)}</div>
          
        </div>
        <div className="contact-email details">
          <i className="fas fa-envelope"></i>
          <div className="contact-topic">Email</div>
          <div className="contact-text-one">{Parser(data.email)}</div>
         
        </div>
      </div>
      <div className="contact-right-side">
        <div className="contact-topic-text">Send us a message</div>
        
      <form onSubmit={handleSubmit}>
        <div className="contact-input-box">
          <input type="text" name='name' value={name} onChange={handleChangeInput} placeholder="Enter your name" />
        </div>
        <div className="contact-input-box">
          <input type="text" name='email' value={email} onChange={handleChangeInput} placeholder="Enter your email" />
        </div>
        <div className="contact-input-box message-box">
          <textarea type="text" name='message' value={message} onChange={handleChangeInput} placeholder="Enter your message" />
        </div>
        <div className="contact-button">
          <button type='submit'>Send</button>
        </div>
      </form>
    </div>
    </div>
  </div>
          </div>
            
        </React.Fragment>
    )
}

export async function getServerSideProps() {
  
    const res = await getData('contact?index=1')
    
    return {
      props: {
          data: res.data,
      }, 
    }
  }

export default Notice