import { CreateButton, Datagrid, EditButton, FileField, Filter, ImageField, List, SearchInput, ShowButton, TextField } from "react-admin"
import { Pagination } from "../PostPagination"

const SearchFilter = props => (

    <Filter {...props}>
      <SearchInput placeholder='Search Title' source="Title" alwaysOn resettable/>
    </Filter>
    
   
  )



const JobList = props => {
    
   return (<List title="Jobs" pagination={<Pagination />} {...props} filters={<SearchFilter />}>
      
        <Datagrid>
            <TextField source="title" label="Title" />
            <TextField source="shortDescription" label="Short Description"/>
            <ImageField source="photo" label="Photo"/>
            <FileField source="file" label="File"/>
            <CreateButton/>
            <ShowButton/>
        </Datagrid>
    </List>)
}

export default JobList