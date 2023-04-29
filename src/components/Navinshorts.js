import React from 'react';
import './Navinshorts.css';
import HamburgerDrawer from './HamburgerDrawer';

const Navinshorts = () => {
  return (
    <div className='nav'>
        <div className='icon'>
            <HamburgerDrawer.js/>
        </div>
        <img
        style={{cursor:"pointer"}}
         src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" 
        
        />
    </div>
  )
}

export default Navinshorts