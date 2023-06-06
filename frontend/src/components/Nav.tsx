import React from 'react'

import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className="navigation">
            <Link to="/">
                <h1>Typing Game</h1>
            </Link>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/select">Select</Link>
                </li>
                <li>
                    <Link to="/tutorial">Tutorial</Link>
                </li>
                <li>
                    <Link to="/material">Material</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
