import React from 'react';
import "./Day26.css";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from "react-redux";
import { updateEmailInput, updateUserNameInput , updatePasswordInput} from "./Actions";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Day26Login() {
    const userName = useSelector((state) => state.username)
    const email = useSelector((state) => state.email)
    const password = useSelector((state) => state.password)
    const dispatch = useDispatch();
    const classes = useStyles();

  

    return (
        <div>
           <div className="login_div">
            <form className="login_form">
            <h1 className="login_heading">Login Here</h1>
               
                <input
                    type="text"
                    placeholder='UserName'
                    value={userName}
                    className="login_input"
                    onChange={(e) => dispatch(updateUserNameInput(e.target.value))}/>

              
                <input
                    type="email"
                    placeholder='email'
                    value={email}
                    className="login_input"
                    onChange={(e) => dispatch(updateEmailInput(e.target.value))}/>

                <input
                    type="password"
                    placeholder='password'
                    value={password}
                    className="login_input"
                    onChange={(e) => dispatch(updatePasswordInput(e.target.value))}/>

                 <Button variant="contained" color="primary" 
                      style=
                      {{ marginTop: "30px",
                        height: "30px",
                        width: "300px",
                        backgroundColor:"#23278c",
                        boxShadow:"3px 5px 10px black",
                        marginLeft:"100px",
                        padding:"10px",
                       }}>
                    login
                   </Button>

                 
            </form>

            <br></br><br></br>
            <div>
              
                <p className="login_para">Name : {userName}</p>
                <p className="login_para">Email : {email}</p>
                <p className="login_para">Password : {password}</p>
            </div>
            </div>
        </div>
    );
}

export default Day26Login;