import React from "react";
const deleteItem=()=>
{
    console.log("delted");
}
function Day21delete(props)
{
    return(
        <>
         <button onClick={deleteItem}>Delete</button>
        </>
    );
}
export default Day21delete;