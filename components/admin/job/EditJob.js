import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Edit, SimpleForm, TextInput, DisabledInput, useRecordContext } from "react-admin";
import { DataContext } from "../../../store/GlobalState";
import { putData } from "../../../utils/fetchData";
import { countries } from "../../data";
import FileUpload from "react-material-file-upload";
import SaveIcon from '@mui/icons-material/Save';
import { imageUpload } from "../../../utils/imageUpload";
const ApplicationTitle = ({setID, setTitle, setCountry, setSalary, setFile}) => {
    const record = useRecordContext();
    if (!record) return null;

    useEffect(()=> {
        setID(record.id)
        setTitle(record.title)
        setCountry(record.country)
        setSalary(record.salary)
        setFile(record.file)
    },[])
    
    
    return <span>{`Application No ${record.index}`}</span>;
};

const EditJob = props => {
    const [id, setID] = useState('')
    const [files, setFiles] = useState([]);
    const [title, setTitle] = useState('');
    const [country, setCountry] = useState('');
    const [salary, setSalary] = useState('');
    const [file, setFile] = useState('');
    const selectedFile = files[0]
    const {state, dispatch} = useContext(DataContext)
    const { auth } = state
    
   
        const handleUpdate = async e => {
            e.preventDefault()
            
            let media
            dispatch({ type: 'NOTIFY', payload: {loading: true} })
            
           
            if(selectedFile) media = await imageUpload([
               selectedFile
            ])
            
            const res = await putData(`jobs/${id}`, { 
               title, country, salary,
              file: media[0],
               
          })
            
            if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })
        
            return dispatch({ type: 'NOTIFY', payload: {success: res.msg} })
          }
      
    return (
        <Edit title={<ApplicationTitle setID={setID} setTitle={setTitle} setCountry={setCountry} setSalary={setSalary} setFile={setFile} />} {...props}>
        <form onSubmit={handleUpdate} style={{padding:'2rem'}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth multiline label="Title" value={title} onChange={(e)=> setTitle(e.target.value)}/>
                </Grid>
                <Grid item xs={12} md={6}>
                <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-filled-label">Country</InputLabel>
                    <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    fullWidth
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    >
                    
                    {countries.map((item, i) => (
                        <MenuItem key={i} value={item.name}>{item.name}</MenuItem>
                    ))} 
                    
                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth multiline type="number" label="Average Salary(USD)" value={salary} onChange={(e)=> setSalary(e.target.value)}/>
                </Grid>
            </Grid>
                <Grid className="mt-3">

                <FileUpload value={files} onChange={setFiles} />
                </Grid>
                <Button disabled={!selectedFile} style={{marginTop:'1rem'}} variant="contained" type="submit"><SaveIcon/> Update</Button>
        </form>
    </Edit>
       ) 
    ;
}

export default EditJob