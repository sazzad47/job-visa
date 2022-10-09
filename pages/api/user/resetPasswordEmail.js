import connectDB from '../../../utils/connectDB'
import Users from '../../../models/userModel'
import auth from '../../../middleware/auth'
import bcrypt from 'bcrypt'
import nodemailer from 'nodemailer'

connectDB()

export default async (req, res) => {
    switch(req.method){
        case "PATCH":
            await resetPassword(req, res)
            break;
    }
}

const sendResetPasswordEmail = async(name, email, token) => {
   try {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    })

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Reset Password',
        html: '<p>Hello, '+name+', Please copy the link and <a href="'+process.env.BASE_URL+'/reset">reset your password</a></p>'
    }
   } catch (error) {
    
   }
}
const resetPassword = async (req, res) => {
    try {
        const result = await auth(req, res)
        const { password } = req.body
        const passwordHash = await bcrypt.hash(password, 12)

        await Users.findOneAndUpdate({_id: result.id}, {password: passwordHash})

        res.json({ msg: "Update Success!"})
        
    } catch (err) {
        return res.status(500).json({err: err.message})
    }   
}