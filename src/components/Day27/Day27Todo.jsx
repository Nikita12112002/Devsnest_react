import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import "./Day27.css";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const Day27Todo=()=>
{
    const classes = useStyles();
    const [items,setItems]= useState("");

    
    return(
        <>
        
        <div className="day27_div">
        <input type="text" placeholder="Add Item" className="day27_add" value={items} 
         onChange={e => setItems(e.target.value)}/>

         <br/><br/>
         {items}
        

        <Button variant="contained" color="primary" href="#contained-buttons" 
        className="day27_addbtn"
        style={{marginLeft:"40px"}}
        onClick={()=>{
            setItems("");
        }}>
        Link
        </Button>

        

        
      
        </div>
        
        </>
    );
}
export default Day27Todo;