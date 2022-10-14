import connectDB from '../../../../utils/connectDB'
import Payments from '../../../../models/paymentModel'

import auth from '../../../../middleware/auth'

connectDB()

export default async (req, res) => {
    switch(req.method){
        case "GET":
            await getPayments(req, res)
            break;
    }
}

const getPayments = async (req, res) => {
    try {
        const result = await auth(req, res)

        
        const payments = await Payments.find({user: result.id}).populate("user", "-password")
    
        
        res.json({payments})
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}