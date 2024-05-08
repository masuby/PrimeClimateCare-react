import React, { useState } from 'react';
import "./Footer.css";
import whatsapp from "../../Assets/whatsapp-logo.png"
import twitter from "../../Assets/twitter-logo.png"
import instagram from "../../Assets/instagram-logo.png"
import linkedin from "../../Assets/linkedin-logo.png"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import Newsletter from './Newsletter';
const Footer = () => {
    
  return (
    <div className='footer'>
        <div className='section_padding'>
        <Newsletter/>
            <div className="sb_footer_links">
            <div className="sb_footer_links_div">
            <h2>BUSINESS</h2>
            <a href='./employer'>
                <p>Employer</p>
            </a>
            <a href='./health'>
                <p>Health Plan</p>
            </a>
            <a href='./individual'>
                <p>Individual</p>
            </a>
        </div>
        <div className='sb_footer_links_div'>
        <h2>PARTNERS</h2>
            <a href='https://www.cantz.or.tz/' target='_blank'>
                <p>Can Tanzania</p>   
            </a>
        </div>
        <div className='sb_footer_links_div'>
        <h2>CONTACTS</h2>
            <p>Prime Climate Care</p>   
            <p>Address: P.O.Box   230698</p>   
            <p>Dar es salaam Tanzania</p> 
            <p>Phone: +255679601466</p>
            <p>Email: pclicare@gmail.com</p>  
        </div>
        <div className='sb_footer_links_div'>
        <h2>FOLLOW US</h2>
        <div className="social-media">
            <p><img src={instagram} alt='' onClick={() => window.open("https://www.instagram.com/primeclimatecare_/", "_blank")} /></p> 
            <p><img src={twitter} alt='' onClick={() => window.open("https://twitter.com/Primeclima84261", "_blank")} /></p> 
            <p><img src={whatsapp} alt='' onClick={() => window.open("https://wa.me/+255719592997", "_blank")} /></p> 
            <p><img src={linkedin} alt='' onClick={() => window.open("https://www.linkedin.com/company/prime-climate-care", "_blank")} /></p>   
        </div>
        </div>
        </div>
        <hr></hr>
        <div className='sb_footer_below'>
            <div className="sb_footer_copyright">
                <p>
                  @{new Date().getFullYear}  PrimeCare All right reserved
                </p>
            </div>
xx
            <div className="sb_footer_below-links">
                <a href='/terms'><div><p>Terms and Conditions</p></div></a>
                <a href='/privacy'><div><p>Privacy</p></div></a>
                <a href='/security'><div><p>Security</p></div></a>
                <a href='/cookies'><div><p>Cookies</p></div></a>
            </div>
        </div>
    </div>
</div>
  )
}

export default Footer
