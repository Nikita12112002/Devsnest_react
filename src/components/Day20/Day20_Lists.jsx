import React from "react";
import IconLabelButtons from "./Day20delete";

function Day20_Lists()
{
    const deleteItems =()=>
  {
     console.log('deleted');
  };
    return(
        <>
         <ol>
             {
                 Items.map((itemval , index)=>
                 {
                     return <IconLabelButtons
                              key={index}  
                              id={index} 
                               text={itemval} 
                               onSelect={deleteItems}    
                               />;
                 })   
             }
         </ol>
        </>
    );
}
export default Day20_Lists;