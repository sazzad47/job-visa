
import { Typography } from "@mui/material";
import { ExportButton, FileField, ImageField, RichTextField, Show, SimpleShowLayout, TextField, TopToolbar, useRecordContext } from "react-admin";
import MarkAsPaid from "../MarkAsPaid";
import SetCost from "../SetCost";
import ApproveBtn from "./ApproveBtn";
import { applicantInfo, contactInfo, jobInfo, passportVisaInfo } from "./data";
import DeclineBtn from "./DeclineBtn";
import GeneratePDFButton from "./GeneratePDFButton";

const ApplicationTitle = () => {
    const record = useRecordContext();
    if (!record) return null;
    console.log('pdf', record.sJobExperienceCertificate)
    return <span>{`Application No ${record.index}`}</span>;
};

const ApplicationActions = () => (
    <TopToolbar>
        
        <SetCost resource="jobApplicants" />
        <MarkAsPaid resource="jobApplicants" />
        <ApproveBtn/>
        <DeclineBtn/>
        <GeneratePDFButton title="Job"/>
    </TopToolbar>
);

const VisaApplicationShow = props => (
    <>
    <Show {...props} title={<ApplicationTitle/>} actions={<ApplicationActions/>}>
       
        <SimpleShowLayout id="exportToPDF">

            {/* <DateField label="Submission date" source="created_at" /> */}
            <Typography variant='h6' sx={{fontWeight: 'medium'}}>Job Information</Typography>
             {jobInfo.map((item, i) => (
                item.type ==='text'? <TextField key={i} label={item.label} source={item.value}/> : item.type==='photo'? <ImageField key={i} label={item.label} source={item.value}/> : <FileField key={i} title={item.label} source={item.value}/>
             ))}
             
            <Typography variant='h6' sx={{fontWeight: 'medium'}}>Applicant's Information</Typography>
             {applicantInfo.map((item, i) => (
                item.type ==='text'? <TextField key={i} label={item.label} source={item.value}/> : item.type==='photo'? <ImageField key={i} label={item.label} source={item.value}/> : <FileField key={i} title={item.label} source={item.value}/>
             ))}
            <Typography variant='h6' sx={{fontWeight: 'medium'}}>Passport/Visa Information</Typography>
             {passportVisaInfo.map((item, i) => (
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