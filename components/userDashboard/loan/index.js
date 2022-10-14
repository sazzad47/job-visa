import React, { useContext } from 'react'
import { DataContext } from '../../../store/GlobalState'
const Index = () => {
    const {state, dispatch} = useContext(DataContext)
    const { auth, notify, loanApplications } = state
    console.log('visaApplicac', loanApplications)
    return (
        <div className="">
            <h3 className="text-uppercase">Loan Applications</h3>

            <div className="my-3 table-responsive">
                <table className="table-bordered table-hover w-100 text-uppercase"
                    style={{ minWidth: '600px', cursor: 'pointer' }}>
                    <thead className="bg-light font-weight-bold">
                        <tr>
                            <td className="p-2">ID</td>
                            <td className="p-2">Visa Apply ID</td>
                            <td className="p-2">Job Apply ID</td>
                            <td className="p-2">Amount of Money</td>
                            <td className="p-2">Status</td>
                            <td className="p-2">Paid</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            loanApplications.map(item => (
                                <tr key={item._id}>
                                    <td className="p-2">
                                       
                                          {item.index}
                                        

                                    </td>
                                    <td className="p-2">
                                        {item.jobApplyID}
                                    </td>
                                    <td className="p-2">{item.visaApplyID}</td>
                                    <td className="p-2">{item.amountOfMoney}</td>
                                    <td className="p-2">
                                        {item.status}
                                    </td>
                                    <td className="p-2">
                                        {
                                            item.paid
                                                ? <i className="fas fa-check text-success"></i>
                                                : <i className="fas fa-times text-danger"></i>
                                        }
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Index