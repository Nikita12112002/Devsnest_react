import React, { useState } from "react";
import "./Day21.css";
import Day21delete from "./Day21delete";


function Day21()
{
  const[inputList , setInputList]=useState("");
  const[inputCalories , setInputCalories]=useState("");
  const[items,setItems] = useState([]);
  const[cal,setCal]=useState([]);
  const Add=(event)=>
{
    setInputList(event.target.value);
};
const Calories=(event)=>
{
    setInputCalories(event.target.value);
};

const ListItems=()=>
{
  setItems((prev)=>
  {
    return [...prev ,inputList];
  });
 setInputList(" ");
  setCal((prevcal)=>
  {
    return [...prevcal , inputCalories];
  });
  setInputCalories(" ");
};



   return(
     <>
     <div className="add">
      <input type="text" className="add_item" placeholder="Add item" onChange={Add} value={inputList} required/>
      <input type="text" className="add_calories" placeholder="Add calories" onChange={Calories} value={inputCalories}required/>
      </div>
      <button className="add_btn" onClick={ListItems}>Add Item</button>
      
       {
         items.map((itemval)=>
         {
           return <Day21delete text={itemval} />
            
           
         })
       }

       {
         cal.map((itemcal=>
         {
           return (
             <>
             <div> You have consumed {itemcal}calories </div>
             
             </>
           );
         }))
       }
     
     
     </>
   );
}
export default Day21;