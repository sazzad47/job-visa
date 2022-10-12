import connectDB from '../../../utils/connectDB'
import Payment from '../../../models/paymentModel'


connectDB()

export default async (req, res) => {
    switch(req.method){
        
        case "GET":
            await getPayment(req, res)
            break;
    }
}





const getPayment = async (req, res) => {
    try {
        // const features = new APIfeatures(Payment.find(), req.query)
        // .paginating()
        const filter = JSON.parse(req.query.query)
        const sort = JSON.parse(req.query.sort)
        const limit = parseInt(req.query.limit)
        const skip = parseInt(req.query.skip)
        
        const applicants = await Payment.find(filter).skip(skip).limit(limit).sort(sort)
        const totalApplicants = await Payment.find()
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
