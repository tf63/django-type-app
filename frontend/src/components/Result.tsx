import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Card from './Card'
import LinkCard from './LinkCard'
import { GameState } from '../types/types'
import axios from 'axios'

const Result: React.FC = () => {
    const location = useLocation()
    const gameState: GameState = location.state

    const post_data = async (data: GameState) => {
        try {
            const response = await axios.post('http://localhost:8000/api/record', data)
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        post_data(gameState)
    }, [])

    return (
        <div>
            <div className="card">Result</div>
            <div className="card">correct: {gameState.correct}</div>
            <div className="card">miss: {gameState.miss}</div>
            <div className="card">time: {gameState.time}</div>
            <LinkCard link="/" content="Home" color="Green" />
            <LinkCard link="/select" content="Select" color="Green" />
        </div>
    )
}

export default Result
