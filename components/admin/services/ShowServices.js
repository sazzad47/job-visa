
import { ExportButton, FileField, ImageField, RichTextField, Show, SimpleShowLayout, TextField, TopToolbar, useRecordContext } from "react-admin";

import GeneratePDFButton from "./GeneratePDFButton";

const ApplicationTitle = () => {
    const record = useRecordContext();
    if (!record) return null;
    return <span>{`Service No ${record.index}`}</span>;
};

const ApplicationActions = () => (
    <TopToolbar>
        
        <GeneratePDFButton title="Notice"/>
    </TopToolbar>
);

const ShowService = props => (
    <>
    <Show {...props} title={<ApplicationTitle/>} actions={<ApplicationActions/>}>
       
        <SimpleShowLayout id="exportToPDF">

    
            
            <TextField label = "Title" source="title"/>
            <TextField label = "Title" source="title"/>
            <TextField label = "Title" source="title"/>
            <TextField label = "Title" source="title"/>
           
            
            
           
        </SimpleShowLayout>
    </Show>
   
    </>
);

export default ShowService