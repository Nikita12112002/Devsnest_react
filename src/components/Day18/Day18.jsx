import React from "react";
import "./Day18.css";
import Day18Card from "./Day18Card";

var a=[1,2,3,4,5];

function Day18()
{
    return(
        <>

        <div className="day18main">
         
          <div className="card22">
            { 
              a.map(item =>
              <Day18Card/>
             )
            }
            
          </div>

          </div>
        
        </>
    );
}

export default Day18;