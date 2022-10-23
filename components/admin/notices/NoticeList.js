import {
  Datagrid,
  FileField,
  Filter,
  List,
  SearchInput,
  ShowButton,
  TextField,
  EditButton,
} from "react-admin";
import { Pagination } from "../PostPagination";

const SearchFilter = (props) => (
  <Filter {...props}>
    <SearchInput
      type="number"
      placeholder="Search ID"
      source="index"
      alwaysOn
      resettable
    />
  </Filter>
);

const JobNotice = (props) => {
  return (
    <List
      title="Jobs"
      pagination={<Pagination />}
      {...props}
      filters={<SearchFilter />}
    >
      <Datagrid>
        <TextField source="index" label="Notice ID" />
        <TextField source="title" label="Title" />
        <FileField source="file" title="PDF" />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default JobNotice;
