import {useState, useContext, useEffect} from 'react'
import valid from '../utils/valid'
import {DataContext} from '../store/GlobalState'
import {postData} from '../utils/fetchData'
import { useRouter } from 'next/router'

const Register = ({handleOpenLogin}) => {
  const initialState = {name:'',email:'',password:'',cf_password:''};
  const [userData, setUserData] = useState(initialState);
  const {name, email, password, cf_password} = userData;

  const {state, dispatch} = useContext(DataContext)
  const { auth } = state

  const router = useRouter()
  
  const handleChangeInput = e => {
      const {name, value} = e.target;
      setUserData({...userData,[name]:value})
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errMsg = valid(name, email, password, cf_password)
    if(errMsg) return dispatch({ type: 'NOTIFY', payload: {error: errMsg} })

    dispatch({ type: 'NOTIFY', payload: {loading: true} })

    const res = await postData('auth/register', userData)
    
    if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })

    return dispatch({ type: 'NOTIFY', payload: {success: res.msg} })
  }
   
  useEffect(() => {
    if(Object.keys(auth).length !== 0) router.push("/")
  }, [auth])

  return (
    <div>
      <h4>Register</h4>
            <form onSubmit={handleSubmit}>
              <input 
              type='text' 
              className='input-box' 
              placeholder='Your Name'
              name='name' 
              value={name}
              onChange={handleChangeInput}
              required/>
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
              <input 
              type='password' 
              className='input-box' 
              placeholder='Confirm password'
              name='cf_password'
              value={cf_password} 
              onChange={handleChangeInput}
              required/>
              <button type='submit' className='submit-btn'>Submit</button>
            </form>
            <button type='button' className='butn' onClick={handleOpenLogin}>I have an account</button>
    </div>
  )
}

export default Register