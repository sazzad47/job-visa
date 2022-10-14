import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Create, DateInput, Edit, SimpleForm, TextInput } from 'react-admin';
import { DataContext } from '../../../store/GlobalState';
import { postData } from '../../../utils/fetchData';
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "../EditorToolbar";
import "react-quill/dist/quill.snow.css";
import SaveIcon from '@mui/icons-material/Save';

  const CreatePage = () => {
    const {state, dispatch} = useContext(DataContext)
    const { auth } = state
    const [data, setData] = useState({
      address: '',
      phone: '',
      email: '',
    });
    const onChangeValue = (e) => {
      setData({
        ...data,
        [e.target.name]:e.target.value
      });
    } 
    const onphone = (value) => {
      setData({ ...data,
        phone:value
      });
    } 
    const onemail = (value) => {
      setData({ ...data,
        email:value
      });
    } 

    const handleSubmit = async (e) => {
      e.preventDefault()
      dispatch({ type: 'NOTIFY', payload: {loading: true} })
      const res = await postData('contact', { 
        ...data
        
   })
     
     if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })
 
     return dispatch({ type: 'NOTIFY', payload: {success: res.msg} })
    }
    const [isError, setError] = useState(null);
    return (
      <React.Fragment>
             <form onSubmit={handleSubmit} className="mt-3">
                 <Grid container spacing={4}>
                  <Grid item xs={12} md={8}>

                   <TextField fullWidth label="address" type="text" name='address' value={data.address} onChange={onChangeValue} />
                  </Grid>
                  <Grid item xs={12} md={12}>
                  <label className="font-weight-bold"> Short Description  </label>
                  <EditorToolbar toolbarId={'t1'}/>
                  <ReactQuill
                   
                    theme="snow"
                    value={data.phone}
                    onChange={onphone}
                    placeholder={"Write something awesome..."}
                    modules={modules('t1')}
                    formats={formats}
                  />
                   </Grid>
                  <Grid item xs={12} md={12}>
                  <label className="font-weight-bold"> email  </label>
                  <EditorToolbar toolbarId={'t2'}/>
                  <ReactQuill
                    
                    theme="snow"
                    value={data.email}
                    onChange={onemail}
                    placeholder={"Write something awesome..."}
                    modules={modules('t2')}
                    formats={formats}
                  />
                   </Grid>
                 </Grid>
                 <Button disabled={!data.email} style={{marginTop:'1rem'}} variant="contained" type="submit"><SaveIcon/> Save</Button>
             </form>
      </React.Fragment>
    )
  }

export default CreatePage