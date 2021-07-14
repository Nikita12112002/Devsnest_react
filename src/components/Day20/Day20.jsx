import Day20Cards from "./Day20Cards";
import {useState} from "react";
import "./Day20.css";

function Day20() {
  const [data,setData]=useState([
  {name:"Pizza",calorie:56},
  {name:"Burger",calorie:69},
  {name:"Coke",calorie:500},
  {name:"Brownie",calorie:180},
  {name:"Fried rice",calorie:90},
  {name:"laasania",calorie:200},
  {name:"Pani puri",calorie:10},
]);
  return (
    <div className="main_e">
     <h1 className="head">YOUR CALORIE CHART</h1>
      <div className="main3">
         {data.length!==0?
           data.map((data1,key)=>(
             <Day20Cards key={key} name={data1.name} calorie={data1.calorie} index={key} data={data} setData={setData}/>
         )):
         <h1 style={{color:"white"}}>NO ENTRY</h1>
         }
      </div>
    </div>
  );
}

export default Day20;