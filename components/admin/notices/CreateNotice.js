import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useContext } from 'react';
import { Create, SimpleForm, ImageField, FileInput, ImageInput, TextInput, DateInput, required } from 'react-admin';
import { DataContext } from '../../../store/GlobalState';

import SaveIcon from '@mui/icons-material/Save';
import { postData } from '../../../utils/fetchData';
import {imageUpload} from '../../../utils/imageUpload'
import { countries } from '../../data';
import { useState } from 'react';
import FileUpload from "react-material-file-upload";

const CreateNotice = () => {
  const initialState = { title: '', file: '' }
  const [data, setData] = useState(initialState)
  const { title, file } = data
  const [files, setFiles] = useState([]);
  const selectedFile = files[0]
    

  const {state, dispatch} = useContext(DataContext)
  const { auth } = state

  

  const handleChangeInput = e => {
    const {name, value} = e.target
    setData({...data, [name]:value})
    dispatch({ type: 'NOTIFY', payload: {} })
  }
   

    const handleSubmit = async e => {
        e.preventDefault()
        
        let media
        dispatch({ type: 'NOTIFY', payload: {loading: true} })
        
        console.log('state', selectedFile)
        if(selectedFile) media = await imageUpload([
            selectedFile
        ])
        
        const res = await postData('notices', { 
           ...data,
          file: media[0],
           
      })
        
        if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })
    
        return dispatch({ type: 'NOTIFY', payload: {success: res.msg} })
      }
    
     
     
    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2} sx={{mt:3}}>
                <Grid item xs={12} md={8}>
                    <TextField fullWidth multiline name="title" value={title} label="Title" onChange={handleChangeInput}/> 
                </Grid>
                
            </Grid>
            
            <Grid className="mt-3">

                <FileUpload value={files} onChange={setFiles} />
                </Grid>
                <Button disabled={!selectedFile} style={{marginTop:'1rem'}} variant="contained" type="submit"><SaveIcon/> Save</Button>
        </form>
    )
}
export default CreateNotice