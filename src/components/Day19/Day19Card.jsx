import React, { useState } from "react";
import "./Day19.css";

function Day19Card()
{
    const[num ,setNum]=useState(0);
    const[num2 ,setNum2]=useState(0);
    const[num3 ,setNum3]=useState(0);

    const incNum=()=>
    {
        setNum(num+1);
    }
    const incNum2=()=>
    {
        setNum2(num2+1);
    }
    const incNum3=()=>
    {
        setNum3(num3+1);
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
         
         <div class="container_button">
        
             
          
            <button className="btn11" onClick={incNum}>{num}</button>
            
            <button className="btn2" onClick={incNum2}>{num2}</button>
           
            <button className="btn3" onClick={incNum3}>{num3}</button>
            </div>  
        </div>
        </div>
       
         
        
        </>
    );
}
export default Day19Card;