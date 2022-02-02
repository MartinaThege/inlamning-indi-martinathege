import Navbar from "./components/navbar/Navbar";
import Index from "./components/index/Index";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import "./app.scss";
import React from 'react';
import Fragment from 'react';
import ReactDOM from 'react-dom'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import {SocialMediaIconsReact} from 'social-media-icons-react';
import { IconName } from "react-icons/fa";
import Arrow from "./components/arrow/Arrow";


function App(){
const [menuOpen, setMenuOpen] = useState(false)

    return (
<div className="app">
        
            <Navbar menuOpen= {menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen= {menuOpen} setMenuOpen={setMenuOpen}/>
            <Arrow/>

                
            <div className="sections">
                    <Router>
                        <Routes>
                            <Route path="/" element={
                                <React.Fragment>
                                    <Index/>
                                    <About/>
                                    <Portfolio/>
                                    <Contact/>
                                </React.Fragment>
                            }/>
                        </Routes>
                    </Router>
                    {/*<Index/>
                    <About/>
                    <Contact/>*/}
                    
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

