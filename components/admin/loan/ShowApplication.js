
import { Typography } from "@mui/material";
import { ExportButton, FileField, ImageField, RichTextField, Show, SimpleShowLayout, TextField, TopToolbar, useRecordContext } from "react-admin";
import ApproveBtn from "./ApproveBtn";
import { applicantInfo, bankInfo, contactInfo, fatherInfo, landInfo, loanInfo, motherInfo } from "./data";
import DeclineBtn from "./DeclineBtn";
import GeneratePDFButton from "./GeneratePDFButton";

const ApplicationTitle = () => {
    const record = useRecordContext();
    if (!record) return null;
    return <span>{`Application No ${record.index}`}</span>;
};

const ApplicationActions = () => (
    <TopToolbar>
        
       
        <ApproveBtn/>
        <DeclineBtn/>
        <GeneratePDFButton title="Loan"/>
    </TopToolbar>
);

const VisaApplicationShow = props => (
    <>
    <Show {...props} title={<ApplicationTitle/>} actions={<ApplicationActions/>}>
       
        <SimpleShowLayout id="exportToPDF">

            {/* <DateField label="Submission date" source="created_at" /> */}
            <Typography variant='h6' sx={{fontWeight: 'medium'}}>Loan Information</Typography>
             {loanInfo.map((item, i) => (
                item.type ==='text'? <TextField key={i} label={item.label} source={item.value}/> : item.type==='photo'? <ImageField key={i} label={item.label} source={item.value}/> : <FileField key={i} title={item.label} source={item.value}/>
             ))}
            <Typography variant='h6' sx={{fontWeight: 'medium'}}>Applicant's Information</Typography>
             {applicantInfo.map((item, i) => (
                item.type ==='text'? <TextField key={i} label={item.label} source={item.value}/> : item.type==='photo'? <ImageField key={i} label={item.label} source={item.value}/> : <FileField key={i} title={item.label} source={item.value}/>
             ))}
            <Typography variant='h6' sx={{fontWeight: 'medium'}}>Father's Information</Typography>
             {fatherInfo.map((item, i) => (
                item.type ==='text'? <TextField key={i} label={item.label} source={item.value}/> : item.type==='photo'? <ImageField key={i} label={item.label} source={item.value}/> : <FileField key={i} title={item.label} source={item.value}/>
             ))}
            <Typography variant='h6' sx={{fontWeight: 'medium'}}>Mother's Information</Typography>
             {motherInfo.map((item, i) => (
                item.type ==='text'? <TextField key={i} label={item.label} source={item.value}/> : item.type==='photo'? <ImageField key={i} label={item.label} source={item.value}/> : <FileField key={i} title={item.label} source={item.value}/>
             ))}
            <Typography variant='h6' sx={{fontWeight: 'medium'}}>Land Information</Typography>
             {landInfo.map((item, i) => (
                item.type ==='text'? <TextField key={i} label={item.label} source={item.value}/> : item.type==='photo'? <ImageField key={i} label={item.label} source={item.value}/> : <FileField key={i} title={item.label} source={item.value}/>
             ))}
            <Typography variant='h6' sx={{fontWeight: 'medium'}}>Bank Information</Typography>
             {bankInfo.map((item, i) => (
                item.type ==='text'? <TextField key={i} label={item.label} source={item.value}/> : item.type==='photo'? <ImageField key={i} label={item.label} source={item.value}/> : <FileField key={i} title={item.label} source={item.value}/>
             ))}
            <Typography variant='h6' sx={{fontWeight: 'medium'}}>Contact Information</Typography>
             {contactInfo.map((item, i) => (
                item.type ==='text'? <TextField key={i} label={item.label} source={item.value}/> : item.type==='photo'? <ImageField key={i} label={item.label} source={item.value}/> : <FileField key={i} title={item.label} source={item.value}/>
             ))}
        </SimpleShowLayout>
    </Show>
   
    </>
);

export default VisaApplicationShow