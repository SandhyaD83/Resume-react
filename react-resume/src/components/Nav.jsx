import React from 'react'
import { Link } from "react-router-dom"

function Nav() {
    return (
        <div className="nav">

            <div className="name">Sandhya</div>

            <div className="options">

                <Link to="/">
                    <div>Home</div>
                </Link>
                <Link to="/Education">
                    <div>Education</div>
                </Link>
                <Link to="/Skills">
                    <div>Skills</div>
                </Link>
                <Link to="/Contact">
                    <div>Contact</div>
                </Link>

            </div>

        </div>
    )
}

export default Nav