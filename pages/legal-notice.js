import { Container, Grid } from '@mui/material'
import React from 'react'
import Breadcrumb from '../components/BreadCrumb'
import { getData } from '../utils/fetchData'
import Parser from 'html-react-parser';

const LegalNotice = ({data}) => {
   
    

    return (
        <React.Fragment>
           <Breadcrumb title="Legal Notice"/>
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
    `legalNotice?index=1`
  )
  
  return {
    props: {
        data: res.data,
    }, 
  }
}

export default LegalNotice