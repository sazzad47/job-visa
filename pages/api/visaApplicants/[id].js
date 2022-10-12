import connectDB from '../../../utils/connectDB'
import VisaApplicants from '../../../models/visaApplicant'
import auth from '../../../middleware/auth'
import { ConstructionOutlined } from '@mui/icons-material'
import sendEmail from '../../../utils/mail'

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
            await updateCost(req, res)
            break;
        case "DELETE":
            await deleteProduct(req, res)
            break;
    }
}

const getApplicant = async (req, res) => {
    try {
        const { id } = req.query;
        
        const applicant = await VisaApplicants.findById(id)
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

       const application = await VisaApplicants.findOneAndUpdate({_id: id}, {status}).populate('user', '-password')

       if (status === "approved") return await sendEmail({
        to: application.user.email,
        from: process.env.SENDER_EMAIL,
        subject: '[job-visa] Visa application approved.',
        html: `
        <div>
          <p>Hello, ${application.user.name}</p>
          <p>Your visa application has been approved!.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error
           sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
           eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae 
           vitae dicta sunt explicabo.</p>
        </div>
        `,
      });

      await sendEmail({
        to: application.user.email,
        from: process.env.SENDER_EMAIL,
        subject: '[job-visa] Visa application declined.',
        html: `
        <div>
          <p>Hello, ${application.user.name}</p>
          <p>Your visa application has been declined.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error
           sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
           eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae 
           vitae dicta sunt explicabo.</p>
        </div>
        `,
      });
       res.json({msg: 'Success!'})
       
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const updateCost = async (req, res) => {
    try {
    //    const result = await auth(req, res)
    //    if(result.role !== 'admin' || !result.root) 
    //    return res.status(400).json({err: "Authentication is not valid"})

       const {id} = req.query
       const {cost} = req.body

       const application = await VisaApplicants.findOneAndUpdate({_id: id}, {cost: parseInt(cost)}).populate('user', '-password')
       await VisaApplicants.findOneAndUpdate({_id: id}, {paid: false})
       await sendEmail({
        to: application.user.email,
        from: process.env.SENDER_EMAIL,
        subject: '[job-visa] Visa cost.',
        html: `
        <div>
          <p>Hello, ${application.user.name}</p>
          <p>Your visa cost is ${cost}.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error
           sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
           eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae 
           vitae dicta sunt explicabo.</p>
        </div>
        `,
      });
       res.json({msg: 'Success!'})
       
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

// const updateProduct = async (req, res) => {
//     try {
//         const result = await auth(req, res)
//         if(result.role !== 'admin') 
//         return res.status(400).json({err: 'Authentication is not valid.'})

//         const {id} = req.query
//         const {title, price, inStock, description, content, category, images} = req.body

//         if(!title || !price || !inStock || !description || !content || category === 'all' || images.length === 0)
//         return res.status(400).json({err: 'Please add all the fields.'})

//         await VisaApplicants.findOneAndUpdate({_id: id}, {
//             title: title.toLowerCase(), price, inStock, description, content, category, images
//         })

//         res.json({msg: 'Success! Updated a product'})
//     } catch (err) {
//         return res.status(500).json({err: err.message})
//     }
// }

const deleteProduct = async(req, res) => {
    try {
        // const result = await auth(req, res)
        
        // if(result.role !== 'admin') 
        // return res.status(400).json({err: 'Authentication is not valid.'})

        const {id} = req.query

        await VisaApplicants.findOneAndUpdate({_id: id}, {
            done: true
        })
        res.json({msg: 'Element deleted!'})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}