import React, {useState,useRef} from 'react'
import AuthVerifyEmail from './AuthVerifyEmail';
import Login from './Login';
import Register from './Register';

const Auth = () => {
  const card = useRef(null);
  const [success, setSuccess] = useState(false)
  const handleOpenRegister = () => {
        card.current.classList.add('inner-box-login')
        card.current.classList.remove('inner-box')
        
  }
  const handleOpenLogin = () => {
        card.current.classList.remove('inner-box-login')
        card.current.classList.add('inner-box')

  }
  return (
    <>
      {success? 
        <>
        <div className='veryEmail-card'>

        <AuthVerifyEmail/>
        </div>
        </>: 
        <>
        <div className='card mx-3'>
        <div className='inner-box' ref={card}>
          <div className='card-front'>
            <Login handleOpenRegister={handleOpenRegister}/>
          </div>
          <div className='card-back'>
             <Register setSuccess={setSuccess} handleOpenLogin={handleOpenLogin}/>
         </div>
        </div>
      </div>
        </>
      }
      
    </>
  )
}

export default Auth