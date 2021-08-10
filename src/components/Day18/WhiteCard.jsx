import React from "react";
import "./Day18.css";


var s=["bl","wh" ,"bl","wh","bl","wh","bl","wh","bl","wh","bl"];

function WhiteCard()
{
    return (
        <>
          <table>
            <tr>
            {
               s.map(item=>
                 item==='bl'?
                 <td className="white1 col" ></td>:
                  <td className="black1 col"></td>
                )
            }
            </tr>
          </table>
        </>
    );

}

export default WhiteCard;