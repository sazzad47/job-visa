
import { Typography } from "@mui/material";
import { DeleteButton, ExportButton, FileField, ImageField, RichTextField, Show, SimpleShowLayout, TextField, TopToolbar, useRecordContext } from "react-admin";



const ApplicationActions = () => (
    <TopToolbar>
        <DeleteButton/>
    </TopToolbar>
);

const ShowContact = props => (
    <>
    <Show {...props} actions={<ApplicationActions/>}>
       
        <SimpleShowLayout>

           
            
            <TextField Lable = "Name" source="name"/>
            <TextField Lable = "Phone" source="phone"/>
            <TextField Lable = "Email" source="email"/>
            <TextField Lable = "Message" source="message"/>
           
            
        </SimpleShowLayout>
    </Show>
   
    </>
);

export default ShowContact