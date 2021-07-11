import React, { useState } from "react";
import "./Day19.css";

function Day19Card()
{
    const[num ,setnum]=useState(0);
    const[num2 ,setnum2]=useState(0);
    const[num3 ,setnum3]=useState(0);

    const incnum=()=>
    {
        setnum(num+1);
    }
    const incnum2=()=>
    {
        setnum2(num2+1);
    }
    const incnum3=()=>
    {
        setnum3(num3+1);
    }
    
    return(
        <>
        <div className="out">
        <div className="main_div">
        <div className="inner_div">
        <h1 className="day">H</h1>
               <h1 className="month">M</h1>
               <h1 className="year">S</h1>
               </div>
         
         <div class="container">
        
             
          
            <button className="btn11" onClick={incnum}>{num}</button>
            
            <button className="btn2" onClick={incnum2}>{num2}</button>
           
            <button className="btn3" onClick={incnum3}>{num3}</button>
            </div>  
        </div>
        </div>
       
         
        
        </>
    );
}
export default Day19Card;