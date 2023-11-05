import React from 'react';

import Mevsimler from "./Mevsimler";
import Renkler from './Renkler';
//shapejs komponentlerimizin nasıl bir şekilde verileceğini belirliyor . Bir nevi dış kutu(içinde renker ve mevsimler var)

function Shape(props){
    console.log("Shape props",props)
    return(
        <div>
         <p>{props.title}</p>
         <ul>
           
            <p>{props.title}</p>
            <ul>
            {props.renkler.map((renk,index) => (
                <li key={index}>{renk}</li>
            ))}
            </ul>
         </ul>
        </div>
    )
}
export default Shape ;