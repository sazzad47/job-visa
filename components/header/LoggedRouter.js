import React, { useContext } from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {DataContext} from '../../store/GlobalState'
import Cookie from 'js-cookie'
import { Avatar } from '@mui/material'
import { deepOrange, deepPurple } from '@mui/material/colors';
import UserMenu from './UserMenu'

const LoggedRouter = () => {

    const router = useRouter()
    const {state, dispatch} = useContext(DataContext)
    const { auth, cart } = state

    const handleLogout = () => {
        Cookie.remove('refreshtoken', {path: 'api/auth/accessToken'})
        localStorage.removeItem('firstLogin')
        dispatch({ type: 'AUTH', payload: {} })
        dispatch({ type: 'NOTIFY', payload: {success: 'Logged out!'} })
        return router.push('/')
    }

    return(
        <React.Fragment>
            <UserMenu/>
        </React.Fragment>
    )
}

export default LoggedRouter