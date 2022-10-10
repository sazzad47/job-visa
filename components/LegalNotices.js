import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Container, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
const Notices = () => {

    
      
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
     
      const [expanded, setExpanded] = React.useState(false);
     
  return (
    <React.Fragment>
        <Container sx={{ pb: 3, }} maxWidth="md" >
          <Card className='job-circular-board' elevation={2}>
               {cards.map((item, key) => (
                <Box className='job-post-container' key={key}>
                  <Grid className='d-flex'>

                  <Grid className='me-2'><InsertDriveFileIcon color="primary"/></Grid>
                  <a href='https://res.cloudinary.com/sazzadhossen/image/upload/v1665296965/sazzad-upload/nakywullk3zzbe3bekw3.pdf'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </a>
                  </Grid>
                  <Grid className='d-flex mt-2'>
                    <Grid className='me-2'><AccessTimeIcon color='primary'/></Grid>
                    <Typography>dddddddd ddd ddd</Typography>
                  </Grid>
                </Box>
               ))}
          </Card>
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