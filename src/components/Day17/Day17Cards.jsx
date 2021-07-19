import React from "react";
import "./Day17.css"

function Day17Cards(props)
{
    return(
        <>
       
       
          
          <div className="container2">
            <h1 className="dish">DISH : {props.title}</h1>
            <h2 className="cal"> {props.description}</h2>
          </div>
        
          

        
        </>
    );

}

export default Day17Cards;