import React, { useContext } from "react";
import { DataContext } from "../../../store/GlobalState";
const Index = () => {
  const { state } = useContext(DataContext);
  const { visaApplications } = state;

  return (
    <div className="">
      <h3 className="text-uppercase">Visa Applications</h3>
      <div className="my-3 table-responsive">
        <table
          className="table-bordered table-hover w-100 text-uppercase"
          style={{ minWidth: "600px", cursor: "pointer" }}
        >
          <thead className="bg-light font-weight-bold">
            <tr>
              <td className="p-2">ID</td>
              <td className="p-2">ID Card Number</td>
              <td className="p-2">Passport Number</td>
              <td className="p-2">Status</td>
              <td className="p-2">Paid</td>
            </tr>
          </thead>
          <tbody>
            {visaApplications.map((item) => (
              <tr key={item._id}>
                <td className="p-2">{item._id}</td>
                <td className="p-2">{item.IdCardNumber}</td>
                <td className="p-2">{item.passportNumber}</td>
                <td className="p-2">{item.status}</td>
                <td className="p-2">
                  {item.paid ? (
                    <i className="fas fa-check text-success"></i>
                  ) : (
                    <i className="fas fa-times text-danger"></i>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Index;
