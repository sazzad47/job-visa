import connectDB from '../../../utils/connectDB'
import Messages from '../../../models/messageModel'



connectDB()

export default async (req, res) => {
    switch(req.method){
        case "GET":
            await getMessage(req, res)
            break;
        case "DELETE":
            await deleteItem(req, res)
            break;
    }
}

const getMessage = async (req, res) => {
    try {
        const { id } = req.query;
        
        const data = await Messages.findById(id)
        if(!data) return res.status(400).json({err: 'This message does not exist.'})
        
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

        await Messages.findOneAndUpdate({_id: id}, {
            done: true
        })
        res.json({msg: 'Element deleted!'})
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

