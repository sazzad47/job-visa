import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    message: String,
}, {
    timestamps: true
})

let Dataset = mongoose.models.contact || mongoose.model('contact', contactSchema)
export default Dataset