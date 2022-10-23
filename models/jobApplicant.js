import mongoose from "mongoose";
const AutoIncrement = require("mongoose-sequence")(mongoose);
const Schema = mongoose.Schema;

const jobApplicantSchema = new mongoose.Schema(
  {
    index: Number,
    userId: {
      type: Number,
      default: 0,
    },
    fJobCountry: {
      type: String,
    },
    fJobNo: {
      type: String,
    },
    fJobSL: {
      type: String,
    },
    fJobName: {
      type: String,
    },
    fJobExperience: {
      type: String,
    },
    fJobExperienceCertificate: {
      type: String,
    },
    sJobCountry: {
      type: String,
    },
    sJobNo: {
      type: String,
    },
    sJobSL: {
      type: String,
    },
    sJobName: {
      type: String,
    },
    sJobExperience: {
      type: String,
    },
    sJobExperienceCertificate: {
      type: String,
    },
    tJobCountry: {
      type: String,
    },
    tJobNo: {
      type: String,
    },
    tJobSL: {
      type: String,
    },
    tJobName: {
      type: String,
    },
    tJobExperience: {
      type: String,
    },
    tJobExperienceCertificate: {
      type: String,
    },
    foJobCountry: {
      type: String,
    },
    foJobNo: {
      type: String,
    },
    foJobSL: {
      type: String,
    },
    foJobName: {
      type: String,
    },
    foJobExperience: {
      type: String,
    },
    foJobExperienceCertificate: {
      type: String,
    },
    languages: {
      type: String,
    },
    nationality: {
      type: String,
    },
    nidCard: {
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
    country: {
      type: String,
    },
    dateOfBirth: {
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
    passportDateOfIssue: {
      type: String,
    },
    passportDateOfExpiry: {
      type: String,
    },
    visaApplicationID: {
      type: String,
    },
    medicalReport: {
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
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

if (!mongoose.models.jobApplicant) {
  jobApplicantSchema.plugin(AutoIncrement, {
    id: "jobApplicationCounter",
    inc_field: "index",
  });
}

let Dataset =
  mongoose.models.jobApplicant ||
  mongoose.model("jobApplicant", jobApplicantSchema);
export default Dataset;
