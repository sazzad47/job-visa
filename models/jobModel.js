import mongoose from 'mongoose'

const jobSchema = new mongoose.Schema({
    title: String,
    shortDescription: String,
    photo: String,
    file: String,
}, {
    timestamps: true
})

let Dataset = mongoose.models.job || mongoose.model('job', jobSchema)
export default Dataset


