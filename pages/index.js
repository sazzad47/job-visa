import Head from 'next/head'
import Hero from '../components/home/Hero'
import Choose from '../components/home/Choose'
import Offer from '../components/home/Offer'
import Search from '../components/home/Search'
import Counter from '../components/home/Counter'

import Review from '../components/home/Review'
import Team from '../components/home/Team'
import Newsletter from '../components/home/Newsletter'



const Home = (props) => {
 

  return(
    <div className='landing-page'>
      <Head>
        <title>Home Page</title>
      </Head>
      <Hero/>
      <Offer/>
      <Choose/>
      <Search/>
      <Counter/>
      <Review/>
      
      <Team/>
      
      {/* <Newsletter/> */}

    </div>
  )
}



export default Home