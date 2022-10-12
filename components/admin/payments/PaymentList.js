

import { Datagrid, EditButton, FileField, Filter, List, SearchInput, ShowButton, TextField } from "react-admin"
import { Pagination } from "../PostPagination"

const SearchFilter = props => (
      
    <Filter {...props}>
      <SearchInput placeholder='Search by Email' source="email" alwaysOn resettable/>
    </Filter>
    
   
  )



const PaymentList = props => {
    
   return (<List title="Payments" pagination={<Pagination />} {...props} filters={<SearchFilter />}>
      
        <Datagrid>
            <TextField source="index" label="Payment ID" />
            <TextField source="visaApplyID" label="Visa Application ID" />
            <TextField source="jobApplyID" label="Job Application ID"/>
            <TextField source="method" label="Payment Method"/>
            <TextField source="amount" label="Amount"/>
            <FileField source="bankReceipt" title="Bank Receipt"/>
            <ShowButton/>
        </Datagrid>
    </List>)
}

export default PaymentList