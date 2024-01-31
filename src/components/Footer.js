import "./FooterStyles.css";
import {FaHome, FaPhone, FaMailBulk,FaLinkedin,FaFacebook} from "react-icons/fa";
import React from 'react';

const Footer = () => {
  return (  
     <div className="footer">
        <div className="footer-container">
         
         
          <div className="left">
            <div className="location">
               <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
            <div>
            <p>Islamabad Pakistan.</p>
            </div>
            </div>

            <div className="phone">
                <h4> <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
            +92 334 4137700</h4>
            </div>

            <div className="email">
                <h4> <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
            Mehtabazam34@gmail.com</h4>
            </div>
            </div>
            


          <div className="right">
          <h4>About</h4>
          <p>As an Electrical Engineer, I possess a strong foundation in technology
            and a steadfast commitment to driving innovation. Moreover, as a Embedded System Engineer, 
            I have honed my skills in working with embedded systems, allowing me to take on complex challenges and drive meaningful innovation.
          </p>
          <div className="social">
              <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}}/>
              <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>
              </div>
          </div>
          </div>
     </div>
)
}

export default Footer;