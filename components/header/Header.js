import { Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import {styled, useTheme } from '@mui/material/styles';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { DataContext } from '../../store/GlobalState';
import { useContext } from 'react';
import LoggedRouter from './LoggedRouter';
const drawerWidth = 240;


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));
const Header = () => {
  const {state, dispatch} = useContext(DataContext)
  const { auth, cart } = state
  
  const theme = useTheme();
  const mobileNav = useRef(null);
  const [open, setOpen] = React.useState(false);
  const [openCheckingMenu, setOpenCheckingMenu] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
 
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorCheckingMenu, setAnchorCheckingMenu] = useState(null);
  const openDrop = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const openCheckingDrop = Boolean(anchorCheckingMenu);
  const handleOpenCheckingDrop = (event) => {
    setAnchorCheckingMenu(event.currentTarget);
  };
  const handleCloseCheckingDrop = () => {
    setAnchorCheckingMenu(null);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="logo"><Link href="/"><a style={{textDecoration:'none'}}><h1>Logo</h1></a></Link></div>

          
              <ul className="nav__list d-none d-md-flex">
                <Link href="/">
                <li className="nav__item">
                  <a href="#" >Home</a>
                </li>
                </Link>
                
                <li className="nav__item">
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    <span style={{color:'#fff'}}>Apply</span>
                  </Button>
              
                  
                  </li>
                <li className="nav__item">
                <Button
                    id="basic-button"
                    aria-controls={openCheckingMenu ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openCheckingMenu ? 'true' : undefined}
                    onClick={handleOpenCheckingDrop}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    <span style={{color:'#fff'}}>Checking</span>
                  </Button>
              
                  
                  </li>
                <Link href="/notices"><li className="nav__item"><a href="#">Notice</a></li></Link>
                <Link href="/jobs"><li className="nav__item"><a href="#">Jobs</a></li></Link>
                <Link href="/about"><li className="nav__item"><a href="#">Services</a></li></Link>
                <Link href="/payment"><li className="nav__item"><a href="#">Payment</a></li></Link>
                <Link href="/contact"><li className="nav__item"><a href="#about">Contact</a></li></Link>
                {Object.keys(auth).length === 0?<Link href='/auth'><li className="navLoginBtn"><a style={{textDecoration: 'none'}}>Login</a></li></Link> 
                : <LoggedRouter/>}
              </ul>
  
            {/* <nav className="mobile-nav d-flex d-md-none" ref={mobileNav}>
              <Link href="/"><a>Home</a></Link>
              <a href="#packages">Apply for Visa</a>
              <a href="#packages">Apply for Visa Loan</a>
              <a href="#packages">Apply for Jobs</a>
              <Link href="/about"><a>About</a></Link>
             
              <Link href="/contact"><a>contact</a></Link>
              <a href="#services">Jobs</a>
              <Link href="/auth"><a>Login</a></Link>
            </nav> */}
           
            
          <span className="mobile__menu d-block d-md-none">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon style={{color:'#fff'}}/>
          </IconButton>
          </span>
        </div>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openDrop}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link href="/apply/visa"><MenuItem onClick={handleClose}>Apply for Visa</MenuItem></Link>
        <Link href="/apply/visaLoan"><MenuItem onClick={handleClose}>Apply for Visa Loan</MenuItem></Link>
        <Link href="/apply/jobs"><MenuItem onClick={handleClose}>Apply for jobs</MenuItem></Link>
        
      </Menu>
        <Menu
        id="basic-menu"
        anchorEl={anchorCheckingMenu}
        open={openCheckingDrop}
        onClose={handleCloseCheckingDrop}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link href="/checking/visa"><MenuItem onClick={handleCloseCheckingDrop}>Visa Checking</MenuItem></Link>
        <Link href="/checking/job"><MenuItem onClick={handleCloseCheckingDrop}>Job Checking</MenuItem></Link>
        <Link href="/checking/loan"><MenuItem onClick={handleCloseCheckingDrop}>Loan Checking</MenuItem></Link>
        
        
      </Menu>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            backgroundColor:'#41035c',
            color:'#fff'
          },
        }}
        
        anchor="right"
        open={open}
        ModalProps={{ onBackdropClick: handleDrawerClose }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} style={{color:'#fff'}}>
            
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        
        <List>
          
            <Link href="/">
            <a>
            <ListItem onClick={handleDrawerClose}>
              Home
            </ListItem>
            </a>
            </Link>
            <Link href="/apply/visa">
            <a>
            <ListItem onClick={handleDrawerClose}>
             Apply for Visa
            </ListItem>
            </a>
            </Link>
            <Link href="/apply/visaLoan">
            <a>
            <ListItem onClick={handleDrawerClose}>
              Apply for Visa Loan
            </ListItem>
            </a>
            </Link>
            <Link href="/checking/visa">
            <a>
            <ListItem onClick={handleDrawerClose}>
              Visa Checking
            </ListItem>
            </a>
            </Link>
            <Link href="/checking/job">
            <a>
            <ListItem onClick={handleDrawerClose}>
              Job Checking
            </ListItem>
            </a>
            </Link>
            <Link href="/checking/loan">
            <a>
            <ListItem onClick={handleDrawerClose}>
              Loan Checking
            </ListItem>
            </a>
            </Link>
            <Link href="/apply/jobs">
            <a>
            <ListItem onClick={handleDrawerClose}>
              Jobs
            </ListItem>
            </a>
            </Link>
            <Link href="/notices">
            <a>
            <ListItem onClick={handleDrawerClose}>
              Notice
            </ListItem>
            </a>
            </Link>
            <Link href="/services">
            <a>
            <ListItem onClick={handleDrawerClose}>
              Services
            </ListItem>
            </a>
            </Link>
            <Link href="/payment">
            <a>
            <ListItem onClick={handleDrawerClose}>
              Payment
            </ListItem>
            </a>
            </Link>
            <Link href="/contact">
            <a>
            <ListItem onClick={handleDrawerClose}>
              Contact
            </ListItem>
            </a>
            </Link>
            <Link href="/auth">
            <a>
            <ListItem onClick={handleDrawerClose}>
              Login
            </ListItem>
            </a>
            </Link>
         
        </List>
      </Drawer>
      </div>
    </header>
  )
}

export default Header
