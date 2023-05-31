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
                    <Link to="/game">Game</Link>
                </li>
                <li>
                    <Link to="/input">Input</Link>
                </li>
                <li>
                    <Link to="/card">Card</Link>
                </li>
                <li>
                    <Link to="/tail">Tail</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
