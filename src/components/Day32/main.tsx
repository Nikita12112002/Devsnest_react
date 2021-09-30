import React from "react";

interface User {
    name: string,
    age: number,
    email: string
}

function Typescript() {
    const user: User = {
        name: "Nikita Gupta",
        age: 18,
        email: "nikita.1923it1159@kiet.edu"
    }
    return(
       <div className="typescript">
           {
               user === null ? "loading..." : (
                   <div>
                   <h4>{user.name}</h4>
                   <h5>{user.age}</h5>
                   <h6>{user.email}</h6>
                   </div>
               )
           }
       </div>
    )
}
 export default Typescript;

