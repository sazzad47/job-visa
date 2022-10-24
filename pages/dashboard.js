import Head from "next/head";
import { useContext } from "react";
import { DataContext } from "../store/GlobalState";
import VisaApplications from "../components/userDashboard/visa";
import JobApplications from "../components/userDashboard/job";
import LoanApplications from "../components/userDashboard/loan";
import Payments from "../components/userDashboard/payment";
import AdminDashboard from './admin'
const Dashboard = () => {
  const { state } = useContext(DataContext);
  const { auth } = state;

  if (!auth.user) return null;
  if (auth.user.role==="admin") return <AdminDashboard/>;
  return (
    <div style={{ padding: "2rem", overflowX: "hidden" }}>
      <Head>
        <title>Dashboard</title>
      </Head>
      <section className="row text-secondary my-3">
        <h3 className="text-center text-uppercase">User Dashboard</h3>
        <div className="col-md-12 d-block mx-auto" style={{ maxWidth: "100%" }}>
          <div className="my-5">
            <VisaApplications />
          </div>
          <div className="my-5">
            <JobApplications />
          </div>
          <div className="my-5">
            <LoanApplications />
          </div>
          <div className="my-5">
            <Payments />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
