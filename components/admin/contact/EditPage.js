import { useEffect } from 'react'
import { getData, putData } from '../../../utils/fetchData'
import { Button, Grid, TextField,  } from '@mui/material';
import React, { useState } from 'react';
import { useContext } from 'react';
import { DataContext } from '../../../store/GlobalState';
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "../EditorToolbar";
import "react-quill/dist/quill.snow.css";
import SaveIcon from '@mui/icons-material/Save';
const EditPage = ({pageName}) => {
    const {state, dispatch} = useContext(DataContext)
    const { auth } = state
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    
    const [loading, setLoading] = useState(false)
    

   const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({ type: 'NOTIFY', payload: {loading: true} })
    const res = await putData(`${pageName}/1`, { 
        address, phone, email
        
    })
    if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })
        
    return dispatch({ type: 'NOTIFY', payload: {success: res.msg} })
}
    useEffect(async () => {
     
        setLoading(true)
        const res = await getData(`${pageName}?index=1`)
        let address = res.data.address
        let phone = res.data.phone
        let email = res.data.email
        setAddress(address)
        setPhone(phone)
        setEmail(email)
        setLoading(false)
    
    },[])
  return (
     <React.Fragment>
       {!loading? <div className='p-3'>

      
             <form onSubmit={handleSubmit} className="mt-3">
                 <Grid container spacing={4}>
                  {/* <Grid item xs={12} md={12}>
                  <label className="font-weight-bold"> Phone  </label>
                  <EditorToolbar toolbarId={'t1'}/>
                  <ReactQuill
                  
                  theme="snow"
                  value={phone}
                  onChange={(value)=> setPhone(value)}
                  placeholder={"Write something awesome..."}
                  modules={modules('t1')}
                  formats={formats}
                  />
                </Grid> */}
                   <Grid item xs={12} md={8}>

                  <TextField fullWidth label="Phone" type="number" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </Grid>
                <Grid item xs={12} md={8}>

                 <TextField fullWidth label="Email" type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </Grid>
                  <Grid item xs={12} md={12}>
                  <label className="font-weight-bold"> Address  </label>
                  <EditorToolbar toolbarId={'t2'}/>
                  <ReactQuill
                   
                    theme="snow"
                    value={address}
                    onChange={(value)=> setAddress(value)}
                    placeholder={"Write something awesome..."}
                    modules={modules('t2')}
                    formats={formats}
                  />
                   </Grid>
                 </Grid>
                 <Button disabled={!email} style={{margin:'2rem 0'}} variant="contained" type="submit"><SaveIcon/> Save</Button>
             </form>
        </div> : 'Loading..'}
     </React.Fragment>
  )
}

export default EditPage