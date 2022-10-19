import mongoose from 'mongoose'
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const visaApplicantSchema = new mongoose.Schema({
    index: Number,
    userId: Number,
    IdentityCard: {
        type: String,
    },
    IdCardNumber: {
        type: String,
    },
    fullName: {
        type: String,
    },
    fathersName: {
        type: String,
    },
    mothersName: {
        type: String,
    },
    streetAddress: {
        type: String,
    },
    streetAddressLine2: {
        type: String,
    },
    city: {
        type: String,
    },
    province: {
        type: String,
    },
    postal: {
        type: String,
    },
    gender: {
        type: String,
    },
    dateOfBirth: {
        type: String,
    },
    dateOfIdCardIssue: {
        type: String,
    },
    religion: {
        type: String,
    },
    nationality: {
        type: String,
    },
    bloodGroup: {
        type: String,
    },
    maritalStatus: {
        type: String,
    },
    frontPhotoOfIdCard: {
        type: String,
    },
    backPhotoOfIdCard: {
        type: String,
    },
    photo: {
        type: String,
    },
    signature: {
        type: String,
    },
    passportCountry: {
        type: String,
    },
    passportNumber: {
        type: String,
    },
    passportIssuingAuthority: {
        type: String,
    },
    passportDateOfBirth: {
        type: String,
    },
    passportDateOfIssue: {
        type: String,
    },
    passportDateOfExpiry: {
        type: String,
    },
    passportDocument: {
        type: String,
    },
    wishedCountry: {
        type: String,
    },
    visaType: {
        type: String,
    },
    marriageCertificate: {
        type: String,
    },
    wishedStayDuration: {
        type: String,
    },
    isWishingCitizenship: {
        type: String,
    },
    locatedAtHome: {
        type: String,
    },
    homeStreetAddress: {
        type: String,
    },
    homeStreetAddressLine2: {
        type: String,
    },
    homeCity: {
        type: String,
    },
    homeProvince: {
        type: String,
    },
    homePostal: {
        type: String,
    },
    homeStayDuration: {
        type: String,
    },
    familyDependentOn: {
        type: String,
    },
    currentJob: {
        type: String,
    },
    monthlyIncome: {
        type: String,
    },
    familyMember: {
        type: String,
    },
    educationalQualification: {
        type: String,
    },
    languages: {
        type: String,
    },
    ieltsScore: {
        type: String,
    },
    ieltsDocument: {
        type: String,
    },
    bankName: {
        type: String,
    },
    bankStateIssuDate: {
        type: String,
    },
    bankStateDocument: {
        type: String,
    },
    hospitalName: {
        type: String,
    },
    MedicalReportIssueDate: {
        type: String,
    },
    MedicalReportDocument: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    homePhone: {
        type: String,
    },
    cost: {
        type: Number,
        default: 0
    },
    paid: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        default: "pending"
    },
    visa: {
        type: String,
        default: ""
    },
    uploadedVisa: {
        type: Boolean,
        default: false
    },
    done: {
        type: Boolean,
        default: false
    }
    
}, {
    timestamps: true
})


if(!mongoose.models.visaApplicant){
    visaApplicantSchema.plugin(AutoIncrement,{id:'visaApplicationCounter',inc_field:'index' });
  }

let Dataset = mongoose.models.visaApplicant || mongoose.model('visaApplicant', visaApplicantSchema)
export default Dataset
