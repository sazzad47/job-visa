import {
  Datagrid,
  FileField,
  Filter,
  List,
  SearchInput,
  ShowButton,
  TextField,
} from "react-admin";
import { Pagination } from "../PostPagination";

const SearchFilter = (props) => (
  <Filter {...props}>
    <SearchInput
      placeholder="Search by ID"
      source="_id"
      alwaysOn
      resettable
    />
  </Filter>
);

const PaymentList = (props) => {
  return (
    <List
      title="Payments"
      pagination={<Pagination />}
      {...props}
      filters={<SearchFilter />}
    >
      <Datagrid>
        <TextField source="id" label="Payment ID" />
        <TextField source="visaApplyID" label="Visa Application ID" />
        <TextField source="method" label="Payment Method" />
        <TextField source="amount" label="Amount" />
        <TextField source="country" title="Country" />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default PaymentList;
