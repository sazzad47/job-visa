import * as React from 'react';
import { forwardRef, memo } from 'react';
import { Logout, UserMenu, useUserMenu, Layout, useLocaleState } from 'react-admin';
import { Link } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import { MyMenu } from './MyMenu';
import {
    MenuItem,
    MenuItemProps,
    ListItemIcon,
    CssBaseline,
} from '@mui/material';
import MyAppBar from './Appbar';

// It's important to pass the ref to allow MUI to manage the keyboard navigation
const ConfigurationMenu = React.forwardRef((props, ref) => {
    return (
        <MenuItem
            ref={ref}
            component={Link}
            // It's important to pass the props to allow MUI to manage the keyboard navigation
            {...props}
            to="/configuration"
        >
            <ListItemIcon>
                <SettingsIcon />
            </ListItemIcon>
            <ListItemText>
               Configuration
            </ListItemText>
        </MenuItem>
    );
});

// It's important to pass the ref to allow MUI to manage the keyboard navigation
const SwitchLanguage = React.forwardRef((props, ref) => {
    const [locale, setLocale] = useLocaleState();
    // We are not using MenuItemLink so we retrieve the onClose function from the UserContext
    const { onClose } = useUserMenu();

    return (
        <MenuItem
            ref={ref}
            // It's important to pass the props to allow MUI to manage the keyboard navigation
            {...props}
            sx={{ color: 'text.secondary' }}
            onClick={event => {
                setLocale(locale === 'en' ? 'fr' : 'en');
                onClose(); // Close the menu
            }}
        >
            <ListItemIcon sx={{ minWidth: 5 }}>
                <LanguageIcon />
            </ListItemIcon>
            <ListItemText>
                Switch Language
            </ListItemText>
        </MenuItem>
    );
});

const MyUserMenu = props => (
    <UserMenu {...props}>
        <ConfigurationMenu />
        <SwitchLanguage />
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