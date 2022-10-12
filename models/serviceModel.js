import mongoose from 'mongoose'
const AutoIncrement = require('mongoose-sequence')(mongoose);
const serviceSchema = new mongoose.Schema({
    index: Number,
    title: String,
    shortDescription: String,
    body: String,
    dateOfPost: Date,
}, {
    timestamps: true
})

if(!mongoose.models.service){
    serviceSchema.plugin(AutoIncrement,{id:'serviceCounter',inc_field:'index' });
  }

let Dataset = mongoose.models.service || mongoose.model('service', serviceSchema)
export default Dataset


