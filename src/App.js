import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import "./app.scss";
import React from 'react';
import ReactDOM from 'react-dom'; 
import { useState } from "react";
import Menu from "./components/menu/Menu";
import {SocialMediaIconsReact} from 'social-media-icons-react';




function App(){
const [menuOpen, setMenuOpen] = useState(false)

    return (

<div className="app">

        
            <Navbar menuOpen= {menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen= {menuOpen} setMenuOpen={setMenuOpen}/>
            <div className="sections">
                
                    <Intro/>
                    <Portfolio/>
                    <Contact/>
              
            </div>
       
</div>

     
    );
}

export default App; 
ReactDOM.render(
<SocialMediaIconsReact 
borderColor="rgba(0,0,0,0.25)" 
icon="twitter" iconColor="rgba(255,255,255,1)" 
backgroundColor="rgba(26,166,233,1)" 
url="https://some-website.com/my-social-media-url" 
size="48" />,	
document.getElementById('root'));


ReactDOM.render(
    <React.StrictMode>

        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

