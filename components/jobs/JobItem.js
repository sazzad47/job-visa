import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Container, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
const JobItem = () => {

    
      
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
     
      const [expanded, setExpanded] = React.useState(false);
     
  return (
    <React.Fragment>
        <Container sx={{ pb: 8, }} maxWidth="md" >
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh metus, fringilla eu malesuada nec, semper vitae urna.
                    </Typography>
                  </CardContent>
                  <CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <IconButton size="small"><ShareIcon/></IconButton>
                    <IconButton
                        onClick={() => setExpanded(!expanded)}
                       
                      >
                      <FileDownloadIcon/>
                    </IconButton>
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

export default JobItem