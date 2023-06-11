import React from 'react'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import Card from './components/Card'
import Game from './components/Game'
import Greeting from './components/Tutorial/Greeting'
import Nav from './components/Nav'
import Input from './components/Tutorial/Input'
import './App.css'
import Select from './components/Select'
import TicTacToe from './components/Tutorial/TicTacToe'
import Tutorial from './components/Tutorial'
import Material from './components/Material'
import Counter from './components/Tutorial/Counter'
import Timer from './components/Tutorial/Timer'
import Result from './components/Result'

function App() {
    return (
        <Router>
            <Nav />

            <Routes>
                {/* Nav */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/game" element={<Game />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/material" element={<Material />} />
                <Route path="/tutorial" element={<Tutorial />} />
                <Route path="/select" element={<Select />} />
                <Route path="/result" element={<Result />} />
                {/* Tutorials */}
                <Route path="/tictactoe" element={<TicTacToe />} />
                <Route path="/counter" element={<Counter initialValue={0} />} />
                <Route path="/greeting" element={<Greeting name="AAAAA" />} />
                <Route path="/input" element={<Input />} />
                <Route path="/timer" element={<Timer />} />
            </Routes>
        </Router>
    )
}

export default App
