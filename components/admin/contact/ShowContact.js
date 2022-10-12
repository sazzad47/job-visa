
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

           
            
            <TextField label = "Name" source="name"/>
            <TextField label = "Phone" source="phone"/>
            <TextField label = "Email" source="email"/>
            <TextField label = "Message" source="message"/>
           
            
        </SimpleShowLayout>
    </Show>
   
    </>
);

export default ShowContact