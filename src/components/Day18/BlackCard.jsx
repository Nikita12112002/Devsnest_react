import React from "react";
import "./Day18.css";

var b=["bl","wh" ,"bl","wh","bl","wh","bl","wh","bl","wh","bl"];
var s=["bl","wh" ,"bl","wh","bl","wh","bl","wh","bl","wh","bl"];

function BlackCard()
{
    return (
        <>
          <table className="tb">
            <tr className="row">
            {
               s.map(item=>
                 item==='bl'?
                 <td className="black1 col"></td>:
                  <td className="white1 col"></td>
                )
            }
                
            </tr>
            </table>
        </>
    );

}
export default BlackCard;