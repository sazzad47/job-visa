import mongoose from 'mongoose';
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    userId: Number,
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    
    role: {
        type: String,
        default: 'user'
    },
    root: {
        type: Boolean,
        default: false
    },
    visaCost: {
        type: Number,
        default: 0
    },
    jobCost: {
        type: Number,
        default: 0
    },
    totalCost: {
         type: Number,
         default: 0
    },
    visaApplications: [{ type: Schema.Types.ObjectId, ref: 'visaApplicant' }],
    jobApplications: [{ type: Schema.Types.ObjectId, ref: 'jobApplicant' }],
    loans: [{ type: Schema.Types.ObjectId, ref: 'loanApplicant' }],
    avatar: {
        type: String,
        default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'
    }
}, {
    timestamps: true
})



if(!mongoose.models.user){
    userSchema.plugin(AutoIncrement,{id:'userId_counter',inc_field:'userId' });
  }
  


let Dataset = mongoose.models.user || mongoose.model('user', userSchema)
export default Dataset