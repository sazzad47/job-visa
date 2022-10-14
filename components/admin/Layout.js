import * as React from 'react';
import { forwardRef, memo } from 'react';
import { UserMenu, useUserMenu, Layout, useLocaleState } from 'react-admin';
import { Link } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import {useRouter} from 'next/router'
import {DataContext} from '../../store/GlobalState'
import Cookie from 'js-cookie'
import LogoutIcon from '@mui/icons-material/Logout';
import { useContext } from 'react';
import { MyMenu } from './MyMenu';
import {
    CssBaseline,
} from '@mui/material';
import MyAppBar from './Appbar';


const Logout = () => {
    const {state, dispatch} = useContext(DataContext)
    const { auth } = state

    const router = useRouter()
    const handleLogout = () => {
        Cookie.remove('refreshtoken', {path: 'api/auth/accessToken'})
        localStorage.removeItem('firstLogin')
        dispatch({ type: 'AUTH', payload: {} })
        dispatch({ type: 'NOTIFY', payload: {success: 'Logged out!'} })
        return router.push('/')
    }
    return (
        <div style={{padding:'0 1rem', cursor:'pointer'}} onClick={handleLogout}><LogoutIcon/> Logout</div>
    )
}


const MyUserMenu = props => (
    <UserMenu {...props}>
        
        <Logout />
    </UserMenu>
);



const AppBar = memo(props => <MyAppBar {...props} userMenu={<MyUserMenu />} />);

export default props => (
    <>
        <CssBaseline />
        <Layout {...props} appBar={AppBar} menu={MyMenu}/>
        <ReactQueryDevtools
            initialIsOpen={true}
            toggleButtonProps={{ style: { width: 20, height: 30 } }}
        />
    </>
);