import {
  BooleanField,
  Datagrid,
  Filter,
  List,
  SearchInput,
  ShowButton,
  TextField,
} from "react-admin";
import { Pagination } from "../PostPagination";
import { FilterSidebar } from "./FilterSidebar";

const SearchFilter = (props) => (
  <Filter {...props}>
    <SearchInput
      type="text"
      placeholder="Search ID"
      source="_id"
      alwaysOn
      resettable
    />
  </Filter>
);

const VisaApplicatioinList = (props) => {
  return (
    <List
      aside={<FilterSidebar />}
      title="Job Applicants"
      pagination={<Pagination />}
      {...props}
      filters={<SearchFilter />}
    >
      <Datagrid>
        <TextField source="id" label="ID" />
        <TextField source="userId" label="User ID" />
        <TextField source="email" label="Email" />
        <TextField source="phoneNumber" label="Phone" />
        <BooleanField source="paid" label="Paid" />
        <TextField source="status" label="Status" />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default VisaApplicatioinList;
