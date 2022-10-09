import React, {useState,useRef} from 'react'
import ResetPassword from '../components/forgotPassword/ResetPassword';
import SendEmail from '../components/forgotPassword/SendEmail';


const ForgotPassword = () => {
  const card = useRef(null);
  const [email, setEmail] = useState('');
  const handleOpenReset = () => {
        card.current.classList.add('inner-block-verify')
        card.current.classList.remove('inner-block')
        
  }

  return (
    <div className='forgot-password'>
      <div className='block mx-3'>
        <div className='inner-block' ref={card}>
          <div className='block-front'>
            <SendEmail email={email} setEmail={setEmail} handleOpenReset={handleOpenReset}/>
          </div>
          <div className='block-back'>
             <ResetPassword email={email}/>
         </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword