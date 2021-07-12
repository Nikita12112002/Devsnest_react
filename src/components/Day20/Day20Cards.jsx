import React from "react";
import "./Day20.css"
import Day20_Lists from "./Day20_Lists";

function Day20Cards(props)
{
    return(
        <>
       
       
          
          <div className="container2">
            <h1>DISH : {props.title}</h1>
            <h2> {props.description}</h2>
            <Day20_Lists/>
          </div>
        
         

        
        </>
    );

}

export default Day20Cards;