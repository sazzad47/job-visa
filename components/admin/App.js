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
import JobApplicatioinList from './job/ApplicationList';
import JobApplicationShow from './job/ShowApplication';

const dataProvider = myDataProvider(`${baseUrl}/api`, httpClient);
const App = () => {
  return (
    <Admin title="Novage" loginPage={MyLoginPage} layout={Layout} dataProvider={dataProvider} authProvider={authProvider} >
      <Resource name="visaApplicants" list={VisaApplicatioinList} show={VisaApplicationShow} edit={EditVisaApplicants} options={{label: "Visa Applicants"}} />
      <Resource name="loanApplicants" list={LoanApplicatioinList} show={LoanApplicationShow} options={{label: "Loan Applicants"}} />
      <Resource name="jobApplicants" list={JobApplicatioinList} show={JobApplicationShow} options={{label: "Job Applicants"}} />
     
    </Admin>
  )
}

export default App;
