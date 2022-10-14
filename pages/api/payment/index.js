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
       
        const filter = JSON.parse(req.query.query)
        const sort = JSON.parse(req.query.sort)
        const limit = parseInt(req.query.limit)
        const skip = parseInt(req.query.skip)
        
        const data = await Payment.find({
            $and: [filter, {done: false}]
        }).skip(skip).limit(limit).sort(sort)
        const totalItem = await Payment.find({done: false})
       
        
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
