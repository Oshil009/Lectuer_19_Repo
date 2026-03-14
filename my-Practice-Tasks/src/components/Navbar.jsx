import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div style={{ display: "flex", gap: "20px" ,"margin":"10px"}}>
            <Link to="/">Home</Link> ||
            <Link to="/about">About</Link> ||
            <Link to="/Contact">Contact</Link>
        </div>
    )
}

export default Navbar