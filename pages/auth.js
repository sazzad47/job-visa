import React, {useState,useRef} from 'react'
import Login from '../components/Login';
import Register from '../components/Register';

const Auth = () => {
  const card = useRef(null);
  
  const handleOpenRegister = () => {
        card.current.classList.add('inner-box-login')
        card.current.classList.remove('inner-box')
        
  }
  const handleOpenLogin = () => {
        card.current.classList.remove('inner-box-login')
        card.current.classList.add('inner-box')

  }
  return (
    <div className='authContainer'>
      <div className='card mx-3'>
        <div className='inner-box' ref={card}>
          <div className='card-front'>
            <Login handleOpenRegister={handleOpenRegister}/>
          </div>
          <div className='card-back'>
             <Register handleOpenLogin={handleOpenLogin}/>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Auth