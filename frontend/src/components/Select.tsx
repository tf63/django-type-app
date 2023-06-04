import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import LinkCard from './LinkCard'

type Language = 'Python' | 'Go'

interface Data {
    // データの型を定義する
    // 例: id: number;
    language: string
    length: ['short' | 'medium' | 'long']
    words: string[]
    tab_counts: number[]
}

function Select() {
    const [data, setData] = useState<Data[] | null>(null)

    const handleClick = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/problem')
            const data = await response.json()

            setData(data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <div className="card-green btn" onClick={handleClick}>
                Python
            </div>
            {data && (
                <div>
                    {data.map((item, index) => (
                        <Link
                            to={'/game'}
                            state={{ words: item.words, tab_counts: item.tab_counts }}
                            key={index}
                            className="link"
                        >
                            <div className="card">Length: {item.length}</div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Select
