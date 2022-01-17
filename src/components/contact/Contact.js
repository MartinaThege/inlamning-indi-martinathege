import React from 'react';
import ReactDOM from 'react-dom';
import './contact.scss';
import personImage from '../../images/personimage.png';


export default function Contact() {

    return (
        <div className="contact" id="contact">
          <div className="contact-container">
            <div className="contact-header">Kontakt</div>

          </div> 

          <div className="contact-info">
<div className="contact-info-pb"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nisi corrupti similique natus id saepe unde voluptatem. Maiores sapiente id optio ullam debitis deserunt est provident necessitatibus saepe facere. <br/> <br/> Dicta voluptatibus magnam neque molestias. Nesciunt facere ratione facilis tenetur dicta sed incidunt similique inventore eius! Quibusdam consequuntur tempora quidem recusandae consectetur suscipit, labore eligendi laudantium veritatis perspiciatis. <br/> <br/> Magnam nesciunt debitis in, optio, quod vel nobis ea minus recusandae explicabo, voluptates accusantium dicta.<br/> <br/>  Quae molestiae, itaque deleniti a neque aspernatur soluta adipisci amet saepe magnam ad ratione nesciunt eligendi asperiores rerum eaque sapiente laboriosam aliquam tempore nam laudantium quos doloremque eveniet.</div>
<div className="contact-info-adress">Martina Thege <br/>
Ljusnevägen 26 <br/>
12848 Bagarmossen <br/>
+46 70 488 08 67<br/>
info@detomdetta.se </div>
<div className="contact-info-image">
<img src={personImage}/>
</div>

          </div>
              
        </div>
    )
}