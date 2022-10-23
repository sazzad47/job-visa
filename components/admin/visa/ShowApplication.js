import { Typography } from "@mui/material";
import {
  ExportButton,
  FileField,
  ImageField,
  RichTextField,
  Show,
  SimpleShowLayout,
  TextField,
  TopToolbar,
  useRecordContext,
} from "react-admin";
import MarkAsPaid from "../MarkAsPaid";
import SetCost from "../SetCost";
import ApproveBtn from "./ApproveBtn";
import DeclineBtn from "./DeclineBtn";
import GeneratePDFButton from "./GeneratePDFButton";
import UploadVisa from "./UploadVisa";

const ApplicationTitle = () => {
  const record = useRecordContext();
  if (!record) return null;
  return <span>{`Application No ${record.index}`}</span>;
};

const ApplicationActions = () => (
  <TopToolbar>
    <SetCost resource="visaApplicants" />
    <MarkAsPaid resource="visaApplicants" />
    <UploadVisa />
    <ApproveBtn />
    <DeclineBtn />
    <GeneratePDFButton title="Visa" />
  </TopToolbar>
);

const VisaApplicationShow = (props) => (
  <>
    <Show
      {...props}
      title={<ApplicationTitle />}
      actions={<ApplicationActions />}
    >
      <SimpleShowLayout id="exportToPDF">
        <Typography variant="h6" sx={{ fontWeight: "medium" }}>
          Personal Information
        </Typography>
        <TextField Lable="Identity Card" source="IdentityCard" />
        <TextField Lable="ID Card Number" source="IdCardNumber" />
        <TextField Lable="Full Name" source="fullName" />
        <TextField Lable="Father's Name" source="fathersName" />
        <TextField Lable="Mother's Name" source="mothersName" />
        <TextField Lable="Street Address" source="streetAddress" />
        <TextField Lable="Street Address Line 2" source="streetAddressLine2" />
        <TextField Lable="City" source="city" />
        <TextField Lable="State/Province" source="province" />
        <TextField Lable="Postal/Zip Code" source="postal" />
        <TextField Lable="Gender" source="gender" />
        <TextField Lable="Date of Birth" source="dateOfBirth" />
        <TextField Lable="Date of Issue" source="dateOfIdCardIssue" />
        <TextField Lable="Religion" source="religion" />
        <TextField Lable="Nationality" source="nationality" />
        <TextField Lable="Blood Group" source="bloodGroup" />
        <TextField Lable="Marital Status" source="maritalStatus" />
        <ImageField
          source="frontPhotoOfIdCard"
          title="Front Photo of your ID Card"
        />
        <ImageField
          source="backPhotoOfIdCard"
          title="Back Photo of your ID Card"
        />
        <ImageField source="photo" title="Your Photo" />
        <ImageField source="signature" title="Your Signature" />
        <Typography variant="h6" sx={{ fontWeight: "medium" }}>
          Passport Information
        </Typography>
        <TextField Lable="Country" source="passportCountry" />
        <TextField Lable="Passport Number" source="passportNumber" />
        <TextField
          Lable="Issuing Authority"
          source="passportIssuingAuthority"
        />
        <TextField Lable="Date of Birth" source="passportDateOfBirth" />
        <TextField Lable="Date of Issue" source="passportDateOfIssue" />
        <TextField Lable="Date of Expiry" source="passportDateOfExpiry" />
        <FileField source="passportDocument" title="Upload your passport" />
        <Typography variant="h6" sx={{ fontWeight: "medium" }}>
          Visa Processing Information
        </Typography>
        <TextField
          Lable="Name of the country you wish to visit"
          source="wishedCountry"
        />
        <TextField Lable="Select your visa" source="visaType" />
        <FileField
          source="marriageCertificate"
          title="Upload your marriage certificate"
        />

        <TextField
          Lable="How many months/years do you want to stay?"
          source="wishedStayDuration"
        />
        <TextField
          Lable="Do you want to be citizen there?"
          source="isWishingCitizenship"
        />
        <Typography variant="h6" sx={{ fontWeight: "medium" }}>
          Home Information
        </Typography>
        <TextField
          Lable="Located at the home address?"
          source="locatedAtHome"
        />
        <TextField Lable="Street Address" source="homeStreetAddress" />
        <TextField
          Lable="Street Address Line 2"
          source="homeStreetAddressLine2"
        />
        <TextField Lable="City" source="homeCity" />
        <TextField Lable="State/Province" source="homeProvince" />
        <TextField Lable="Postal/Zip Code" source="homePostal" />
        <TextField
          Lable="How long you are in this address?"
          source="homeStayDuration"
        />
        <TextField
          Lable="Who does your family depend on?"
          source="familyDependentOn"
        />
        <TextField Lable="What do you do now?" source="currentJob" />
        <TextField
          Lable="How much is your monthly income?"
          source="monthlyIncome"
        />
        <TextField
          Lable="How many people are in your family?"
          source="familyMember"
        />
        <TextField
          Lable="Educational Qualification"
          source="educationalQualification"
        />
        <TextField
          Lable=">How many languages do you know?"
          source="languages"
        />
        <TextField Lable="IELTS Score" source="ieltsScore" />
        <FileField source="ieltsDocument" title="IELTS Document" />
        <Typography variant="h6" sx={{ fontWeight: "medium" }}>
          Bank Statement
        </Typography>
        <TextField Lable="Name of the bank" source="bankName" />
        <TextField Lable="Date of Issue" source="bankStateIssuDate" />
        <FileField
          source="bankStateDocument"
          title="Upload bank statement file"
        />
        <Typography variant="h6" sx={{ fontWeight: "medium" }}>
          Medical Report
        </Typography>
        <TextField Lable="Name of the hospital" source="hospitalName" />
        <TextField Lable="Date of Issue" source="MedicalReportIssueDate" />
        <FileField
          source="MedicalReportDocument"
          title="Upload medical report file"
        />
        <Typography variant="h6" sx={{ fontWeight: "medium" }}>
          Contact Information
        </Typography>
        <TextField Lable="Email" source="email" />
        <TextField Lable="Phone Number" source="phone" />
        <TextField Lable="Home Phone Number" source="homePhone" />
      </SimpleShowLayout>
    </Show>
  </>
);

export default VisaApplicationShow;
