import mongoose from 'mongoose'
const AutoIncrement = require('mongoose-sequence')(mongoose);
const policySchema = new mongoose.Schema({
    index: Number,
    title: String,
    shortDescription: String,
    body: String,
    dateOfPost: Date,
}, {
    timestamps: true
})

if(!mongoose.models.policy){
    policySchema.plugin(AutoIncrement,{id:'policyCounter',inc_field:'index' });
  }

let Dataset = mongoose.models.policy || mongoose.model('policy', policySchema)
export default Dataset


