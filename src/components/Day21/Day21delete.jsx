import React from "react";

function Day21delete(props)
{
    const deleteItem=()=>
{
    const newdata = props.cal.filter((el,i)=>i!=props.index);
    props.setCal(newdata);
}
    return(
        <>
          
            
             
             <h1> You have consumed {props.calorie} calories </h1>
         <button onClick={deleteItem}>Delete</button>
        </>
    );
}
export default Day21delete;