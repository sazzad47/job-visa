import mongoose from 'mongoose'
const AutoIncrement = require('mongoose-sequence')(mongoose);
const noticeSchema = new mongoose.Schema({
    index: Number,
    title: String,
    file: String,
    dateOfPost: Date,
}, {
    timestamps: true
})

if(!mongoose.models.notice){
    noticeSchema.plugin(AutoIncrement,{id:'noticeCounter',inc_field:'index' });
  }

let Dataset = mongoose.models.notice || mongoose.model('notice', noticeSchema)
export default Dataset


