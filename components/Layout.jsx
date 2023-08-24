import React, { ReactNode } from 'react'
import Navbar from './Navbar';


const Layout = ({ children }) => {
    return (
        <>
            <div className='md:px-32 bg-black'>
                <Navbar />
                {children}
            </div>
        </>
    )
}

export default Layout;