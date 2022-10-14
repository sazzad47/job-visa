import connectDB from '../../../utils/connectDB'
import Notices from '../../../models/noticeModel'
import auth from '../../../middleware/auth'


connectDB()

export default async (req, res) => {
    switch(req.method){
        case "GET":
            await getNotice(req, res)
            break;
        case "PUT":
            await updateNotice(req, res)
            break;
        case "DELETE":
            await deleteItem(req, res)
            break;
    }
}

const getNotice = async (req, res) => {
    try {
        const { id } = req.query;
        
        const data = await Notices.findById(id)
        if(!data) return res.status(400).json({err: 'This notice does not exist.'})
        
        res.json({ data })
        
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}


const updateNotice = async (req, res) => {
    try {
        // const result = await auth(req, res)
        // if(result.role !== 'admin') 
        // return res.status(400).json({err: 'Authentication is not valid.'})

        const {id} = req.query
        const {title, file} = req.body

        if(!title || !file )
        return res.status(400).json({err: 'Please add all the fields.'})

        await Notices.findOneAndUpdate({_id: id}, {
            title, file
        })

        res.json({msg: 'Success! Notice updated'})
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

        await Notices.findOneAndUpdate({_id: id}, {
            done: true
        })
        res.json({msg: 'Element deleted!'})
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}