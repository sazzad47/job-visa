import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Container, Grid, IconButton, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import Filter from '../components/Filter';
import Breadcrumb from '../components/BreadCrumb';
import { getData } from '../utils/fetchData';
import { useRouter } from 'next/router';
import { DataContext } from '../store/GlobalState';
const Jobs = ({props}) => {

 
      
    const [data, setData] = useState(props)

  const [isCheck, setIsCheck] = useState(false)
  const [page, setPage] = useState(1)
  const router = useRouter()

  const {state, dispatch} = useContext(DataContext)
  const {auth} = state

  useEffect(() => {
    setData(props)
  },[props])

  useEffect(() => {
    if(Object.keys(router.query).length === 0) setPage(1)
  },[router.query])
     
   
     
  return (
    <React.Fragment>
        <Breadcrumb title="Jobs" />
        <Container sx={{ py: 8 }} maxWidth="md">
         
          <Filter/>
        
          <Grid container spacing={4}>
            {data.map((item) => (
              <Grid item key={item._id} xs={12} sm={6} md={6}>
                <Card className='job-post-container'
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Grid className='d-flex justify-content-between'>
                    <Typography gutterBottom variant="h5" component="h2">
                      Job ID: {item.index}
                    </Typography>
                     <FileDownloadIcon color='primary'/>

                    </Grid>
                    <Typography>
                      10 Oct 2022
                    </Typography>
                    <Typography>
                    
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  
                    </Typography>
                    <Grid className='d-flex mt-2'>
                    <Grid className='me-2'><LocationOnIcon color='primary'/></Grid>
                    <Typography>London, United Kingdom</Typography>
                  </Grid>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Apply</Button>
                    <Button size="small">View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
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
      props: res.data
    }, 
  }
}

export default Jobs