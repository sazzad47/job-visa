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
        // const features = new APIfeatures(VisaApplicant.find(), req.query)
        // .paginating()
        const filter = JSON.parse(req.query.query)
        const sort = JSON.parse(req.query.sort)
        const limit = parseInt(req.query.limit)
        const skip = parseInt(req.query.skip)
        console.log('perpage', filter)
        const applicants = await VisaApplicant.find(filter).skip(skip).limit(limit).sort(sort)
        const totalApplicants = await VisaApplicant.find()
        // .skip(page * perPage)
        // .limit(perPage)
        
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

// const getApplicants = async (req, res ) => {
//     const url = require('url');
//     try {
//     //    const result = await auth(req, res)
//     //    if(result.role !== 'admin') 
//     //    return res.status(400).json({err: "Authentication is not valid"})
    
//         // const path = url.parse(req.url, true).query;
//         // console.log(path);
//         // let Page = req.query.range;
//         // console.log("page", Page);
//         // let SortingResource = req.query.sort;
//         // let orderedByWhatType = JSON.parse(SortingResource);
//         // console.log("orderedByWhatType", orderedByWhatType);
//         // let orderedByWhat = orderedByWhatType[0];
//         // let sortAscOrDes = orderedByWhatType[1];
//         // console.log("ordered By What", orderedByWhat);
//         // console.log("sortAscOrDes", sortAscOrDes);
//         // let PageCurrent = JSON.parse(Page);
//         // console.log("Page array ", PageCurrent);
//         // let PerPageATZeroIndex = parseInt(PageCurrent[1]);
//         // console.log("PerPage", typeof PerPageATZeroIndex);
//         // let PageIndex = PageCurrent[0];

//         // //// function for range////
//         // const range = (start, end, length = end - start + 1) =>
//         // Array.from({ length }, (_, i) => start + i);

//         // ///////function for range///
//         // const TotalRows = range(PageIndex, PerPageATZeroIndex).length;
//         // console.log("i am range", range(PageIndex, PerPageATZeroIndex).length);

//         // let OFFSET = PageIndex;
//         // let till = OFFSET + PerPageATZeroIndex;
//         // let FilterInput = req.query.filter;
//         // const FilterArray = JSON.parse(FilterInput);
//         // console.log("Filter", FilterArray);

//         // let FilterSource = Object.keys(FilterArray);
//         // let FilterText = Object.values(FilterArray)[0];
//         // FilterText = Object.values(null || FilterArray)[0];

//         // if (FilterText == undefined) {
//         //     console.log("Oooops, am Undefined");
//         //     let query = `  SELECT * FROM tbl_Personal WHERE shortname LIKE ('%')         
//         //     ORDER BY pnr ${sortAscOrDes} OFFSET ${PageIndex} ROWS FETCH NEXT ${TotalRows} ROWS ONLY `;
//         //     let numRows = `SELECT * FROM tbl_Personal`;
//         //     const paginationEmployees = await executeQuery(query);
//         //     const numRowsCount = await executeQuery(numRows);
//         //     res.header("Access-Control-Expose-Headers", "X-Total-Count");
//         //     res.header(
//         //     "X-Total-Count",
//         //     `pagination ${OFFSET} - ${till}/${numRowsCount.length}`
//         //     );
//         //     res.json(paginationEmployees);
//         //     }

//         const applicants = await VisaApplicant.find()
//         res 
//        .setHeader(
//         "x-total-count",
//         parseInt(applicants.length) 
//         // `pagination ${OFFSET} - ${till}/${applicants.length}`
//         )
//         .json({applicants})


//     } catch (err) {
//         return res.status(500).json({err: err.message})
//     }
// }