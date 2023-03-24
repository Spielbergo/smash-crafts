import React from 'react'
import './navigation.css'

import Logo from '../../assets/images/logo-black.webp'

const navigation = () => {
  return (
    <div className='main-nav--container shadow'>        
        <div className='main-nav--logo'>
            <img src={Logo} />
        </div>

        <div className='main-nav--links'>
            <ul>
                <li>About</li>
                <li>Products</li>
                <li>Contact</li>
            </ul>
        </div> 
    </div> 
  )
}

export default navigation