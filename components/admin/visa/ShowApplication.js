import { Button } from "@mui/material";
import BeenhereIcon from '@mui/icons-material/Beenhere';
import CancelIcon from '@mui/icons-material/Cancel';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { ExportButton, RichTextField, Show, SimpleShowLayout, TextField, TopToolbar } from "react-admin";


const ApplicationActions = () => (
    <TopToolbar>
        
        <Button color="primary" ><BeenhereIcon className="me-2" sx={{fontSize:'0.9rem'}}/>  Approve</Button>
        <Button color="primary" ><CancelIcon className="me-2" sx={{fontSize:'0.9rem'}}/> Decline</Button>
        <Button color="primary" ><TextSnippetIcon className="me-2" sx={{fontSize:'0.9rem'}}/> Generate PDF</Button>
    </TopToolbar>
);

const VisaApplicationShow = props => (
    <>
    <Show {...props} actions={<ApplicationActions/>}>
       
        <SimpleShowLayout>
            <TextField label="Application ID" source="index" />
            <TextField label="Email" source="email" />
            <RichTextField label="Phone" source="phone" />
            {/* <DateField label="Submission date" source="created_at" /> */}
        </SimpleShowLayout>
    </Show>
   
    </>
);

export default VisaApplicationShow