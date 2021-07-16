import React, { useState } from "react";
import "./Day21.css";
import Day21delete from "./Day21delete";


function Day21()
{
  const[inputList , setInputList]=useState("");
  const[inputCalories , setInputCalories]=useState("");
  const[items,setItems] = useState([]);
 
  const [cal,setCal]=useState([
    {name:"Pizza",des:56},
    {name:"Burger",des:69},
    {name:"Coke",des:500},
    {name:"Brownie",des:180},
    {name:"Fried rice",des:90},
    {name:"laasania",des:200},
    {name:"Pani puri",des:10},
  ]);
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
    return [...prevcal , inputCalories,inputList];
  });
  setInputCalories(" ");
};



   return(
     <>
     <div className="add">
      <input type="text" className="add_item" placeholder="Add item" onChange={Add} value={inputList} required/>
      <input type="number" className="add_calories" placeholder="Add calories" onChange={Calories} value={inputCalories}required/>
      </div>
      <button className="add_btn" onClick={ListItems}>Add Item</button>
      

      <div style={{backgroundColor:"red"}}>

      {
         items.map((itemval)=>
         {
           return(
           <>
           <div>{itemval}</div>
           
            </>
           ); 
         })
       }
       
{
       
        cal.map((itemcal,index)=>
         {
           
           
          

          
           
         })
}
       
       </div>
     
     </>
   );
}
export default Day21;