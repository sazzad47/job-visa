import { Menu } from "react-admin";
import BookIcon from "@mui/icons-material/Book";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PeopleIcon from "@mui/icons-material/People";
import LabelIcon from "@mui/icons-material/Label";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import PaymentIcon from "@mui/icons-material/Payment";
import WorkIcon from "@mui/icons-material/Work";
import GavelIcon from "@mui/icons-material/Gavel";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import SupportIcon from "@mui/icons-material/Support";
import InfoIcon from "@mui/icons-material/Info";
import CookieIcon from "@mui/icons-material/Cookie";
import PolicyIcon from "@mui/icons-material/Policy";
import EmergencyShareIcon from "@mui/icons-material/EmergencyShare";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import MessageIcon from "@mui/icons-material/Message";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
export const MyMenu = () => (
  <Menu>
    <Menu.DashboardItem to="/dashboard" primaryText="Dashboard" />
    <Menu.Item
      to="/visaApplicants"
      primaryText="Visa Applicants"
      leftIcon={<BookIcon />}
    />
    <Menu.Item
      to="/loanApplicants"
      primaryText="Loan Applicants"
      leftIcon={<ChatBubbleIcon />}
    />
    <Menu.Item
      to="/jobApplicants"
      primaryText="Job Applicants"
      leftIcon={<PeopleIcon />}
    />
    <Menu.Item to="/jobs" primaryText="Jobs" leftIcon={<WorkIcon />} />
    <Menu.Item to="/notices" primaryText="Notice" leftIcon={<LabelIcon />} />
    <Menu.Item
      to="/payment"
      primaryText="Payments"
      leftIcon={<PaymentIcon />}
    />
    <Menu.Item
      to="/messages"
      primaryText="Messages"
      leftIcon={<MessageIcon />}
    />
    <Menu.Item
      to="/contact"
      primaryText="Contact"
      leftIcon={<ContactPageIcon />}
    />
    {/* <Menu.Item to="/home" primaryText="Home" leftIcon={<OtherHousesIcon />} /> */}
    <Menu.Item
      to="/services"
      primaryText="Services"
      leftIcon={<MedicalInformationIcon />}
    />
    <Menu.Item
      to="/terms"
      primaryText="Terms & Conditions"
      leftIcon={<GavelIcon />}
    />
    <Menu.Item to="/cookies" primaryText="Cookies" leftIcon={<CookieIcon />} />
    <Menu.Item
      to="/policies"
      primaryText="Privacy Policy"
      leftIcon={<PolicyIcon />}
    />
    <Menu.Item
      to="/help"
      primaryText="Help & Support"
      leftIcon={<SupportIcon />}
    />
    <Menu.Item to="/about" primaryText="About" leftIcon={<InfoIcon />} />
    <Menu.Item
      to="/legalNotice"
      primaryText="Legal Notice"
      leftIcon={<EmergencyShareIcon />}
    />
    <Menu.Item
      to="/accessibilityStatement"
      primaryText="Accessibility Statement"
      leftIcon={<DocumentScannerIcon />}
    />
  </Menu>
);
