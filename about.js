import React from 'react'
import './style.css'
import Nav from './nav'
import Footer from './footer'

const about = () => {
  return (
    <div className='about1'>
        <Nav />
        <div className='about2'>
            <p>
                Our major project is focused on developing a full-stack dropshipping shopping website. We are building both the frontend and backend from scratch to ensure a seamless user experience and efficient functionality. The frontend will provide an intuitive interface for users to browse and purchase products, while the backend will handle user authentication, product management, and order processing. This project integrates e-commerce features such as shopping carts, payment gateways, and real-time inventory updates. Our goal is to create a scalable and user-friendly dropshipping platform that simplifies online shopping for customers and sellers.
                <br/>
                <br/>
                Driptendu Roy
                [30901222106]
                <br/>
                <br/>
                Swarnadeep Mondal
                [30901222111]
                <br/>
                <br/>
                Sukanya Mondal
                [30901222xxx]
                <br/>
                <br/>
                Soumyajoti Das
                [30901222xxx]
            </p>
        </div>
        <Footer />
    </div>
  )
}

export default about