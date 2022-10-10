import React from 'react'
import Breadcrumb from '../components/BreadCrumb'
import Intro from '../components/notices/Intro'
import Notices from '../components/notices/Notices'
const Notice = () => {
    return (
        <React.Fragment>
           <Breadcrumb title="Notices"/>
            <Notices/>
        </React.Fragment>
    )
}

export default Notice