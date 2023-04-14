import React from "react";
import {Link, NavLink} from "react-router-dom"

const Navbar = () => {
    return(
        <div className="NavbarContainer">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><NavLink to="/about-page">About us</NavLink></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login">LogIn</Link></li>
            </ul>
        </div>
    )
}
export default Navbar;