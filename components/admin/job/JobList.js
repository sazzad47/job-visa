import { CreateButton, Datagrid, BooleanField, FileField, Filter, ImageField, List, SearchInput, ShowButton, TextField, EditButton } from "react-admin"
import { Pagination } from "../PostPagination"

const SearchFilter = props => (

    <Filter {...props}>
      <SearchInput type="number" placeholder='Search ID' source="index" alwaysOn resettable/>
    </Filter>
    
   
  )



const JobList = props => {
    
   return (<List title="Jobs" pagination={<Pagination />} {...props} filters={<SearchFilter />}>
      
        <Datagrid>
            <TextField source="index" label="Job ID" />
            <TextField source="title" label="Title" />
            <TextField source="country" label="Country"/>
            <TextField source="salary" label="Average Salary"/>
            <FileField source="file" title="PDF"/>
            <EditButton/>
            <ShowButton/>
        </Datagrid>
    </List>)
}

export default JobList