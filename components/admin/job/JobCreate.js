import { Button, Grid, TextField, Typography } from '@mui/material';
import { useContext } from 'react';
import { Create, SimpleForm, ImageField, FileInput, ImageInput, TextInput, DateInput, required } from 'react-admin';
import { DataContext } from '../../../store/GlobalState';
import FileUpload from '../../apply/visa/FileUpload';
import SaveIcon from '@mui/icons-material/Save';
import { postData } from '../../../utils/fetchData';
import {imageUpload} from '../../../utils/imageUpload'

const JobCreate = () => {
    const { state, dispatch } = useContext(DataContext);
    const {jobs} = state
    const {photo, file} = state.jobs
    const handleInput = (e) => {
        dispatch({
          type: 'CHANGE_JOBS_CREATE_INPUTS', 
          payload: {name: e.target.name, value: e.target.value}
        })
    }
    

    const invalidDocument = (
        !photo ||
        !file
    )


    const handleSubmit = async e => {
        e.preventDefault()
        
        let media
        dispatch({ type: 'NOTIFY', payload: {loading: true} })
        
        if(!invalidDocument) media = await imageUpload([
           photo,
           file
        ])
        
    
        const res = await postData('jobs', { 
           ...jobs,
          photo: media[0].url,
          file: media[1].url,
           
      })
        
        if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })
    
        return dispatch({ type: 'NOTIFY', payload: {success: res.msg} })
      }
    
     console.log('state', photo, file)
    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField name="title" label="Title" onChange={handleInput}/> 
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField name="shortDescription" label="Short Description" onChange={handleInput}/>
                </Grid>
            </Grid>
            <Typography style={{marginTop: '1rem', marginBottom:'0.5rem'}}> Add a photo</Typography>
            <FileUpload name="photo" type="CHANGE_JOBS_CREATE_INPUTS"/>
            <Typography style={{marginTop: '1rem', marginBottom:'0.5rem'}}> Add a pdf file of the circular</Typography>
            <FileUpload type="CHANGE_JOBS_CREATE_INPUTS"/>
            <Button style={{marginTop:'1rem'}} variant="contained" type="submit"><SaveIcon/> Save</Button>
        </form>
    )
}
export default JobCreate