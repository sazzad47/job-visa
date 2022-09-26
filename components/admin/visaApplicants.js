import React from 'react';
import { List, Datagrid, ReferenceField, TextField, DateField, EmailField, UrlField, NumberField, Filter, TextInput, EditButton, FilterButton, CreateButton, ExportButton, Button, ShowButton, TopToolbar, SearchInput, useTranslate, FilterForm } from 'react-admin';
import {Show, SimpleShowLayout, RichTextField, Create, Edit, SimpleForm, ReferenceInput, DisabledInput, LongTextInput, NumberInput, SelectInput } from 'react-admin'
import {Pagination} from './PostPagination';


const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};



const SearchFilter = props => (

    <Filter {...props}>
      <SearchInput placeholder='Search ID' source="index" alwaysOn resettable/>
    </Filter>
    
   
  )



export const PostList = props => {
    
   return (<List title="Visa Applicants" pagination={<Pagination />} {...props} filters={<SearchFilter />}>
      
        <Datagrid rowClick="edit">
            <TextField source="index" label="ID" />
            <TextField source="email" label="Email"/>
            <TextField source="phone" label="Phone"/>
           
            <EditButton/>
            <ShowButton/>
        </Datagrid>
    </List>)
}
    
export const visaApplicantsShow = props => (
   
    <Show {...props}>
        
        <SimpleShowLayout>
            <TextField label="Application ID" source="index" />
            <TextField label="Email" source="email" />
            <RichTextField label="Phone" source="phone" />
            {/* <DateField label="Submission date" source="created_at" /> */}
        </SimpleShowLayout>
    </Show>
);

export const PostEdit = props => (
    <Edit {...props} >
        <SimpleForm>
            <DisabledInput source="index" />
            {/* <ReferenceInput source="email" ><SelectInput optionText="name" /></ReferenceInput> */}
            <TextInput source="phone" />
            {/* <LongTextInput source="body" /> */}
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);