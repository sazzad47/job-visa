import connectDB from '../../../utils/connectDB'
import Page from '../../../models/aboutModel'


connectDB()

export default async (req, res) => {
    switch(req.method){
        case "POST":
            await createPage(req, res)
            break;
        case "GET":
            await getPage(req, res)
            break;
    }
}

const createPage = async (req, res) => {
    try{
        
        const { title, shortDescription, body } = req.body
        
        const newPage = new Page({ 
            title: title, shortDescription:shortDescription, body:body, dateOfPost: new Date().toISOString()
            
        })
        
        await newPage.save()
        res.json({msg: "Page saved successfully"})

    }catch(err){
        return res.status(500).json({err: err.message})
    }
}



const getPage = async (req, res) => {
    try {
       
        const {index} = req.query
        
        const data = await Page.findOne({index: parseInt(index)})
        
        res.json({
            status: 'success',
            data
        })
        
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

