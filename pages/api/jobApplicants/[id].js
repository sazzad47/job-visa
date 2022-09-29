import connectDB from '../../../utils/connectDB'
import JobApplicants from '../../../models/jobApplicant'
import auth from '../../../middleware/auth'
import { ConstructionOutlined } from '@mui/icons-material'

connectDB()

export default async (req, res) => {
    switch(req.method){
        case "GET":
            await getApplicant(req, res)
            break;
        case "PATCH":
            await updateStatus(req, res)
            break;
        case "PUT":
            await updateProduct(req, res)
            break;
        case "DELETE":
            await deleteProduct(req, res)
            break;
    }
}

const getApplicant = async (req, res) => {
    try {
        const { id } = req.query;
        
        const applicant = await JobApplicants.findById(id)
        if(!applicant) return res.status(400).json({err: 'This applicant does not exist.'})
        
        res.json({ applicant })
        
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const updateStatus = async (req, res) => {
    try {
    //    const result = await auth(req, res)
    //    if(result.role !== 'admin' || !result.root) 
    //    return res.status(400).json({err: "Authentication is not valid"})

       const {id} = req.query
       const {status} = req.body

       await JobApplicants.findOneAndUpdate({_id: id}, {status})
       res.json({msg: 'Success!'})
       
      
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const updateProduct = async (req, res) => {
    try {
        const result = await auth(req, res)
        if(result.role !== 'admin') 
        return res.status(400).json({err: 'Authentication is not valid.'})

        const {id} = req.query
        const {title, price, inStock, description, content, category, images} = req.body

        if(!title || !price || !inStock || !description || !content || category === 'all' || images.length === 0)
        return res.status(400).json({err: 'Please add all the fields.'})

        await JobApplicants.findOneAndUpdate({_id: id}, {
            title: title.toLowerCase(), price, inStock, description, content, category, images
        })

        res.json({msg: 'Success! Updated a product'})
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const deleteProduct = async(req, res) => {
    try {
        const result = await auth(req, res)
        
        if(result.role !== 'admin') 
        return res.status(400).json({err: 'Authentication is not valid.'})

        const {id} = req.query

        await JobApplicants.findByIdAndDelete(id)
        res.json({msg: 'Deleted a product.'})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}