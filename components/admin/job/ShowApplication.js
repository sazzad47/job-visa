
import { Typography } from "@mui/material";
import { ExportButton, FileField, ImageField, RichTextField, Show, SimpleShowLayout, TextField, TopToolbar, useRecordContext } from "react-admin";
import ApproveBtn from "./ApproveBtn";
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
        <GeneratePDFButton title="Visa"/>
    </TopToolbar>
);

const VisaApplicationShow = props => (
    <>
    <Show {...props} title={<ApplicationTitle/>} actions={<ApplicationActions/>}>
       
        <SimpleShowLayout id="exportToPDF">

            {/* <DateField label="Submission date" source="created_at" /> */}
            <Typography variant='h6' sx={{fontWeight: 'medium'}}>Personal Information</Typography>
            <TextField label = "Identity Card" source="IdentityCard"/>
            <TextField label = "ID Card Number" source="IdCardNumber"/>
            <TextField label = "Full Name" source="fullName"/>
            <TextField label = "Father's Name" source="fathersName"/>
            <TextField label = "Mother's Name" source="mothersName"/>
            <TextField label = "Street Address" source="streetAddress"/>
            <TextField label = "Street Address Line 2" source="streetAddressLine2"/>
            <TextField label = "City" source="city"/>
            <TextField label = "State/Province" source="province"/>
            <TextField label = "Postal/Zip Code" source="postal"/>
            <TextField label = "Gender" source="gender"/>
            <TextField label = "Date of Birth" source="dateOfBirth"/>
            <TextField label = "Date of Issue" source="dateOfIdCardIssue"/>
            <TextField label = "Religion" source="religion"/>
            <TextField label = "Nationality" source="nationality"/>
            <TextField label = "Blood Group" source="bloodGroup"/>
            <TextField label = "Marital Status" source="maritalStatus"/>
            <ImageField source="frontPhotoOfIdCard" title="Front Photo of your ID Card" />
            <ImageField source="backPhotoOfIdCard" title="Back Photo of your ID Card" />
            <ImageField source="photo" title="Your Photo" />
            <ImageField source="signature" title="Your Signature" />
            <Typography variant="h6" sx={{fontWeight: 'medium'}}>Passport Information</Typography>
            <TextField label = "Country" source="passportCountry"/>
            <TextField label = "Passport Number" source="passportNumber"/>
            <TextField label = "Issuing Authority" source="passportIssuingAuthority"/>
            <TextField label = "Date of Birth" source="passportDateOfBirth"/>
            <TextField label = "Date of Issue" source="passportDateOfIssue"/>
            <TextField label = "Date of Expiry" source="passportDateOfExpiry"/>
            <FileField source="passportDocument" title="Upload your passport" />
            <Typography variant="h6" sx={{fontWeight: 'medium'}}>Visa Processing Information</Typography>
            <TextField label = "Name of the country you wish to visit" source="wishedCountry"/>
            <TextField label = "Select your visa" source="visaType"/>
            <FileField source="marriageCertificate" title="Upload your marriage certificate" />
            
            <TextField label = "How many months/years do you want to stay?" source="wishedStayDuration"/>
            <TextField label = "Do you want to be citizen there?" source="isWishingCitizenship"/>
            <Typography variant="h6" sx={{fontWeight: 'medium'}}>Home Information</Typography>
            <TextField label = "Located at the home address?" source="locatedAtHome"/>
            <TextField label = "Street Address" source="homeStreetAddress"/>
            <TextField label = "Street Address Line 2" source="homeStreetAddressLine2"/>
            <TextField label = "City" source="homeCity"/>
            <TextField label = "State/Province" source="homeProvince"/>
            <TextField label = "Postal/Zip Code" source="homePostal"/>
            <TextField label = "How long you are in this address?" source="homeStayDuration"/>
            <TextField label = "Who does your family depend on?" source="familyDependentOn"/>
            <TextField label = "What do you do now?" source="currentJob"/>
            <TextField label = "How much is your monthly income?" source="monthlyIncome"/>
            <TextField label = "How many people are in your family?" source="familyMember"/>
            <TextField label = "Educational Qualification" source="educationalQualification"/>
            <TextField label = ">How many languages do you know?" source="languages"/>
            <TextField label = "IELTS Score" source="ieltsScore"/>
            <FileField source="ieltsDocument" title="IELTS Document" />
            <Typography variant="h6" sx={{fontWeight: 'medium'}}>Bank Statement</Typography>
            <TextField label = "Name of the bank" source="bankName"/>
            <TextField label = "Date of Issue" source="bankStateIssuDate"/>
            <FileField source="bankStateDocument" title="Upload bank statement file" />
            <Typography variant="h6" sx={{fontWeight: 'medium'}}>Medical Report</Typography>
            <TextField label = "Name of the hospital" source="hospitalName"/>
            <TextField label = "Date of Issue" source="MedicalReportIssueDate"/>
            <FileField source="MedicalReportDocument" title="Upload medical report file" />
            <Typography variant="h6" sx={{fontWeight: 'medium'}}>Contact Information</Typography>
            <TextField label = "Email" source="email"/>
            <TextField label = "Phone Number" source="phone"/>
            <TextField label = "Home Phone Number" source="homePhone"/>
        </SimpleShowLayout>
    </Show>
   
    </>
);

export default VisaApplicationShow