import { BooleanField, Datagrid, EditButton, Filter, List, SearchInput, ShowButton, TextField } from "react-admin"
import { Pagination } from "../PostPagination"
import { FilterSidebar } from "./FilterSidebar"

const SearchFilter = props => (

  <Filter {...props}>
  <SearchInput type="number" placeholder='Search ID' source="index" alwaysOn resettable/>
  {/* <SearchInput type="number" placeholder='Search User ID' source="userId" alwaysOn resettable/> */}
</Filter>
    
   
  )



const VisaApplicatioinList = props => {
    
   return (<List aside={<FilterSidebar />} title="Job Applicants" pagination={<Pagination />} {...props} filters={<SearchFilter />}>
      
        <Datagrid>
            <TextField source="index" label="ID" />
            <TextField source="userId" label="User ID" />
            <TextField source="email" label="Email"/>
            <TextField source="phoneNumber" label="Phone"/>
            <BooleanField source="paid" label="Paid" />
            <TextField source="status" label="Status"/>

           
       
            <ShowButton/>
        </Datagrid>
    </List>)
}

export default VisaApplicatioinList