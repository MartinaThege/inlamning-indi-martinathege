import React from 'react';
import { FaJsSquare, FaCode, FaReact, FaSearchengin, FaNodeJs} from "react-icons/fa";
import { RiBriefcase5Line, RiTeamLine, RiCustomerService2Fill } from "react-icons/ri";
import "./about.scss";

export default function About() {
    return ( <div className = "about" id = "about" >
        <div className="about-container">
            <div className="about-items">
                <div className="about-header"><h3>Om mig</h3></div>
                <div className="about-item">
Hej! Jag heter Martina och jag tycker om att forma och utveckla saker som finns på internet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quibusdam. Ducimus mollitia quis molestias ex tempora provident dignissimos amet explicabo fugit, asperiores omnis repudiandae. Numquam fugit officia nemo sit a fuga ipsum consectetur. Voluptatibus voluptates minima eaque adipisci iste sequi illum sunt necessitatibus ratione, rerum culpa, accusantium velit! Maxime, nobis.      </div>

</div><div className="bild"></div>
</div>
        

        <div className="kunskaper-container">

           <div className = "kunskaper-header" > <h3>Kunskaper</h3> </div><br/>
                 Dessa områden är jag kunnig och speciliserad inom. Detta har jag lärg genom min utbildning och genom självstudier. 
                                  
            <div className="kunskaper-items">

                <div className="kunskaper-item1">
                    <div className="kunskaper-item1-header"><b>WEBBUTVECKLING</b></div>
                    < div className="feature-icons1">
                        <div className="feature-icons-js1"><FaJsSquare size={20} /> Javascript</div> 
                        <div className="feature-icons-react1"><FaReact size={20}/>   React</div>
                        <div className="feature-icons-code1"><FaCode size={20}/>   HTML/CSS/SASS </div>
                        <div className="feature-icons-node"> <FaNodeJs size={20}/> Node.js </div>
                        <div className="feature-icons-search"> <FaSearchengin size={20}/>   SEO </div>
                </div>
            </div>



            <div className="kunskaper-item2">
                <div className="kunskaper-item2-header"> <b>LEDARSKAP</b></div>
                < div className="feature-icons2">
                    <div className="feature-icons-js2"><RiTeamLine size={20}/>   Projektledarskap</div> 
                    <div className="feature-icons-react2">< RiBriefcase5Line size={20}/>   Ledarskapsutbildning</div>
                    <div className="feature-icons-code2"><RiCustomerService2Fill size={20}/>   Kundservice </div>
                </div>
            </div>
            </div>
            <br/>

            <div className="arbete-header"> <h3> Här har jag jobbat </h3></div>

            <div className="arbete-container">

                <div className="arbete-items">
<div className="arbete-item1">
<ul>
<li>Frilans</li>
<li>Stockholms Handelskammare</li>
<li>Stockholms stad</li>

</ul>


</div>
<div className="arbete-item2">
    <ul>

        <li>Frilans inom webbutveckling och projekt inom front end och webdesign. Här tar jag ansvar för hela; från första kundkontakt till färdig produkt.  </li>
<br/>
        <li>Ansvarade för företagets alla event och projektledde större konferenser.</li>
        <br/>
        <li>Jobbade med Stockholms stads större publika evenemang som projektledare och ansvarig för det operativa arbetet som projektkoordinator.  </li>

    </ul>





</div>
                </div>
            </div>

            
        
        
    </div>
    </div>


        
    )


}