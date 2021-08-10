import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import {useSelector , useDispatch} from "react-redux";
import { day27_delItem , day27_deleteALL } from "./Actions";


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));


const ListTodo=()=>
{
    const classes = useStyles();
    const todos = useSelector((state)=>state.todo);
    const dispatch = useDispatch();
  
    return(
        <>

        {todos.map((todo,index)=>
        (
         
          <div>
          
          <input type="checkbox"/>


          <h5 className="head_day27">{todo.title}</h5>

          <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        className="day27_addbtn"
        style={{marginLeft:"30px"}}

        onClick={()=>{

          dispatch(day27_delItem(index))
        }}
      >
        
      </Button>

     
          </div>
           
            
         
        ))}

        <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        className="day27_addbtn"
        style={{marginLeft:"30px"}}

        onClick={()=>{

dispatch(day27_deleteALL())
}}
      >
        Delete ALL
      </Button>
       
      
        </>
    );
}
export default ListTodo;