import React from "react";
import Button from '@material-ui/icons/Delete';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
 


const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  
  
  export default function IconLabelButtons(props) {
    const classes = useStyles();
    
  
    return (
      <div>
        <Button
          style={{color:"blue" ,backgroundColor:"transparent",height:"34px", width:"40px" , marginLeft:"184px" , marginTop:"-15px"}}
          variant="contained"
          color="secondary"
          className={classes.button}
          className="btn2345"
          onClick={props.onSelect}
          starticon={<DeleteIcon/>}
        >
         Delete
        </Button>
      
      </div>
    );
  }