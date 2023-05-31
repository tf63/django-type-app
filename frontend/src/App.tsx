import React from 'react'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Card from './components/Card'
import Greeting from './components/Greeting'
import Game from './components/Tutorial/Game'
import Nav from './components/Nav'
import InputComponent from './components/Type/Type'
import './App.css'
import Select from './components/Select'

function App() {
    return (
        <Router>
            <Nav />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/select" element={<Select />} />
                <Route path="/about" element={<About />} />
                <Route path="/game" element={<Game />} />
                <Route path="/input" element={<InputComponent />} />
                <Route path="/card" element={<Card content="Card" />} />
            </Routes>
        </Router>
    )
}

export default App
