import mongoose from 'mongoose'
const AutoIncrement = require('mongoose-sequence')(mongoose);
const aboutSchema = new mongoose.Schema({
    index: Number,
    title: String,
    shortDescription: String,
    body: String,
    dateOfPost: Date,
}, {
    timestamps: true
})

if(!mongoose.models.about){
    aboutSchema.plugin(AutoIncrement,{id:'aboutCounter',inc_field:'index' });
  }

let Dataset = mongoose.models.about || mongoose.model('about', aboutSchema)
export default Dataset


