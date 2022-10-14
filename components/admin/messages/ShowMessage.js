
import { Typography } from "@mui/material";
import { DeleteButton, ExportButton, FileField, ImageField, RichTextField, Show, SimpleShowLayout, TextField, TopToolbar, useRecordContext } from "react-admin";

const ApplicationTitle = () => {
    const record = useRecordContext();
    if (!record) return null;
    return <span>{`Message No ${record.index}`}</span>;
};



const ShowContact = props => (
    <>
    <Show {...props} title={<ApplicationTitle/>} >
       
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