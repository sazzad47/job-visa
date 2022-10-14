import connectDB from '../../../utils/connectDB'
import Page from '../../../models/contactModel'
import auth from '../../../middleware/auth'


connectDB()

export default async (req, res) => {
    switch(req.method){
        case "PUT":
            await updatePage(req, res)
            break;
       
    }
}




const updatePage = async (req, res) => {
    try {
        // const result = await auth(req, res)
        // if(result.role !== 'admin') 
        // return res.status(400).json({err: 'Authentication is not valid.'})

        const {id} = req.query
        const { address, phone, email } = req.body
        console.log('contactinfo', id)
        await Page.findOneAndUpdate({index: id}, {
            address, phone, email
        })

        res.json({msg: 'Success! Page updated'})
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

