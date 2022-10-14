import React from 'react'
import { useEffect } from 'react'
import { getData } from '../../../utils/fetchData'
import Parser from 'html-react-parser';
import { useState } from 'react';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
const Page = ({pageName}) => {
    const [data, setData] = useState({})
    
    const handleGet = async () => {
       
        const res = await getData(`${pageName}?index=1`)
        setData(res.data)
       
      }
    useEffect(() => {
        handleGet()
    },[])
   console.log('data', pageName)
  return (
     <React.Fragment>
       {data.body? <div className='p-3'>

           <div className='d-flex justify-content-end'>
           <Link style={{textDecoration:'none'}} to={`/${pageName}/edit`} ><Button color="primary" ><EditIcon className="me-2" sx={{fontSize:'0.9rem'}}/>  Edit</Button></Link>
           </div>
         <div className='mb-5'>{data.title}</div>
         <div className='my-5'>{Parser(data.shortDescription)}</div>
         <div className='my-5'>{Parser(data.body)}</div>
      
        </div> : 'loading...'}
     </React.Fragment>
  )
}

export default Page