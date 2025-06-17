import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import Nav from './nav'
import Footer from './footer'


const Home = () => {
  return (
    <div>
        <Nav />
        <div className='queryA'>
          <button><Link className='queryB' to='/query'>QUERY</Link></button>
          <button><Link className='queryC' to='/feedback'>FEEDBACK</Link></button>
          <button><Link className='queryC' to='./about'>ABOUT US</Link></button>
        </div>
        <div className='homeedit'>
           <img className='homeedit2' src="./img/home1.jpg" alt="home" />;
           <Link to='./product'><img className='homeshop1' src="./img/shopmen.jpg" alt='mens'/></Link>
           <Link to='./product1'><img className='homeshop2' src="./img/shopmen1.jpg" alt='mens'/></Link>
           <div>
           </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home;


