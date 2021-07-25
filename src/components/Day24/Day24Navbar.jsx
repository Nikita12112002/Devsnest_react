import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Day24.css";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Login=()=>
{
    const[login , setLogin]=useState("login");
    
   
   
    const logout=()=>
    {
        if(login==="login")
        {
        setTimeout(() => setLogin("logout"), 1000);
        setLogin("loading...");
        
        }
       
        else
        {
            setTimeout(() => setLogin("login"), 1000);
            setLogin("loading...");
        }
    }
  
    
   
    return(
        <>
          <Button variant="contained" color="secondary" 
          className="login-btn"  
          onClick={logout}
          style={{
                  height: "30px",
                  width: "100px",
                  float: "left",
                  marginLeft: "620px",
                  marginTop: "30px",
                 }}>

                {login}

          </Button>
        
        
        </>
    ); 
  
   
}
const Day24Navbar=()=>
{
   

    return(
        <>
        <nav className="navbar">
        <div>

        <ul>
            <NavLink exact to="/day24/home">            
            <li>
            HOME
            </li>
            </NavLink>
            
            <NavLink exact to="/day24/about">            
            <li>
            ABOUT
            </li>
            </NavLink>

            <NavLink  to="/Day24">            
            <li>
            PROFILE
            </li>
            </NavLink>

            <NavLink  to="/Day24">
            <li>
            CONTACT
            </li>
            </NavLink>

            <NavLink  to="/Day24">
            <li>
            DASHBOARD
            </li>
            </NavLink>
            
        </ul>
       
        </div>
        </nav>

     

    <br/><br/>
       <div>
        <h1 className="home_heading">HOME</h1>
        <h2 className="home_head">if not logged in cannot access profile and DASHBOARD</h2>
        <Login/>
        </div>

        <img src="https://www.kamlainfrabuild.com/images/feedback.gif" className="illus" alt="pic"/>
       
        </>
    );
}
export default Day24Navbar;

//<button className="login-btn" onClick={Login}>{login}</button>