import React from 'react';
import './contact.scss';
import personImage from '../../images/personimage.png';
import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';
import { IconContext } from 'react-icons';

export default function Contact() {

    return (
      <IconContext.Provider value={{ size: '3em', color: 'black'}}>
        <div className="contact" id="contact">
        


          <div className="contact-info">
          <div className="contact-header"> <h3> Hör gärna av dig!</h3></div>
          <div className="contact-info-pb"> Om du vill ses över en kaffe eller har några frågor kan du hitta mig på social media eller tveka inte att skicka mig ett mail. </div>
{/*<div className="contact-info-pb"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nisi corrupti similique natus id saepe unde voluptatem. Maiores sapiente id optio ullam debitis deserunt est provident necessitatibus saepe facere. <br/> <br/> Dicta voluptatibus magnam neque molestias. Nesciunt facere ratione facilis tenetur dicta sed incidunt similique inventore eius! Quibusdam consequuntur tempora quidem recusandae consectetur suscipit, labore eligendi laudantium veritatis perspiciatis. <br/> <br/> Magnam nesciunt debitis in, optio, quod vel nobis ea minus recusandae explicabo, voluptates accusantium dicta.</div>
*/}<div className="contact-info-adress">Martina Thege <br/>
Ljusnevägen 26 <br/>
12848 Bagarmossen <br/>
+46 70 488 08 67<br/>
<u>info@detomdetta.se</u>
<div className="icons">
  
<a href="https://github.com/MartinaThege"> <FaGithub/></a> <a href="https://instagram.se/det.om.detta"> <FaInstagram/></a> <a href="https://www.linkedin.com/in/martina-thege-0b7466b7/?originalSubdomain=se"> <FaLinkedin/></a></div>

</div>
<div className="contact-info-image">
{/*<img src={personImage}/>*/}
</div>

          </div>
              
        </div>
        </IconContext.Provider> 
    )
}