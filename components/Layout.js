import React from 'react'

import Notify from './Notify'
import Modal from './Modal'
import Header from './header/Header'
import Footer from './footer/Footer'
import { useRouter } from 'next/router'
import { ToastContainer} from 'react-toastify';

function Layout({children}) {
    const router = useRouter()
    return (
        <div>
            {router.pathname==="/admin"? null :<Header />}
            <Notify />
            <ToastContainer 
            position="bottom-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme='dark'
            pauseOnHover/>
            <Modal />
            {children}
            {router.pathname==="/admin"? null :<Footer/>}
            
           
        </div>
    )
}

export default Layout
