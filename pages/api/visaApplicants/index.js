import connectDB from '../../../utils/connectDB'
import VisaApplicant from '../../../models/visaApplicant'


connectDB()

export default async (req, res) => {
    switch(req.method){
        case "POST":
            await apply(req, res)
            break;
        case "GET":
            await getApplicants(req, res)
            break;
    }
}

const apply = async (req, res) => {
    try{
        
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

        const newUser = new VisaApplicant({ 
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

        await newUser.save()
        res.json({msg: "Application submitted successfully"})

    }catch(err){
        return res.status(500).json({err: err.message})
    }
}



const getApplicants = async (req, res) => {
    try {

        const filter = JSON.parse(req.query.query)
        const sort = JSON.parse(req.query.sort)
        const limit = parseInt(req.query.limit)
        const skip = parseInt(req.query.skip)
        const applicants = await VisaApplicant.find({
            $and: [filter, {done: false}]
        }).skip(skip).limit(limit).sort(sort)
        const totalApplicants = await VisaApplicant.find()
    
        res
        .setHeader("x-total-count", parseInt(totalApplicants.length))
        .json({
            status: 'success',
            result: applicants.length,
            applicants
        })
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

