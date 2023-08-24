import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import imageUrl from "../assets/images/avatar-icon.png"
import {FaBars} from "react-icons/fa"
import {ImCross} from "react-icons/im"

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    }

    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }
    const [Mobile, setMobile] = useState(false)

    return (
        <header>
            <Link className="site-logo" to="/">Rent.inc</Link>
            <ul className={Mobile? "nav-links-mobile" : "nav"} onClick={() =>setMobile(false)} >
                <li>               
                <NavLink
                    to="/host"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Home
                </NavLink>
                </li>
              
                <li>
                <NavLink
                    to="/vans"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Houses
                </NavLink>
                </li>
                <li>
                <NavLink
                    to="/about"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                </li>
                <Link to="login" className="login-link">
                    <img
                        src={imageUrl}
                        className="login-icon"
                    />
                </Link>
                <button onClick={fakeLogOut} className="logout">logout</button>
            </ul>
            <button className="mobile-menue-icon" onClick={() => setMobile(!Mobile)}>
                {Mobile? <ImCross /> : <FaBars /> }
                
            </button>
        </header>
    )
}