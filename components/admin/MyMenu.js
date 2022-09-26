import { Menu } from 'react-admin';

import BookIcon from '@mui/icons-material/Book';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PeopleIcon from '@mui/icons-material/People';
import LabelIcon from '@mui/icons-material/Label';

export const MyMenu = () => (
    <Menu>
        <Menu.DashboardItem />
        <Menu.Item to="/visaApplicants" primaryText="Visa Applicants" leftIcon={<BookIcon />}/>
        <Menu.Item to="/" primaryText="Loan Applicants" leftIcon={<ChatBubbleIcon />}/>
        <Menu.Item to="/users" primaryText="Job Applicants" leftIcon={<PeopleIcon />}/>
        <Menu.Item to="/custom-route" primaryText="Notice" leftIcon={<LabelIcon />}/>
        <Menu.Item to="/custom-route" primaryText="Worker Job" leftIcon={<LabelIcon />}/>
        <Menu.Item to="/custom-route" primaryText="Worker Job" leftIcon={<LabelIcon />}/>
        <Menu.Item to="/custom-route" primaryText="Worker Job" leftIcon={<LabelIcon />}/>
        <Menu.Item to="/custom-route" primaryText="Worker Job" leftIcon={<LabelIcon />}/>
        <Menu.Item to="/custom-route" primaryText="Worker Job" leftIcon={<LabelIcon />}/>
    </Menu>
);