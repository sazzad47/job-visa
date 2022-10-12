const baseUrl = process.env.BASE_URL
import React, {useEffect} from 'react';

import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';

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
import ContactList from './contact/ContactList';
import ShowContact from './contact/ShowContact';
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
import ServicesList from './services/ServicesList';
import ShowService from './services/ShowServices';
import EditServices from './services/EditServices';
import CreateServices from './services/CreateServices';

const dataProvider = myDataProvider(`${baseUrl}/api`, httpClient);
const App = () => {
  return (
    <Admin title="Novage" loginPage={MyLoginPage} layout={Layout} dataProvider={dataProvider} authProvider={authProvider} >
      <Resource name="visaApplicants" list={VisaApplicatioinList} show={VisaApplicationShow} edit={EditVisaApplicants} options={{label: "Visa Applicants"}} />
      <Resource name="loanApplicants" list={LoanApplicatioinList} show={LoanApplicationShow} options={{label: "Loan Applicants"}} />
      <Resource name="jobApplicants" list={JobApplicatioinList} show={JobApplicationShow} options={{label: "Job Applicants"}} />
      <Resource name="jobs" list={JobList} create={JobCreate} show={ShowJob} edit={EditJob} options={{label: "Jobs"}} />
      <Resource name="notices" list={NoticeList} create={CreateNotice} show={ShowNotice} edit={EditNotice} options={{label: "Notices"}} />
      <Resource name="payment" list={PaymentList} show={ShowPayment} options={{label: "Payments"}} />
      <Resource name="services" list={ServicesList} create={CreateServices} show={ShowService} edit={EditServices} options={{label: "Payments"}} />
      <Resource name="contact" list={ContactList} show={ShowContact} options={{label: "Contacts"}} />
     
    </Admin>
  )
}

export default App;
