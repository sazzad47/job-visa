import { Datagrid, EditButton, Filter, List, SearchInput, ShowButton, TextField } from "react-admin"
import { Pagination } from "../PostPagination"

const SearchFilter = props => (

    <Filter {...props}>
      <SearchInput placeholder='Search ID' source="index" alwaysOn resettable/>
    </Filter>
    
   
  )



const VisaApplicatioinList = props => {
    
   return (<List title="Visa Applicants" pagination={<Pagination />} {...props} filters={<SearchFilter />}>
      
        <Datagrid rowClick="edit">
            <TextField source="index" label="ID" />
            <TextField source="email" label="Email"/>
            <TextField source="phone" label="Phone"/>
           
            <EditButton/>
            <ShowButton/>
        </Datagrid>
    </List>)
}

export default VisaApplicatioinList