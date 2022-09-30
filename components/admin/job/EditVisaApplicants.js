import { Edit, SimpleForm, TextInput, DisabledInput, useRecordContext } from "react-admin";

const ApplicationTitle = () => {
    const record = useRecordContext();
    if (!record) return null;
    return <span>{`Application No ${record.index}`}</span>;
};

const EditVisaApplicants = props => {
    
       return (
        <Edit title={<ApplicationTitle/>} {...props}>
        <SimpleForm>
            <TextInput disabled label="email" source="email" />
           
            <TextInput multiline title="phone" source="phone" />
            
        </SimpleForm>
    </Edit>
       ) 
    ;
}

export default EditVisaApplicants