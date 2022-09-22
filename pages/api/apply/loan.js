import connectDB from '../../../utils/connectDB'
import LoanApplicant from '../../../models/loanApplicant'
import auth from '../../../middleware/auth'

connectDB()

export default async (req, res) => {
    switch(req.method){
        case "POST":
            await apply(req, res)
            break;
    }
}

const apply = async (req, res) => {
    try{
        
        const { loanInfo, appliantInfo, fatherInfo, motherInfo, landDocument, bankDetails, communication } = req.body
        const {
            visaApplyID,
            jobApplyID,
            totalRS,
            loanAmount,
            amountOfMoney,
        } = loanInfo;
        
        const {
            idNumber,
            frontPhotoOfIdCard,
            backPhotoOfIdCard,
            photoOfApplicant,
            signature,
        } = appliantInfo;
        
        const {
            isFatherPresent,
            fatherDeathCertificate,
            fatherIdNumber,
            fatherFrontPhotoOfIdCard,
            fatherBackPhotoOfIdCard,
            photoOfFather,
            signatureOfFather,
        } = fatherInfo;
        
        const {
            isMotherPresent,
            motherDeathCertificate,
            motherIdNumber,
            motherFrontPhotoOfIdCard,
            motherBackPhotoOfIdCard,
            photoOfMother,
            signatureOfMother,
        } = motherInfo;
        
        const {
            landLocation,
            landAmount,
            mediumOfGetting,
            plotNo,
            precursorDeathCertificate,
            inheritanceCertificate,
            houseLandDocuments,
            loanForm,
        } = landDocument;
        
        const {
            bankName,
            accountIdNumber,
            bankBranchName,
            bankStatement,
        } = bankDetails;
        
        const {
            email,
            phoneNumber,
            homePhoneNumber,
            comments,
        } = communication;

        const newUser = new LoanApplicant({ 
            visaApplyID,
            jobApplyID,
            totalRS,
            loanAmount,
            amountOfMoney,
            idNumber,
            frontPhotoOfIdCard,
            backPhotoOfIdCard,
            photoOfApplicant,
            signature,
            isFatherPresent,
            fatherDeathCertificate,
            fatherIdNumber,
            fatherFrontPhotoOfIdCard,
            fatherBackPhotoOfIdCard,
            photoOfFather,
            signatureOfFather,
            isMotherPresent,
            motherDeathCertificate,
            motherIdNumber,
            motherFrontPhotoOfIdCard,
            motherBackPhotoOfIdCard,
            photoOfMother,
            signatureOfMother,
            landLocation,
            landAmount,
            mediumOfGetting,
            plotNo,
            precursorDeathCertificate,
            inheritanceCertificate,
            houseLandDocuments,
            loanForm,
            bankName,
            accountIdNumber,
            bankBranchName,
            bankStatement,
            email,
            phoneNumber,
            homePhoneNumber,
            comments,
        })

        await newUser.save()
        res.json({msg: "Application submitted successfully"})

    }catch(err){
        return res.status(500).json({err: err.message})
    }
}