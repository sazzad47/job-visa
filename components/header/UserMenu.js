import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';
import {useRouter} from 'next/router'
import {DataContext} from '../../store/GlobalState'
import Cookie from 'js-cookie'
import { useContext } from 'react';


export default function UserMenu() {

    const router = useRouter()
    const {state, dispatch} = useContext(DataContext)
    const { auth, cart } = state
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        Cookie.remove('refreshtoken', {path: 'api/auth/accessToken'})
        localStorage.removeItem('firstLogin')
        dispatch({ type: 'AUTH', payload: {} })
        dispatch({ type: 'NOTIFY', payload: {success: 'Logged out!'} })
        return router.push('/')
    }

  return (
    <div>
      <Avatar
        sx={{ bgcolor: deepPurple[500], cursor: 'pointer' }}
        id="user-menu-button"
        aria-controls={open ? 'user-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {auth.user?.name.charAt(0)}
      </Avatar>
      <Menu
        id="user-menu"
        aria-labelledby="user-menu-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Dashboard</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={()=> {
            handleLogout();
            handleClose();
            }}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
