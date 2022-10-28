import {
  FileField,
  Show,
  SimpleShowLayout,
  TextField,
  useRecordContext,
} from "react-admin";

const ApplicationTitle = () => {
  const record = useRecordContext();
  if (!record) return null;
  return <span>{`Payment ID ${record.id}`}</span>;
};

const ShowPayment = (props) => (
  <>
    <Show {...props} title={<ApplicationTitle />}>
      <SimpleShowLayout>
        <TextField source="index" label="Payment ID" />
        <TextField source="visaApplyID" label="Visa Application ID" />
        <TextField source="method" label="Payment Method" />
        <TextField source="amount" label="Amount" />
        <FileField source="bankReceipt" title="Bank Receipt" />
        <TextField source="firstName" label="First Name" />
        <TextField source="lastName" label="Last Name" />
        <TextField source="address1" label="Address line 1" />
        <TextField source="address2" label="Address line 2" />
        <TextField source="city" label="City" />
        <TextField source="customer_state" label="State/Province" />
        <TextField source="zip" label="Zip" />
        <TextField source="country" label="Country" />
      </SimpleShowLayout>
    </Show>
  </>
);

export default ShowPayment;
