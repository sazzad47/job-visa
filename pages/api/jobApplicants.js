import connectDB from '../../utils/connectDB'
import JobApplicant from '../../models/jobApplicant'


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
        
        const { jobInfo, appliantInfo, passportVisaDetails, communication } = req.body
        const {
            fJobCountry,
            fJobNo,
            fJobSL,
            fJobName,
            fJobExperience,
            fJobExperienceCertificate,
            sJobCountry,
            sJobNo,
            sJobSL,
            sJobName,
            sJobExperience,
            sJobExperienceCertificate,
            tJobCountry,
            tJobNo,
            tJobSL,
            tJobName,
            tJobExperience,
            tJobExperienceCertificate,
            foJobCountry,
            foJobNo,
            foJobSL,
            foJobName,
            foJobExperience,
            foJobExperienceCertificate,
        } = jobInfo;
        
        const {
            languages,
            nationality,
            nidCard,
            fullName,
            fathersName,
            mothersName,
            streetAddress,
            streetAddressLine2,
            city,
            province,
            postal,
            country,
            dateOfBirth,
            photo,
            signature,
        } = appliantInfo;
        
        const {
            passportCountry,
            passportNumber,
            passportDateOfIssue,
            passportDateOfExpiry,
            visaApplicationID,
            medicalReport,
        } = passportVisaDetails;
        
        const {
            email,
            phoneNumber,
            homePhoneNumber,
        } = communication;
        
       

        const newUser = new JobApplicant({ 
            fJobCountry,
            fJobNo,
            fJobSL,
            fJobName,
            fJobExperience,
            fJobExperienceCertificate,
            sJobCountry,
            sJobNo,
            sJobSL,
            sJobName,
            sJobExperience,
            sJobExperienceCertificate,
            tJobCountry,
            tJobNo,
            tJobSL,
            tJobName,
            tJobExperience,
            tJobExperienceCertificate,
            foJobCountry,
            foJobNo,
            foJobSL,
            foJobName,
            foJobExperience,
            foJobExperienceCertificate,
            languages,
            nationality,
            nidCard,
            fullName,
            fathersName,
            mothersName,
            streetAddress,
            streetAddressLine2,
            city,
            province,
            postal,
            country,
            dateOfBirth,
            photo,
            signature,
            passportCountry,
            passportNumber,
            passportDateOfIssue,
            passportDateOfExpiry,
            visaApplicationID,
            medicalReport,
            email,
            phoneNumber,
            homePhoneNumber,
            
        })

        await newUser.save()
        res.json({msg: "Application submitted successfully"})

    }catch(err){
        return res.status(500).json({err: err.message})
    }
}

const getApplicants = async (req, res) => {
    try {
    //    const result = await auth(req, res)
    //    if(result.role !== 'admin') 
    //    return res.status(400).json({err: "Authentication is not valid"})

        const applicants = await JobApplicant.find()
        res.json({applicants})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}