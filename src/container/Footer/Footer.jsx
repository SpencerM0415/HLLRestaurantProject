import React from 'react';

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>36 Main St, South Freeport, Maine 04078</p>
        <p className='p__opensans'>Restaurant: 207-865-4888</p>
        <p className='p__opensans'>Lobster Pound: 207-865-3535</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.Capture} alt="footer_logo" />
        <p className='p__opensans'>Footer Filler</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop: 15}} />
        <div className='app__footer-links_icons'>
          <a href="https://www.facebook.com/harraseeketlunchandlobster/"> <i class="FiFacebook"><FiFacebook></FiFacebook></i></a>
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Sunday - Thursday:</p>
        <p className='p__opensans'>11:00 am - 7:00 pm</p>
        <p className='p__opensans'>Friday - Saturday</p>
        <p className='p__opensans'>11:00 am - 8:00 pm</p>
        <p className='p__opensans'>Live Lobster</p>
        <p className='p__opensans'>07:00 am - Close; Daily</p>

      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2022 Harraseeket Lunch & Lobster LLC. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
