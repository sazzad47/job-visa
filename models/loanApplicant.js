import mongoose from 'mongoose'
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const loanApplicantSchema = new mongoose.Schema({
    loanApplicationID: Number,
    visaApplyID: {
        type: String,
    },
    jobApplyID: {
        type: String,
    },
    totalRS: {
        type: String,
    },
    loanAmount: {
        type: String,
    },
    amountOfMoney: {
        type: String,
    },
    idNumber: {
        type: String,
    },
    frontPhotoOfIdCard: {
        type: String,
    },
    backPhotoOfIdCard: {
        type: String,
    },
    photoOfApplicant: {
        type: String,
    },
    signature: {
        type: String,
    },
    isFatherPresent: {
        type: String,
    },
    fatherDeathCertificate: {
        type: String,
    },
    fatherIdNumber: {
        type: String,
    },
    fatherFrontPhotoOfIdCard: {
        type: String,
    },
    fatherBackPhotoOfIdCard: {
        type: String,
    },
    photoOfFather: {
        type: String,
    },
    signatureOfFather: {
        type: String,
    },
    isMotherPresent: {
        type: String,
    },
    motherDeathCertificate: {
        type: String,
    },
    motherIdNumber: {
        type: String,
    },
    motherFrontPhotoOfIdCard: {
        type: String,
    },
    motherBackPhotoOfIdCard: {
        type: String,
    },
    photoOfMother: {
        type: String,
    },
    signatureOfMother: {
        type: String,
    },
    landLocation: {
        type: String,
    },
    landAmount: {
        type: String,
    },
    mediumOfGetting: {
        type: String,
    },
    plotNo: {
        type: String,
    },
    precursorDeathCertificate: {
        type: String,
    },
    inheritanceCertificate: {
        type: String,
    },
    houseLandDocuments: {
        type: String,
    },
    loanForm: {
        type: String,
    },
    bankName: {
        type: String,
    },
    accountIdNumber: {
        type: String,
    },
    bankBranchName: {
        type: String,
    },
    bankStatement: {
        type: String,
    },
    email: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    homePhoneNumber: {
        type: String,
    },
    comments: {
        type: String,
    },
    loanStatus: {
        type: String,
    },
    
}, {
    timestamps: true
})


if(!mongoose.models.loanApplicant){
    loanApplicantSchema.plugin(AutoIncrement,{id:'loanApplicationCounter',inc_field:'loanApplicationID' });
  }

let Dataset = mongoose.models.loanApplicant || mongoose.model('loanApplicant', loanApplicantSchema)
export default Dataset
