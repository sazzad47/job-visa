import connectDB from '../../../utils/connectDB'
import Payment from '../../../models/paymentModel'
import auth from '../../../middleware/auth'


connectDB()

export default async (req, res) => {
    switch(req.method){
        case "GET":
            await getPayment(req, res)
            break;
        case "DELETE":
            await deleteItem(req, res)
            break;
    }
}

const getPayment = async (req, res) => {
    try {
        const { id } = req.query;
        
        const data = await Payment.findById(id)
        if(!data) return res.status(400).json({err: 'This payment does not exist.'})
        
        res.json({ data })
        
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}


const deleteItem = async(req, res) => {
    try {
        // const result = await auth(req, res)
        
        // if(result.role !== 'admin') 
        // return res.status(400).json({err: 'Authentication is not valid.'})

        const {id} = req.query

        await Payment.findOneAndUpdate({_id: id}, {
            done: true
        })
        res.json({msg: 'Element deleted!'})
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}