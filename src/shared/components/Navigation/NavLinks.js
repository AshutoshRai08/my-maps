import React, {useContext}from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import './NavLinks.css';

const NavLinks=props=>{
    const auth=useContext(AuthContext);
return(
    <ul className="nav-links">
        <li>
            <NavLink to="/">All user</NavLink>
        </li>
        {auth.isLoggedIn &&(
        <li>
            
            <NavLink to="/u1/places">My Places</NavLink>
        </li>
        )}
        {auth.isLoggedIn &&(
        <li>
            <NavLink to="/places/new">Add Place</NavLink>
            </li>)}
            {!auth.isLoggedIn &&(
        <li>
            <NavLink to="/user/authentication">Authentication</NavLink>
        </li>)}
        {auth.isLoggedIn && (
           <li>   <button danger onClick={auth.logout}>
                LOGOUT
              </button>
              </li>
            )}
    </ul>
)
}
 
export default NavLinks;