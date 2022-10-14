

import { Datagrid, EditButton, Filter, List, SearchInput, ShowButton, TextField } from "react-admin"
import { Pagination } from "../PostPagination"

const SearchFilter = props => (

    <Filter {...props}>
      <SearchInput placeholder='Search by Email' source="email" alwaysOn resettable/>
    </Filter>
    
   
  )



const ContactList = props => {
    
   return (<List title="Contacts" pagination={<Pagination />} {...props} filters={<SearchFilter />}>
      
        <Datagrid>
            <TextField source="name" label="Name" />
            <TextField source="phone" label="Phone"/>
            <TextField source="email" label="Email"/>
            <TextField source="message" label="Message"/>
            <ShowButton/>
        </Datagrid>
    </List>)
}

export default ContactList