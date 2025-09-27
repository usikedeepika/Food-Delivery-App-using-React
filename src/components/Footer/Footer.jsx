import React from 'react';
import {assets} from '../../assets/assets.js';

import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img src={assets.log} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eveniet blanditiis nesciunt optio id hic aliquam minima excepturi, laboriosam vero. Nisi minus debitis expedita similique dicta laudantium aut dolores necessitatibus!</p>
         <div className='footer-social-icons'>
             <img src={assets.facebook_icon}/>
             <img src={assets.twitter_icon}/>
             <img src={assets.linkedin_icon}/>
         </div>
        </div>
        
        <div className='footer-content-center'>
           <h2>Company</h2>
           <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
           </ul>
        </div>
        <div className='footer-content-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-1234567890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
       <hr/>
       <p className='footer-copyright'>

        Copyright 2024 © Tomato.com All Right -Reserved
       </p>

    </div>
  );
}

export default Footer;
