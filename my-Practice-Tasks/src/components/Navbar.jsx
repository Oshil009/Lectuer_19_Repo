import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = ({ setIsLogin }) => {
    return (
        <div style={{ display: "flex", gap: "20px", "margin": "10px" }}>
            <Link to="/">Home</Link> ||
            <Link to="/about">About</Link> ||
            <Link to="/Contact">Contact</Link>
            <button onClick={() => {
                localStorage.removeItem('isLoggedIn')
                setIsLogin(false)
            }}>Logout</button>
        </div >
    )
}

export default Navbar