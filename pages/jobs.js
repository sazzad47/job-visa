import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Container, Grid, IconButton, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import NearbyErrorIcon from '@mui/icons-material/NearbyError';
import Filter from '../components/Filter';
import Breadcrumb from '../components/BreadCrumb';
import { getData } from '../utils/fetchData';
import { useRouter } from 'next/router';
import { DataContext } from '../store/GlobalState';
import JobItem from '../components/jobs/JobItem';
import filterSearch from '../utils/filterSearch';
const Jobs = ({props}) => {

 
      
    const [data, setData] = useState(props.data)

  const [isCheck, setIsCheck] = useState(false)
  const [page, setPage] = useState(1)
  const router = useRouter()

  const {state, dispatch} = useContext(DataContext)
  const {auth} = state

  useEffect(() => {
    setData(props.data)
  },[props.data])

  useEffect(() => {
    if(Object.keys(router.query).length === 0) setPage(1)
  },[router.query])
     
  const handleLoadmore = () => {
    setPage(page + 1)
    filterSearch({router, page: page + 1})
  }
     
  return (
    <React.Fragment>
        <Breadcrumb title="Jobs" />
        <Container sx={{ py: 8 }} maxWidth="md">
         
          <Filter/>
        
          
          {
          data.length === 0 
          ? <Grid className='d-flex flex-column align-items-center justify-content-center'>
            <Card sx={{p:4}} className='d-flex flex-column align-items-center justify-content-center' >
                <NearbyErrorIcon color="primary" />
                <Typography>No result found!</Typography>
            </Card>
            </Grid>

          : 
          <Grid container spacing={4}>
           {data.map(item => (
            <JobItem key={item._id} item={item} />
          ))}
          </Grid>
        }
            
            {
        props.result < page * 6 ? ""
        : <Button variant='outlined' className="d-block mx-auto my-4"
        onClick={handleLoadmore}>
          Load more
        </Button>
      }
        </Container>
    </React.Fragment>
  )
}


export async function getServerSideProps({query}) {
  const page = query.page || 1
  const country = query.country || 'all'
  const sort = query.sort || ''
  const search = query.search || 'all'

  const res = await getData(
    `jobs/getAll?limit=${page * 6}&country=${country}&sort=${sort}&title=${search}`
  )
 
  return {
    props: {
      props: {
        data: res.data,
        result: res.result,
    
    }
    }, 
  }
}

export default Jobs