import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Notices from '../components/notices/Notices'
import { getData } from '../utils/fetchData'
const Notice = ({data}) => {
    return (
        <React.Fragment>
           <Breadcrumb title="Notices"/>
           <div className='page_content'>

            <Notices data={data} />
           </div>
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