import { Container, Grid } from '@mui/material'
import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { getData } from '../utils/fetchData'
import Parser from 'html-react-parser';

const About = ({data}) => {
   
    

    return (
        <React.Fragment>
           <Breadcrumb title="About"/>
           <Container sx={{minHeight:'100vh'}}>
            <Grid>
            {Parser(data.title)}
            </Grid>
            <Grid>
            {Parser(data.shortDescription)}
            </Grid>
            <Grid>
            {Parser(data.body)}
            </Grid>
           </Container>
        </React.Fragment>
    )
}

export async function getServerSideProps() {
  
  const res = await getData(
    `about?index=1`
  )
  
  return {
    props: {
        data: res.data,
    }, 
  }
}

export default About