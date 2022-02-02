import {useState, useEffect} from 'react';
import "./portfolio.scss"
import { RiGitRepositoryLine } from "react-icons/ri";




export default function Portfolio() {


    const [data, setData] = useState();
    useEffect(() => {
        fetch ("https://api.github.com/users/MThege/repos")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setData(data);
            console.log(data);

        });
    }, []);
    

    

        return <div className="portfolio" id="portfolio">     <div className="portfolio-header">Mina GitHub Repositories</div><br/>


        {data && data.map((item) => <div key={item.id}><br/>
        <br/><br/>
        <div className="portfolio-container">

        
                <div className="portfolio-name">{item.name}</div>
        <div className="portfolio-language">{item.language}</div>
        <div className="portfolio-description">{item.description}</div>
        <a href={item.html_url} target="_blank" rel="noreferrer"       
        onMouseOver={({target})=>target.style.color='pink'}      
        onMouseOut={({target})=>target.style.color='black'}
 
><RiGitRepositoryLine size={60} color="black" padding="20px"
/></a></div>

    
</div>)}</div>;



    
}