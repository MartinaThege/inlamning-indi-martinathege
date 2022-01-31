import React from 'react';
import { FaJsSquare, FaCode, FaReact, FaSearchengin, FaNodeJs} from "react-icons/fa";
import { RiBriefcase5Line, RiTeamLine, RiCustomerService2Fill } from "react-icons/ri";
import "./about.scss";
import styled from 'styled-components';
import dummie1 from '../../images/pngwing.com-2.png';
import dummie2 from '../../images/pngwing.com-3.png';
import dummie3 from '../../images/pngwing.com-4.png';
import migImage from '../../images/IMG_2538.jpg';
import leaf from '../../images/leafs.svg';



function readCV() {
    alert('Här ska det vara ett CV i PDF');
  }

  const Button = styled.button`
  width: 8rem;
  background-color: white;
  border: solid 1px grey;
  color: black;
  font-size: 12px;
  padding: 12px ;
  border-radius: 3px;
  margin: 10px 0px;
  cursor: pointer;
  &:hover {
    background-color: lightgrey;
    transition: ease 0.3s;
    letter-spacing: 0.1rem
  }
`;

export default function About() {
    return ( <div className = "about" id = "about" >
<img className="leaf" src={leaf}/>

<div className="about-container">
            <div className="about-items">
                <div className="about-header"><h3>Om mig</h3></div>
                <div className="about-item"><div className="about-item-text">
                            Hej! Jag heter Martina och jag tycker om att utforma och utveckla saker som finns på internet. Jag är en positiv och dedikerad person med stort engagemang och strävar alltid efter att utvecklas. Under mina år som yrkesverksam har jag hunnit med flera olika typer av yrkesroller; 
                            eventkoordinator på Stockholms Handelskammare, projektkoordinator i Stockholms Stad och utbildningsansvarig på Arlanda Swedavia. Genom min yrkesmässiga bakgrund har jag god erfarenhet 
                            av att effektivt hitta kreativa lösningar på utmaningar. <br/> <br/> När jag inte jobbar dansar jag argentinsk tango, läser och umgås med familjen. Jag drömmer om att få visa livet för mina barn och någongång driva ett mindre lantbruk. </div>
                    <img src={migImage}/></div>
            

            
                <Button onClick={readCV}>Här är mitt CV</Button>
        </div></div>
        

        <div className="kunskaper-container">

           <div className = "kunskaper-header" > <h3>Kunskaper</h3> </div><br/>
                 Dessa områden är jag kunnig och speciliserad inom. Jag är hela tiden mån om att uppdatera mig om det senaste och är ödmjuk inför att det alltid finns mer att lära. Detta har jag lärt genom min utbildning och genom självstudier. 
                                  
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
<div className="portfolio"><h3>Hemsidor jag har fått göra</h3>
Här är några exempel på hemsidor jag har fått äran att utveckla.</div>

            <div className="dummies">
                    <img src={dummie1}/>
                    <img src={dummie2}/>
                    <img src={dummie3}/>
                </div>
        
        </div>
        

        
    </div>


        
    )


}