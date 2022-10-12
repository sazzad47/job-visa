
import { Typography } from "@mui/material";
import { DeleteButton, ExportButton, FileField, ImageField, RichTextField, Show, SimpleShowLayout, TextField, TopToolbar, useRecordContext } from "react-admin";

const ApplicationTitle = () => {
    const record = useRecordContext();
    if (!record) return null;
    return <span>{`Payment ID ${record.index}`}</span>;
};

const ApplicationActions = () => (
    <TopToolbar>
        <DeleteButton/>
    </TopToolbar>
);

const ShowPayment = props => (
    <>
    <Show {...props} title={<ApplicationTitle/>} actions={<ApplicationActions/>}>
       
        <SimpleShowLayout>

           
            
            <TextField source="index" label="Payment ID" />
            <TextField source="visaApplyID" label="Visa Application ID" />
            <TextField source="jobApplyID" label="Job Application ID"/>
            <TextField source="method" label="Payment Method"/>
            <TextField source="amount" label="Amount"/>
            <FileField source="bankReceipt" title="Bank Receipt"/>
           
            
        </SimpleShowLayout>
    </Show>
   
    </>
);

export default ShowPayment