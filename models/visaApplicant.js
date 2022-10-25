import mongoose from "mongoose";
const AutoIncrement = require("mongoose-sequence")(mongoose);
const Schema = mongoose.Schema;

const visaApplicantSchema = new mongoose.Schema(
  {
    index: Number,
    userId: Number,
    IdentityCard: {
      type: String,
    },
    IdentityCard: {
      type: String,
      default: ""
    },
    IdCardNumber: {
      type: String,
      default: ""
    },
    firstName: {
      type: String,
      default: ""
    },
    middleName: {
      type: String,
      default: ""
    },
    surname: {
      type: String,
      default: ""
    },
    fathersNameFirst: {
      type: String,
      default: ""
    },
    fathersNameMiddle: {
      type: String,
      default: ""
    },
    fathersNameSurname: {
      type: String,
      default: ""
    },
    mothersNameFirst: {
      type: String,
      default: ""
    },
    mothersNameMiddle: {
      type: String,
      default: ""
    },
    mothersNameSurname: {
      type: String,
      default: ""
    },
    currentJob: {
      type: String,
      default: ""
    },
    monthlyIncome: {
      type: String,
      default: ""
    },
    gender: {
      type: String,
      default: ""
    },
    dateOfBirth: {
      type: String,
      default: ""
    },
    dateOfIdCardIssue: {
      type: String,
      default: ""
    },
    religion: {
      type: String,
      default: ""
    },
    nationality: {
      type: String,
      default: ""
    },
    bloodGroup: {
      type: String,
      default: ""
    },
    maritalStatus: {
      type: String,
      default: ""
    },
    educationalQualification: {
      type: String,
      default: ""
    },
    languages: {
      type: String,
      default: ""
    },
    ieltsScore: {
      type: String,
      default: ""
    },
    ieltsDocument: {
      type: String,
      default: ""
    },
    frontPhotoOfIdCard: {
      type: String,
      default: ""
    },
    backPhotoOfIdCard: {
      type: String,
      default: ""
    },
    photo: {
      type: String,
      default: ""
    },
    signature: {
      type: String,
      default: ""
    },
    passportType: {
      type: String,
      default: ""
    },
    passportNumber: {
      type: String,
      default: ""
    },
    passportIssuingAuthority: {
      type: String,
      default: ""
    },
    passportIssuingPlace: {
      type: String,
      default: ""
    },
    passportDateOfIssue: {
      type: String,
      default: ""
    },
    passportDateOfExpiry: {
      type: String,
      default: ""
    },
    passportNationality: {
      type: String,
      default: ""
    },
    passportDocument: {
      type: String,
      default: ""
    },
    isOtherPassport: {
      type: String,
      default: ""
    },
    otherPassportNumber: {
      type: String,
      default: ""
    },
    otherPassportIssuingAuthority: {
      type: String,
      default: ""
    },
    otherPassportIssuingPlace: {
      type: String,
      default: ""
    },
    otherPassportDateOfIssue: {
      type: String,
      default: ""
    },
    otherPassportDateOfExpiry: {
      type: String,
      default: ""
    },
    otherPassportNationality: {
      type: String,
      default: ""
    },
    otherPassportDocument: {
      type: String,
      default: ""
    },
    visaType: {
      type: String,
      default: ""
    },
    visaIssueCountry: {
      type: String,
      default: ""
    },
    visaDuration: {
      type: String,
      default: ""
    },
    visaIssuingPlace: {
      type: String,
      default: ""
    },
    entryDate: {
      type: String,
      default: ""
    },
    stayDuration: {
      type: String,
      default: ""
    },
    flightReservation: {
      type: String,
      default: ""
    },
    inspectionCard: {
      type: String,
      default: ""
    },
    invitationLetter: {
      type: String,
      default: ""
    },
    utilityBill: {
      type: String,
      default: ""
    },
    policeClearanceCertificate: {
      type: String,
      default: ""
    },
    bankStatementOfLast6M: {
      type: String,
      default: ""
    },
    bankSolvencyCertificate: {
      type: String,
      default: ""
    },
    placeToStay: {
      type: String,
      default: ""
    },
    locatedAtHome: {
      type: String,
      default: ""
    },
    homeStreetAddress: {
      type: String,
      default: ""
    },
    homeStreetAddressLine2: {
      type: String,
      default: ""
    },
    homeCity: {
      type: String,
      default: ""
    },
    homeProvince: {
      type: String,
      default: ""
    },
    homePostal: {
      type: String,
      default: ""
    },
    homeStayDuration: {
      type: String,
      default: ""
    },
    familyDependentOn: {
      type: String,
      default: ""
    },
    familyMember: {
      type: String,
      default: ""
    },
    bankName: {
      type: String,
      default: ""
    },
    bankStateIssuDate: {
      type: String,
      default: ""
    },
    bankStateDocument: {
      type: String,
      default: ""
    },
    hospitalName: {
      type: String,
      default: ""
    },
    MedicalReportIssueDate: {
      type: String,
      default: ""
    },
    MedicalReportDocument: {
      type: String,
      default: ""
    },
    streetAddress: {
      type: String,
      default: ""
    },
    streetAddressLine2: {
      type: String,
      default: ""
    },
    city: {
      type: String,
      default: ""
    },
    province: {
      type: String,
      default: ""
    },
    postal: {
      type: String,
      default: ""
    },
    email: {
      type: String,
      default: ""
    },
    homeEmail: {
      type: String,
      default: ""
    },
    mobile: {
      type: String,
      default: ""
    },
    homeMobile: {
      type: String,
      default: ""
    },
    telephone: {
      type: String,
      default: ""
    },
    cost: {
      type: Number,
      default: 0,
    },
    paid: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      default: "pending",
    },
    visa: {
      type: String,
      default: "",
    },
    uploadedVisa: {
      type: Boolean,
      default: false,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

if (!mongoose.models.visaApplicant) {
  visaApplicantSchema.plugin(AutoIncrement, {
    id: "visaApplicationCounter",
    inc_field: "index",
  });
}

let Dataset =
  mongoose.models.visaApplicant ||
  mongoose.model("visaApplicant", visaApplicantSchema);
export default Dataset;
