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
  return <span>{`Application No ${record.id}`}</span>;
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
        <Typography variant="h3" sx={{ fontWeight: "medium" }}>
          Name
        </Typography>
        <TextField Lable="First Name" source="firstName" />
        <TextField Lable="Middle Name" source="middleName" />
        <TextField Lable="Surname" source="surname" />
        <Typography variant="h3" sx={{ fontWeight: "medium" }}>
          Father's Name
        </Typography>
        <TextField Lable="First Name" source="fathersNameFirst" />
        <TextField Lable="Middle Name" source="fathersNameMiddle" />
        <TextField Lable="Surname" source="fathersNameSurname" />
        <Typography variant="h3" sx={{ fontWeight: "medium" }}>
          Mother's Name
        </Typography>
        <TextField Lable="First Name" source="mothersNameFirst" />
        <TextField Lable="Middle Name" source="mothersNameMiddle" />
        <TextField Lable="Surname" source="mothersNameSurname" />
        <TextField Lable="Occupation" source="currentJob" />
        <TextField Lable="Monthly Income" source="monthlyIncome" />
        <TextField Lable="Gender" source="gender" />
        <TextField Lable="Date of Birth" source="dateOfBirth" />
        <TextField Lable="Date of Issue" source="dateOfIdCardIssue" />
        <TextField Lable="Religion" source="religion" />
        <TextField Lable="Nationality" source="nationality" />
        <TextField Lable="Blood Group" source="bloodGroup" />
        <TextField Lable="Marital Status" source="maritalStatus" />
        <TextField Lable="Educational Qualification" source="educationalQualification" />
        <TextField Lable="Languages" source="languages" />
        <TextField Lable="IELTS Score" source="ieltsScore" />
        <FileField
          source="ieltsDocument"
          title="IELTS Document"
        />
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
        <TextField Lable="Passport Type" source="passportType" />
        <TextField Lable="Passport Number" source="passportNumber" />
        <TextField
          Lable="Issuing Authority"
          source="passportIssuingAuthority"
        />
        <TextField Lable="Passport Issuing Place" source="passportIssuingPlace" />
        <TextField Lable="Date of Issue" source="passportDateOfIssue" />
        <TextField Lable="Date of Expiry" source="passportDateOfExpiry" />
        <TextField Lable="Nationality/State" source="passportNationality" />
        <FileField source="passportDocument" title="Passport Document" />
        <TextField Lable="Do you have any other passport/Identity Certificate?" source="isOtherPassport" />
        <TextField Lable="Passport Number" source="otherPassportNumber" />
        <TextField
          Lable="Issuing Authority"
          source="otherPassportIssuingAuthority"
        />
        <TextField Lable="Passport Issuing Place" source="otherPassportIssuingPlace" />
        <TextField Lable="Date of Issue" source="otherPassportDateOfIssue" />
        <TextField Lable="Date of Expiry" source="otherPassportDateOfExpiry" />
        <TextField Lable="Nationality/State" source="otherPassportNationality" />
        <FileField source="otherPassportDocument" title="Other Passport Document" />
        <Typography variant="h6" sx={{ fontWeight: "medium" }}>
          Visa Processing Information
        </Typography>
        <TextField Lable="Select your visa" source="visaType" />
        <TextField
          Lable="Visa Issue Country"
          source="visaIssueCountry"
        />
        <TextField
          Lable="Visa Duration"
          source="visaDuration"
        />
        <TextField
          Lable="Visa Issued Place"
          source="visaIssuingPlace"
        />
        <TextField
          Lable="Entry Date"
          source="entryDate"
        />
        <TextField
          Lable="Stay Duration"
          source="stayDuration"
        />
        <FileField
          source="flightReservation"
          title="Flight Reservation"
        />
        <FileField
          source="inspectionCard"
          title="Inspection Card"
        />
        <FileField
          source="invitationLetter"
          title="Invitation Letter"
        />
        <ImageField
          source="utilityBill"
          title="Utility Bill"
        />
        <FileField
          source="policeClearanceCertificate"
          title="Police Clearance Certificate"
        />
        <FileField
          source="bankStatementOfLast6M"
          title="bank Statement Of Last 6 months"
        />
        <FileField
          source="bankSolvencyCertificate"
          title="Bank Solvency Certificate"
        />
         <TextField
          Lable="Place To Stay"
          source="placeToStay"
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
        <TextField
          Lable="How many people are in your family?"
          source="familyMember"
        />
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
        <TextField Lable="Street Address" source="streetAddress" />
        <TextField Lable="Street Address Line 2" source="streetAddressLine2" />
        <TextField Lable="City" source="city" />
        <TextField Lable="State/Province" source="province" />
        <TextField Lable="Postal/Zip Code" source="postal" />
        <TextField Lable="Email" source="email" />
        <TextField Lable="Home Email" source="homeEmail" />
        <TextField Lable="Mobile Number" source="mobile" />
        <TextField Lable="Home Mobile Number" source="homeMobile" />
        <TextField Lable="Telephone" source="telephone" />
      </SimpleShowLayout>
    </Show>
  </>
);

export default VisaApplicationShow;
