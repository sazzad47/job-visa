import { Datagrid, EditButton, Filter, List, SearchInput, ShowButton, TextField } from "react-admin"
import { Pagination } from "../PostPagination"

const SearchFilter = props => (

    <Filter {...props}>
      <SearchInput placeholder='Search ID' source="index" alwaysOn resettable/>
    </Filter>
    
   
  )



const VisaApplicatioinList = props => {
    
   return (<List title="Job Applicants" pagination={<Pagination />} {...props} filters={<SearchFilter />}>
      
        <Datagrid>
            <TextField source="index" label="ID" />
            <TextField source="email" label="Email"/>
            <TextField source="phoneNumber" label="Phone"/>
            <TextField source="cost" label="Cost"/>
            <TextField source="status" label="Status"/>
           
       
            <ShowButton/>
        </Datagrid>
    </List>)
}

export default VisaApplicatioinList