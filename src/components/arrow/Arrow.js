import React from 'react';
import "./arrow.scss";
import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';
import styled from 'styled-components';




export default function Arrow() {
    return (<div className="arrow" id="arrow">
                
                <div className="left">
                    
                    
                    <div className="arrow-icons">

                    <a href="https://github.com/MartinaThege"> <FaGithub/></a> 
                    <a href="https://instagram.se/det.om.detta"> <FaInstagram/></a> 
                    <a href="https://www.linkedin.com/in/martina-thege-0b7466b7/?originalSubdomain=se"> <FaLinkedin/></a>

                    </div>
                </div>
                
                <div className="right">
                    <div className="arrow-contact"> <a href="mailto:martina@detomdetta.se" className="arrow-mail">martina@detomdetta.se</a> </div>
                </div>
            </div>
    )
};
