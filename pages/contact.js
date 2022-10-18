// import React from 'react'
// import Breadcrumb from '../components/Breadcrumb'

// import Form from '../components/contact/Form'
// import Info from '../components/contact/Info'
// import { getData } from '../utils/fetchData'



// const Contact = ({data}) => {
 
//   return (
//  <> 
//    <Breadcrumb title="Contact"/>
   
//     <div className="">
//       {/* <Info data={data} /> */}
//       <Form />
//     </div>
//   </>
//   )
// }

// export async function getServerSideProps() {
  
//   const res = await getData(
//     `contact?index=1`
//   )
  
//   return {
//     props: {
//         data: res.data,
//     }, 
//   }
// }

// export default Contact

import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Parser from 'html-react-parser';
import { getData } from '../utils/fetchData'


const Notice = ({data}) => {
    return (
        <React.Fragment>
           <Breadcrumb title="Contact"/>
          

           <div>{Parser(data.email)} </div>

    
 
            
        </React.Fragment>
    )
}

export async function getServerSideProps() {
  
    const res = await getData('contact?index=1')
    
    return {
      props: {
          data: res.data,
      }, 
    }
  }

export default Notice