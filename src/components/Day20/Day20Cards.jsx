import "./Day20.css";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Day20Cards=({name,calorie,index,data,setData})=>
{
  const classes = useStyles();

    return(
        
        <div className="container2">

            <h1>Dish : {name}</h1>

           <h2>You have consumed {calorie} cals today.</h2>

           <Button
                 onClick={()=>{

                  const newData=data.filter((el,i)=>i!==index);
                   setData(newData);
                  }}

        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}

        style={{

        color:"black" , 
        fontSize:"15px" ,
        backgroundColor:"#98edd9", 
        fontWeight:"bold",
        textAlign:"center",
        marginLeft:"145px",
        marginTop:"-15px",
        height:"30px",
        boxShadow:"3px 4px 5px black",
        }}
      >
        Delete
      </Button>
        </div>
    );
}
export default Day20Cards;

/*<button onClick={()=>{
               const newData=data.filter((el,i)=>i!==index);
               setData(newData);
             }}>
                DELETE
            </button>*/