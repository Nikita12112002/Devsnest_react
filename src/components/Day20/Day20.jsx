import React from "react";
import Day20Cards from "./Day20Cards";

function Day20()
{
    return(
        <>
      
        <div className="main_e">
          <h1 className="head">YOUR CALORIE CHART</h1>
        <div className="main3">
        <Day20Cards title="pizza" description="You have consumed 56 cals today"/>
        <Day20Cards title="Burger" description="You have consumed 69 cals today"/>
        <Day20Cards title="coke" description="You have consumed 500 cals today"/>
        <Day20Cards title="Browne" description="You have consumed 180 cals today"/>
        <Day20Cards title="fried rice" description="You have consumed 90 cals today"/>
        <Day20Cards title="lassania" description="You have consumed 200 cals today"/>
        <Day20Cards title="Pani puri" description="You have consumed 10 cals today"/>
       </div>
       </div>
        </>
         
        
    );
}
export default Day20;