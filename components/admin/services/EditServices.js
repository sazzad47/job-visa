import { Edit, SimpleForm, TextInput } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

 const EditServices = (props) => (
	<Edit {...props}>
        <SimpleForm>
            <TextInput source="title" validate={[required()]} fullWidth />
            <TextInput source="teaser" multiLine={true} label="Short description" />
            <RichTextInput source="body" />
            <DateInput label="Publication date" source="published_at" defaultValue={new Date()} />
        </SimpleForm>
    </Edit>
);

export default EditServices