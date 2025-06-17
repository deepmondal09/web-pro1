// import React from 'react'
import './style.css'
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div className='header'>
        <h1 className='heading'>DROPshipping.com</h1>
        <ul>
            <li><Link className='Link' to='/'>HOME</Link></li>
            <li><Link className='Link' to='/product'>HIS</Link></li>
            <li><Link className='Link' to='/product1'>HER</Link></li>
            <li><Link className='Link' to='/product3'>KIDS</Link></li>
        </ul>
    </div>
  )
}

export default Nav