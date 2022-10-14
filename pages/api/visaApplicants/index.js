import connectDB from '../../../utils/connectDB'
import VisaApplicant from '../../../models/visaApplicant'
import Users from '../../../models/userModel'
import auth from '../../../middleware/auth'
import sendEmail from '../../../utils/mail'

connectDB()

export default async (req, res) => {
    switch(req.method){
        case "POST":
            await apply(req, res)
            break;
        case "GET":
            await getData(req, res)
            break;
    }
}

const apply = async (req, res) => {
    try{
        const result = await auth(req, res)
        
        const { personalInfo, passportInfo, visaProcessingInfo, home, bank, medical, contact } = req.body
        const {
            IdentityCard,
            IdCardNumber,
            fullName,
            fathersName,
            mothersName,
            streetAddress,
            streetAddressLine2,
            city,
            province,
            postal,
            gender,
            dateOfBirth,
            dateOfIdCardIssue,
            religion,
            nationality,
            bloodGroup,
            maritalStatus,
            frontPhotoOfIdCard,
            backPhotoOfIdCard,
            photo,
            signature
        } = personalInfo;
        
        const {
            passportCountry,
            passportNumber,
            passportIssuingAuthority,
            passportDateOfBirth,
            passportDateOfIssue,
            passportDateOfExpiry,
            passportDocument
        } = passportInfo;
        
        const {
            wishedCountry,
            visaType,
            marriageCertificate,
            wishedStayDuration,
            isWishingCitizenship,
        } = visaProcessingInfo;
        
        const {
            locatedAtHome,
            homeStreetAddress,
            homeStreetAddressLine2,
            homeCity,
            homeProvince,
            homePostal,
            homeStayDuration,
            familyDependentOn,
            currentJob,
            monthlyIncome,
            familyMember,
            educationalQualification,
            languages,
            ieltsScore,
            ieltsDocument,
        } = home;
        
        const {
            bankName,
            bankStateIssuDate,
            bankStateDocument,
        } = bank;
        
        const {
            hospitalName,
            MedicalReportIssueDate,
            MedicalReportDocument,
        } = medical;
        
        const {
            email,
            phone,
            homePhone,
        } = contact;

        const newApplication = new VisaApplicant({ 
            userId: result.userId,
            IdentityCard,
            IdCardNumber,
            fullName,
            fathersName,
            mothersName,
            streetAddress,
            streetAddressLine2,
            city,
            province,
            postal,
            gender,
            dateOfBirth,
            dateOfIdCardIssue,
            religion,
            nationality,
            bloodGroup,
            maritalStatus,
            frontPhotoOfIdCard,
            backPhotoOfIdCard,
            photo,
            signature,
            passportCountry,
            passportNumber,
            passportIssuingAuthority,
            passportDateOfBirth,
            passportDateOfIssue,
            passportDateOfExpiry,
            passportDocument,
            wishedCountry,
            visaType,
            marriageCertificate,
            wishedStayDuration,
            isWishingCitizenship,
            locatedAtHome,
            homeStreetAddress,
            homeStreetAddressLine2,
            homeCity,
            homeProvince,
            homePostal,
            homeStayDuration,
            familyDependentOn,
            currentJob,
            monthlyIncome,
            familyMember,
            educationalQualification,
            languages,
            ieltsScore,
            ieltsDocument,
            bankName,
            bankStateIssuDate,
            bankStateDocument,
            hospitalName,
            MedicalReportIssueDate,
            MedicalReportDocument,
            email,
            phone,
            homePhone,
            
        })
        await Users.findOneAndUpdate({_id: result.id}, {
            $push: {visaApplications: newApplication._id}
        }, {new: true})

        await newApplication.save()
        await sendEmail({
            to: newApplication.email,
            from: process.env.SENDER_EMAIL,
            subject: '[job-visa] Received visa application.',
            html: `
            <div>
              <p>Hello, ${newApplication.name}</p>
              <p>We received your visa application.</p>
              <p>Sed ut perspiciatis unde omnis iste natus error
               sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
               eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae 
               vitae dicta sunt explicabo.</p>
            </div>
            `,
          });
        res.json({msg: "Application submitted successfully"})

    }catch(err){
        return res.status(500).json({err: err.message})
    }
}



const getData = async (req, res) => {
    try {

        const filter = JSON.parse(req.query.query)
        const sort = JSON.parse(req.query.sort)
        const limit = parseInt(req.query.limit)
        const skip = parseInt(req.query.skip)
        const data = await VisaApplicant.find({
            $and: [filter, {done: false}]
        }).skip(skip).limit(limit).sort(sort)
        const totalItem = await VisaApplicant.find({done: false})
        res
        .setHeader("x-total-count", parseInt(totalItem.length))
        .json({
            status: 'success',
            result: data.length,
            data
        })
        
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

