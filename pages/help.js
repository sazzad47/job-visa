import { Container, Grid } from '@mui/material'
import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { getData } from '../utils/fetchData'
import Parser from 'html-react-parser';

const HelpSupport = ({data}) => {
   
    

    return (
        <React.Fragment>
           <Breadcrumb title="Help & Support"/>
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
    `help?index=1`
  )
  
  return {
    props: {
        data: res.data,
    }, 
  }
}

export default HelpSupport

// import Head from 'next/head'


// import Hero from '../components/home/Hero'
// import Choose from '../components/home/Choose'
// import Offer from '../components/home/Offer'
// import Search from '../components/home/Search'
// import Counter from '../components/home/Counter'

// import Review from '../components/home/Review'
// import Team from '../components/home/Team'




// const Home = () => {
  

//   return(
//     <div className='landing-page'>
//       <Head>
//         <title>Home Page</title>
//       </Head>
//       <Hero/>
//       <Offer/>
//       <Choose/>
//       <Search/>
//       <Counter/>
//       <Review/>
      
//       <Team/>
      
     
//     </div>
//   )
// }




// export default Home