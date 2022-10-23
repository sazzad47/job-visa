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
import Link from 'next/link';
import { NavLink } from './NavLink';


export default function UserMenu({setApplyMenuSubMenu, boxClass, toggleClass}) {

    const router = useRouter()
    const {state, dispatch} = useContext(DataContext)
    const { auth, cart } = state

    
    const [isAccountMenuSubMenu, setAccountMenuSubMenu] = React.useState(false);
      
      
    const toggleAccountSubmenu = () => {
      setAccountMenuSubMenu(isAccountMenuSubMenu === false ? true : false);
     
    };

    
    let boxAccountClassSubMenu = ["auth_sub__menus"];
    if(isAccountMenuSubMenu) {
        boxAccountClassSubMenu.push('auth_sub__menus__Active');
    }else {
        boxAccountClassSubMenu.push('');
    }

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
   
     <>
      <nav className="main-nav auth_computer_menu" >


                    <ul className={boxClass.join(' ')}>
                    
                    <li onClick={toggleAccountSubmenu} className="menu-item auth_sub__menus__arrows" ><NavLink href="#" className="nav-item nav-link">
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
                    </NavLink>
                        <ul className={boxAccountClassSubMenu.join(' ')} > 
                            <li> <Link href="/dashboard"><a onClick={toggleClass}>Dashboard</a></Link> </li>
                            <li><Link href="/settings"><a onClick={toggleClass}>Settings</a></Link> </li>
                            <li><a 
                            onClick={()=> {
                              handleLogout();
                              toggleClass();
                              }}>Logout</a> </li>
                        </ul>
                    </li>
                    
                    </ul>


                    </nav>     
                    <li onClick={toggleAccountSubmenu} className="menu-item auth_mobile_menu auth_sub__menus__arrows" ><NavLink href="#" className="nav-item nav-link">Account</NavLink>
                        <ul className={boxAccountClassSubMenu.join(' ')} > 
                        <li> <Link href="/dashboard"><a onClick={toggleClass}>Dashboard</a></Link> </li>
                            <li><Link href="/settings"><a onClick={toggleClass}>Settings</a></Link> </li>
                            <li><a 
                            onClick={()=> {
                              handleLogout();
                              toggleClass();
                              }}>Logout</a> </li>
                        </ul>
                    </li>
     </>
    

  );
}


 {/* <Avatar
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
        <Link href="/dashboard"><MenuItem onClick={handleClose}>Dashboard</MenuItem></Link>
        <Link href="/settings"><MenuItem onClick={handleClose}>Settings</MenuItem></Link>
        <MenuItem onClick={()=> {
            handleLogout();
            handleClose();
            }}>Logout</MenuItem>
      </Menu> */}