import React from 'react'
import { Icon } from '@iconify/react'
import sendCircle from '@iconify/icons-mdi/send-circle'
import { TextField } from '@mui/material'
import { useState } from 'react'
import { postData } from '../../utils/fetchData'
import { useNotify } from 'react-admin'

import { toast } from 'react-toastify';


const Form = () => {
    const [loading, setLoading] = useState(false)
    const initialState = { name: '', phone: '', email: '', message: '' }
    const [userData, setUserData] = useState(initialState)
    const { name, phone, email, message } = userData
    
    
    const formInputs = [
      { id: 'name', type: 'text', label: 'Your name', name: 'name', value: name, placeholder: 'John Doe' },
      {
        id: 'tel',
        type: 'tel',
        name: 'phone',
        value: phone,
        label: 'Phone number',
        placeholder: '+01 234 567 8900',
      },
      {
        id: 'email',
        type: 'email',
        name: 'email',
        value: email,
        label: 'Email address',
        placeholder: 'you@example.com',
      },
      {
        id: 'message',
        type: 'textarea',
        name: 'message',
        value: message,
        label: 'Your message',
        placeholder: 'How can we help you? Or you us?',
      },
    ]

   const invalid = (
    !name ||
    !phone ||
    !email ||
    !message
   )
  
    const handleChangeInput = e => {
      const {name, value} = e.target
      setUserData({...userData, [name]:value})
    }
  
    const handleSubmit = async e => {
      e.preventDefault()
      if (invalid) return toast('Please fill out all the fieds!', {type: 'error'})
      setLoading(true)
      await postData('contact', userData)
      setLoading(false)
      setUserData(initialState)
      toast('Thank you for contacting us!', {type: 'success'})
      console.log('userdata', userData)
    }
    return (
        <>
        
  <form className="form">
    <h2 className="form-h2">Send us a message</h2>

    {formInputs.map(input => (
      <label key={input.label} id={input.id} className="form-label">
        {input.label}

        {input.type === 'textarea' ? (
          <textarea className="form-textarea" required placeholder={input.placeholder} name={input.name} value={input.value} onChange={handleChangeInput}/>
        ) : (
          <TextField
            fullWidth
            required
            name ={input.name}
            onChange={handleChangeInput}
            value={input.value}
            type={input.type}
            placeholder={input.placeholder}
          />
        )}
      </label>
    ))}

    <Icon className="form-submit" icon={sendCircle} onClick={handleSubmit} />

    {/* <button className="form-submit" type="submit">
      Send message
    </button> */}
  </form>
        </>
    )
}


export default Form
