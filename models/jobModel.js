import mongoose from 'mongoose'
const AutoIncrement = require('mongoose-sequence')(mongoose);
const jobSchema = new mongoose.Schema({
    index: Number,
    title: String,
    country: String,
    file: String,
    dateOfPost: Date,
}, {
    timestamps: true
})

if(!mongoose.models.job){
    jobSchema.plugin(AutoIncrement,{id:'jobCounter',inc_field:'index' });
  }

let Dataset = mongoose.models.job || mongoose.model('job', jobSchema)
export default Dataset


