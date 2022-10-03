import {useState, useContext, useEffect} from 'react'
import {DataContext} from '../store/GlobalState'
import {postData} from '../utils/fetchData'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'
import GoogleAuth from './GoogleAuth'

const Login = ({handleOpenRegister}) => {
  const initialState = { email: '', password: '' }
  const [userData, setUserData] = useState(initialState)
  const { email, password } = userData

  const {state, dispatch} = useContext(DataContext)
  const { auth } = state

  const router = useRouter()

  const handleChangeInput = e => {
    const {name, value} = e.target
    setUserData({...userData, [name]:value})
    dispatch({ type: 'NOTIFY', payload: {} })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    dispatch({ type: 'NOTIFY', payload: {loading: true} })
    const res = await postData('auth/login', userData)
    
    if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })
    dispatch({ type: 'NOTIFY', payload: {success: res.msg} })

    dispatch({ type: 'AUTH', payload: {
      token: res.access_token,
      user: res.user
    }})

    Cookie.set('refreshtoken', res.refresh_token, {
      path: 'api/auth/accessToken',
      expires: 7
    })

    localStorage.setItem('firstLogin', true)
  }

  useEffect(() => {
    if(Object.keys(auth).length !== 0) router.push("/")
  }, [auth])

  return (
    <div>
        <h4>Login</h4>
         <GoogleAuth/>
         <h2 className='googleLoginOr'><span>Or</span></h2>
            <form onSubmit={handleSubmit}>
              <input 
              type='email' 
              className='input-box' 
              placeholder='Your email'
              name='email' 
              value={email}
              onChange={handleChangeInput}
              required/>
              <input 
              type='password' 
              className='input-box' 
              placeholder='Password'
              name='password' 
              value={password}
              onChange={handleChangeInput}
              required/>
              <input type='checkbox'/><span>Remember Me</span>
              <button type='submit' className='submit-btn'>Submit</button>
            </form>
            <button type='button' className='butn' onClick={handleOpenRegister}>I'm New Here</button>
            
    </div>
  )
}

export default Login