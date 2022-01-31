import React from 'react';
import "./index.scss"
import flower from '../../images/main-flower.svg';

export default function Index() {
    return (
        <div className="index" id="index">

                <div className="container">
                    <div className="header"><h6>Hej, jag heter </h6> Martina Thege <br/> och är frontend-utvecklare i Stockholm.</div>
                        <div className="index-item">  Jag utvecklar hemsidor och brinner för en lättanvänd, snygg och effektiv lösning 
                            på mina projekt. Mitt kontor finns i Bagarmossen och heter <b>Det om Detta</b>. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem animi 
                                esse suscipit ab commodi provident culpa recusandae repellendus rerum? Ipsa!</div>

      
        
        </div>
<img className="flower-main" src={flower} alt=""/>

       </div>
    )
}
