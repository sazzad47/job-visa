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

const dataProvider = myDataProvider(`${baseUrl}/api`, httpClient);
const App = () => {
  return (
    <Admin title="Novage" loginPage={MyLoginPage} layout={Layout} dataProvider={dataProvider} authProvider={authProvider} >
      <Resource name="visaApplicants" list={VisaApplicatioinList} show={VisaApplicationShow} edit={EditVisaApplicants} options={{label: "Visa Applicants"}} />
      <Resource name="loanApplicants" list={LoanApplicatioinList} show={LoanApplicationShow} options={{label: "Loan Applicants"}} />
      <Resource name="jobApplicants" list={JobApplicatioinList} show={JobApplicationShow} options={{label: "Job Applicants"}} />
      <Resource name="contact" list={ContactList} show={ShowContact} options={{label: "Contacts"}} />
      <Resource name="jobs" list={JobList} create={JobCreate} options={{label: "Jobs"}} />
     
    </Admin>
  )
}

export default App;
