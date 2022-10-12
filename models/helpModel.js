import mongoose from 'mongoose'
const AutoIncrement = require('mongoose-sequence')(mongoose);
const helpSchema = new mongoose.Schema({
    index: Number,
    title: String,
    shortDescription: String,
    body: String,
    dateOfPost: Date,
}, {
    timestamps: true
})

if(!mongoose.models.help){
    helpSchema.plugin(AutoIncrement,{id:'helpCounter',inc_field:'index' });
  }

let Dataset = mongoose.models.help || mongoose.model('help', helpSchema)
export default Dataset


