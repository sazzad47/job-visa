import mongoose from 'mongoose'
const AutoIncrement = require('mongoose-sequence')(mongoose);
const termSchema = new mongoose.Schema({
    index: Number,
    title: String,
    shortDescription: String,
    body: String,
    dateOfPost: Date,
}, {
    timestamps: true
})

if(!mongoose.models.term){
    termSchema.plugin(AutoIncrement,{id:'termCounter',inc_field:'index' });
  }

let Dataset = mongoose.models.term || mongoose.model('term', termSchema)
export default Dataset


