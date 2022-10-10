import React from 'react'
import Breadcrumb from '../components/BreadCrumb'
import Intro from '../components/jobs/Intro'
import JobItem from '../components/jobs/JobItem'
const Jobs = () => {
    return (
        <React.Fragment>
            <Breadcrumb title="Jobs"/>
            <JobItem/>
        </React.Fragment>
    )
}

export default Jobs