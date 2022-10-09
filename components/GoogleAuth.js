import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../store/GlobalState'
import { postData } from '../utils/fetchData'
import { useGoogleLogin } from '@react-oauth/google';
import Icon from './Icon'
import Cookie from 'js-cookie'
import axios from "axios"

const GoogleAuth = () => {

  const {state, dispatch} = useContext(DataContext)

  const login = useGoogleLogin({
    onSuccess: async respose => {
        try {
            const googleResponse = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                headers: {
                    "Authorization": `Bearer ${respose.access_token}`
                }
            })
            dispatch({ type: 'NOTIFY', payload: {loading: true} })
            const res = await postData('auth/googleLogin', {userData: googleResponse.data})
            
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
        } catch (err) {
            console.log(err)

        }

    }
});
  
  return (
    <React.Fragment>
          <button onClick={login}><Icon/> Continue with Google</button>
    </React.Fragment>
  )
}

export default GoogleAuth