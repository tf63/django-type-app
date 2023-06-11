import React from 'react'
import { useState, useEffect } from 'react'
import Card from './Card'
import { GameState, ProblemData } from '../types/types'
import axios from 'axios'

function Profile() {
    const [data, setData] = useState<GameState[]>()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/record')
                const data = response.data

                setData(data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [])

    return (
        <div>
            <Card content="Profile" />
            <div className="card-blue">Records</div>
            {data && (
                <div>
                    {data.map((item, index) => (
                        <div className="card">
                            problem {item.problem} correct {item.correct}, miss {item.miss}, time {item.time}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Profile
