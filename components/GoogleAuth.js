import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { useContext } from 'react'
import { GoogleLogin } from 'react-google-login'
import { DataContext } from '../store/GlobalState'
import { postData } from '../utils/fetchData'
import Icon from './Icon'
import Cookie from 'js-cookie'

const GoogleAuth = () => {
  const googleClientID = process.env.GOOGLE_CLIENT_ID
  const {state, dispatch} = useContext(DataContext)
  const { auth } = state

  const router = useRouter()

  const responseGoogle = async (response) => {
    dispatch({ type: 'NOTIFY', payload: {loading: true} })
    const res = await postData('auth/googleLogin', {tokenId: response.tokenId})
    
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

  return (
    <React.Fragment>
        <GoogleLogin
            clientId={googleClientID}
            render={(renderProps) => (
              <Button color="primary" fullWidth onClick={renderProps.onClick}  startIcon={<Icon />} variant="contained">
                Continue with Google
              </Button>
            )}
            
            onSuccess={responseGoogle}
            cookiePolicy="single_host_origin"
          />
    </React.Fragment>
  )
}

export default GoogleAuth