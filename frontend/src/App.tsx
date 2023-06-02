import React from 'react'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Card from './components/Card'
import Game from './components/Game'
import Greeting from './components/Tutorial/Greeting'
import Nav from './components/Nav'
import InputComponent from './components/Tutorial/Input'
import './App.css'
import Select from './components/Select'
import TicTacToe from './components/Tutorial/TicTacToe'
import Tutorial from './components/Tutorial'
import Material from './components/Material'

function App() {
    return (
        <Router>
            <Nav />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/select" element={<Select />} />
                <Route path="/about" element={<About />} />
                <Route path="/game" element={<Game />} />
                <Route path="/material" element={<Material />} />
                <Route path="/tutorial" element={<Tutorial />} />
                <Route path="/tictactoe" element={<TicTacToe />} />
                <Route path="/greeting" element={<Greeting name="AAAAA" />} />
                <Route path="/input" element={<InputComponent />} />
            </Routes>
        </Router>
    )
}

export default App
