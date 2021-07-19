import React from "react";
import { NavLink } from "react-router-dom";
import "./Day24.css";

const Day24Navbar=()=>
{
    return(
        <>
        <nav className="navbar">
        <div>

        <ul>
            <NavLink  to="/Day24">            
            <li>
            HOME
            </li>
            </NavLink>
            
            <NavLink  to="/Day24">            
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
        <h1 className="home_heading">Home</h1>
        <h2 className="home_head">if not logged in cannot access profile and DASHBOARD</h2>
        <button className="login-btn">login</button>
        </div>
        </>
    );
}
export default Day24Navbar;