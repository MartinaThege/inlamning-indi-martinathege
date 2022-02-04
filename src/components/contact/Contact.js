import React, { useRef} from 'react';
import './contact.scss';
import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';
import { IconContext } from 'react-icons';
import styled from 'styled-components';
import{ init, sendForm } from '@emailjs/browser';
import emailjs from 'emailjs-com'
init("user_LRslu9SWCzaWUK43GRRSQ");

export default function Contact() {
const formRef = useRef(null);
const nameRef = useRef(null)
const emailRef = useRef(null)
const messageRef =  useRef(null)
const handleClick = () => {
  formRef.current.reset();
};


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm
    ('service_5meor97', 'template_akprifl', e.target, 'user_LRslu9SWCzaWUK43GRRSQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      document.querySelector(
        ".ui-message"
      ).innerText = `Tack för ditt meddelande!`;;


  };



    return (
      <IconContext.Provider value={{ size: '2.5em', color: 'black'}}>
        <div className="contact" id="contact">
          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-header"> <h3> Hör gärna av dig!</h3></div>
              <div className="contact-info-pb"> Om du vill ses över en kaffe eller har några frågor kan du hitta mig på social media eller tveka inte att skicka mig ett mail. </div>
              <div className="contact-info-adress">Martina Thege <br/>
                Ljusnevägen 26 <br/>
                12848 Bagarmossen <br/>
                +46 70 488 08 67<br/>
                <u>info@detomdetta.se</u>
                  <div className="icons">
                    <a href="https://github.com/MThege"> <FaGithub/></a> <a href="https://instagram.se/det.om.detta"> <FaInstagram/></a> <a href="https://www.linkedin.com/in/martina-thege-0b7466b7/?originalSubdomain=se"> <FaLinkedin/></a></div>
              </div>
            </div>
         
            <div className="container2"> 
              <div className="hm"> Skriv till mig!</div>
              
              
              <form onSubmit={sendEmail} onClick={handleClick} ref={formRef} className="form">
                <div className="name">
                  <input
                    type="text"
                    name="firstName"
                    className="name"
                    placeholder="Ditt namn"
                    tabIndex="1"
                    ref={nameRef}

                    /><br/>
                  </div>
                <div className="email">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="email"
                    placeholder="E-mailadress"
                    tabIndex="2"
                    ref={emailRef}
              /></div>
                <div className="message">
                  <textarea
                  placeholder="Här kan du skriva meddelande"
                  className="message"
                  name="message"
                  ref={messageRef}

              /></div>
                <button type="submit" className="sendMsg">Sänd</button>
                <div className="ui-message"></div>
              </form>
          </div>
          </div>

          

          

<div className="contact-footer"> © 2021 | Designad och kodad med 💙 av Martina Thege</div>
        </div>
        </IconContext.Provider> 
    )


 

}