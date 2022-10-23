const baseUrl = process.env.BASE_URL
import React from 'react';

import { Admin, Resource, CustomRoutes } from 'react-admin';

import myDataProvider from './myDataProvider'
import {fetchJson as httpClient} from './httpClient'
import authProvider from './authProvider';
import Layout from './Layout';
import MyLoginPage from './MyLoginPage';
import EditVisaApplicants from './visa/EditVisaApplicants';
import VisaApplicationShow from './visa/ShowApplication';
import VisaApplicatioinList from './visa/ApplicationList';
import LoanApplicatioinList from './loan/ApplicationList';
import LoanApplicationShow from './loan/ShowApplication';
import JobApplicatioinList from './job-application/ApplicationList';
import JobApplicationShow from './job-application/ShowApplication';
import MessageList from './messages/MessageList';
import ShowMessage from './messages/ShowMessage';
import JobList from './job/JobList';
import JobCreate from './job/JobCreate';
import EditJob from './job/EditJob';
import ShowJob from './job/ShowJob';
import NoticeList from './notices/NoticeList'
import CreateNotice from './notices/CreateNotice';
import ShowNotice from './notices/ShowNotice';
import EditNotice from './notices/EditNotice';
import PaymentList from './payments/PaymentList'
import ShowPayment from './payments/ShowPayment';


import { Route } from 'react-router-dom';

import Contact from './contact';
import EditContact from './contact/EditPage';
import Home from './home';
import Services from './services';
import EditServices from './services/EditPage';
import Terms from './terms';
import EditTerms from './terms/EditPage';
import Cookies from './cookies';
import EditCookies from './cookies/EditPage';
import Policies from './policies';
import EditPolicies from './policies/EditPage';
import HelpPage from './help';
import EditHelpPage from './help/EditPage';
import About from './about';
import EditAbout from './about/EditPage';
import LegalNotice from './legalNotice';
import EditLegalNotice from './legalNotice/EditPage';
import AccessibilityStatement from './accessibilityStatement';
import EditAccessibilityStatement from './accessibilityStatement/EditPage';
import Dashboard from './dashboard';

const dataProvider = myDataProvider(`${baseUrl}/api`, httpClient);
const App = () => {
  return (
    <Admin dashboard={Dashboard} title="Novage" loginPage={MyLoginPage} layout={Layout} dataProvider={dataProvider} authProvider={authProvider} >
      <Resource name="visaApplicants" list={VisaApplicatioinList} show={VisaApplicationShow} edit={EditVisaApplicants} options={{label: "Visa Applicants"}} />
      <Resource name="loanApplicants" list={LoanApplicatioinList} show={LoanApplicationShow} options={{label: "Loan Applicants"}} />
      <Resource name="jobApplicants" list={JobApplicatioinList} show={JobApplicationShow} options={{label: "Job Applicants"}} />
      <Resource name="jobs" list={JobList} create={JobCreate} show={ShowJob} edit={EditJob} options={{label: "Jobs"}} />
      <Resource name="notices" list={NoticeList} create={CreateNotice} show={ShowNotice} edit={EditNotice} options={{label: "Notices"}} />
      <Resource name="messages" list={MessageList} show={ShowMessage} options={{label: "Messages"}} />
      <Resource name="payment" list={PaymentList} show={ShowPayment} options={{label: "Payments"}} />
      
      <CustomRoutes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact pageName="contact" />} />
            <Route path="/contact/edit" element={<EditContact pageName="contact" />} />
            <Route path="/services" element={<Services pageName="services" />} />
            <Route path="/home" element={<Home pageName="home" />} />
            <Route path="/services/edit" element={<EditServices pageName="services" />} />
            <Route path="/terms" element={<Terms pageName="terms" />} />
            <Route path="/terms/edit" element={<EditTerms pageName="terms" />} />
            <Route path="/cookies" element={<Cookies pageName="cookies" />} />
            <Route path="/cookies/edit" element={<EditCookies pageName="cookies" />} />
            <Route path="/policies" element={<Policies pageName="policies" />} />
            <Route path="/policies/edit" element={<EditPolicies pageName="policies" />} />
            <Route path="/help" element={<HelpPage pageName="help" />} />
            <Route path="/help/edit" element={<EditHelpPage pageName="help" />} />
            <Route path="/about" element={<About pageName="about" />} />
            <Route path="/about/edit" element={<EditAbout pageName="about" />} />
            <Route path="/legalNotice" element={<LegalNotice pageName="legalNotice" />} />
            <Route path="/legalNotice/edit" element={<EditLegalNotice pageName="legalNotice" />} />
            <Route path="/accessibilityStatement" element={<AccessibilityStatement pageName="accessibilityStatement" />} />
            <Route path="/accessibilityStatement/edit" element={<EditAccessibilityStatement pageName="accessibilityStatement" />} />
          
        </CustomRoutes>
     
     
    </Admin>
  )
}

export default App;
