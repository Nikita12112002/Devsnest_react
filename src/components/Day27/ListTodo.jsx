import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

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
    return(
        <>
        <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        className="day27_addbtn"
        style={{marginLeft:"30px"}}
      >
        Delete
      </Button>
        </>
    );
}
export default ListTodo;