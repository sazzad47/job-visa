import { Menu } from 'react-admin';

import BookIcon from '@mui/icons-material/Book';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PeopleIcon from '@mui/icons-material/People';
import LabelIcon from '@mui/icons-material/Label';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PaymentIcon from '@mui/icons-material/Payment';
import WorkIcon from '@mui/icons-material/Work';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
export const MyMenu = () => (
    <Menu>
        <Menu.DashboardItem />
        <Menu.Item to="/visaApplicants" primaryText="Visa Applicants" leftIcon={<BookIcon />}/>
        <Menu.Item to="/loanApplicants" primaryText="Loan Applicants" leftIcon={<ChatBubbleIcon />}/>
        <Menu.Item to="/jobApplicants" primaryText="Job Applicants" leftIcon={<PeopleIcon />}/>
        <Menu.Item to="/jobs" primaryText="Jobs" leftIcon={<WorkIcon />}/>
        <Menu.Item to="/notices" primaryText="Notice" leftIcon={<LabelIcon />}/>
        <Menu.Item to="/payment" primaryText="Payments" leftIcon={<PaymentIcon />}/>
        <Menu.Item to="/services" primaryText="Services" leftIcon={<MedicalInformationIcon />}/>
        <Menu.Item to="/contact" primaryText="Contacts" leftIcon={<ContactPageIcon />}/>
       
    </Menu>
);