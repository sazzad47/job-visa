import { BooleanField, Datagrid, EditButton, Filter, List, SearchInput, ShowButton, TextField } from "react-admin"
import { Pagination } from "../PostPagination"
import { FilterSidebar } from './FilterSidebar';
const SearchFilter = props => (

    <Filter {...props}>
      <SearchInput type="number" placeholder='Search ID' source="index" alwaysOn resettable/>
      {/* <SearchInput type="number" placeholder='Search User ID' source="userId" alwaysOn resettable/> */}
    </Filter>
    
   
  )



const VisaApplicatioinList = props => {
    
   return (<List aside={<FilterSidebar />} title="Visa Applicants" pagination={<Pagination />} {...props} filters={<SearchFilter />}>
      
        <Datagrid>
            <TextField source="index" label="ID" />
            <TextField source="userId" label="User ID" />
            <TextField source="passportCountry" label="From Country"/>
            <TextField source="wishedCountry" label="Visa Application Country"/>
            <TextField source="visaType" label="Category"/>
            <TextField source="cost" label="Cost"/>
            <BooleanField source="paid" label="Paid" />
            <TextField source="status" label="Status"/>
            <BooleanField source="uploadedVisa" label="Visa Uploaded"/>
           
            <ShowButton/>
        </Datagrid>
    </List>)
}

export default VisaApplicatioinList