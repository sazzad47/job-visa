import React from 'react'

import Notify from './Notify'
import Modal from './Modal'
import Header from './header/Header'
import Footer from './footer/Footer'

function Layout({children}) {
    return (
        <div>
            {/* <Header /> */}
            <Notify />
            <Modal />
            {children}
            {/* <Footer/> */}
           
        </div>
    )
}

export default Layout
