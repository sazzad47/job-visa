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
import Notices from '../components/notices/Notices'
import { getData } from '../utils/fetchData'
import Form from '../components/contact/Form'
const Notice = ({data}) => {
    return (
        <React.Fragment>
           <Breadcrumb title="Notices"/>
           <Form/>
            <Notices data={data} />
        </React.Fragment>
    )
}

export async function getServerSideProps() {
  
    const res = await getData('notices/getAll')
    console.log('noticeddd', res.data)
    return {
      props: {
          data: res.data,
      }, 
    }
  }

export default Notice