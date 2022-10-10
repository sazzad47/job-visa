import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Container, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import Filter from '../Filter';
const Notices = () => {

    
      
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
     
      const [expanded, setExpanded] = React.useState(false);
     
  return (
    <React.Fragment>
        {/* <Container sx={{ pb: 3, }} maxWidth="md" >
          <Grid container className='job-circular-board'>
               {cards.map((item, key) => (
                <Grid item md={6} className='job-post-container' key={key}>
                  <Grid className='d-flex'>

                  <Grid className='me-2'><InsertDriveFileIcon color="primary"/></Grid>
                  <a href='https://res.cloudinary.com/sazzadhossen/image/upload/v1665296965/sazzad-upload/nakywullk3zzbe3bekw3.pdf'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </a>
                  </Grid>
                  <Grid className='d-flex mt-2'>
                    <Grid className='me-2'><LocationOnIcon color='primary'/></Grid>
                    <Typography>dddddddd ddd ddd</Typography>
                  </Grid>
                  <Grid className='d-flex mt-2'>
                    <Grid className='me-2'><AccessTimeIcon color='primary'/></Grid>
                    <Typography>dddddddd ddd ddd</Typography>
                  </Grid>
                </Grid>
               ))}
          </Grid>
        </Container> */}
        <Container sx={{ py: 8 }} maxWidth="md">
         
          <Filter/>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6}>
                <Card className='job-post-container'
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Grid className='d-flex justify-content-between'>
                    <Typography gutterBottom variant="h5" component="h2">
                      Job ID: {card}
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


// export async function getServerSideProps({query}) {
//   const page = query.page || 1
//   const category = query.category || 'all'
//   const sort = query.sort || ''
//   const search = query.search || 'all'

//   const res = await getData(
//     `product?limit=${page * 6}&category=${category}&sort=${sort}&title=${search}`
//   )
//   // server side rendering
//   return {
//     props: {
//       products: res.products,
//       result: res.result
//     }, // will be passed to the page component as props
//   }
// }

export default Notices