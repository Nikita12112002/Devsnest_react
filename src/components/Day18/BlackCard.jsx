import React from "react";
import "./Day18.css";


var s=["bl","wh" ,"bl","wh","bl","wh","bl","wh","bl","wh","bl"];

function BlackCard()
{
    return (
        <>
          <table className="tb">
            <tr>
            {
               s.map(item=>
                 item==='bl'?
                 <td className="col"></td>:
                  <td className="white1 col"></td>
                )
            }
                
            </tr>
            </table>
        </>
    );

}
export default BlackCard;