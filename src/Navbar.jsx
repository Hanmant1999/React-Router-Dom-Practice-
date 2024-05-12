import *  as React from  "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";


export function Navbar(){
    return (
        <div className="navbar">
            <NavLink to ="/" className="button" >Home</NavLink>
            <NavLink to ="/contact" className="button" >Contact</NavLink>
            <NavLink to ="/products" className="button" >Products</NavLink>
            <NavLink to ="/login" className="button" >Login</NavLink>
        </div>
    )
}