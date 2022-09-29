import React from 'react'

import Notify from './Notify'
import Modal from './Modal'
import Header from './header/Header'
import Footer from './footer/Footer'
import { useRouter } from 'next/router'


function Layout({children}) {
    const router = useRouter()
    return (
        <div>
            {router.pathname==="/admin"? null :<Header />}
            <Notify />
            <Modal />
            {children}
            {router.pathname==="/admin"? null :<Footer/>}
            
           
        </div>
    )
}

export default Layout
