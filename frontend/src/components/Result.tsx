import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Card from './Card'
import LinkCard from './LinkCard'
import { GameState } from '../types/types'

const Result: React.FC = () => {
    const location = useLocation()
    const gameState: GameState = location.state

    return (
        <div>
            <div className="card">Result</div>
            <div className="card">id: {gameState.problem}</div>
            <div className="card">correct: {gameState.correct}</div>
            <div className="card">miss: {gameState.miss}</div>
            <div className="card">time: {gameState.time}</div>
            <LinkCard link="/" content="Home" color="Green" />
            <LinkCard link="/select" content="Select" color="Green" />
        </div>
    )
}

export default Result
