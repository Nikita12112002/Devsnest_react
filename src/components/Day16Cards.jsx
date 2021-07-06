import React from "react";
import './Day16.css';
import Card2 from "./Day16Cards2";

function Card()
{
    return(
        <>

        <div className="main1">
          <div className="card">
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8qJzcxefSIP_pTBb6MhJdMQG7LY6pk9lA-NRd9QPdyQvaIHqegxDl7RTBSotxXgFDag&usqp=CAU"
              alt="mastercard pic"
            />
            <h1 className="heading">PAYMENT CARD</h1>

            <Card2/>
          </div>
        </div>
        </>
    );

}

export default Card;