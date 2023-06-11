import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import LinkCard from './LinkCard'
import axios from 'axios'
import { ProblemData, Language } from '../types/types'

export const languageDict: { [key in Language]: string } = {
    python: 'Python',
    go: 'Go',
    typescript: 'TypeScript'
    //     java: 'Java',
    //     javascript: 'JavaScript',
    //     c: 'C',
    //     cpp: 'C++',
    //     csharp: 'C#',
    //     php: 'PHP',
    //     ruby: 'Ruby',
    //     swift: 'Swift',
    //     kotlin: 'Kotlin',
    //     rust: 'Rust',
    //     html: 'HTML',
    //     css: 'CSS',
    //     sql: 'SQL',
    //     bash: 'Bash'
}

function Select() {
    const [data, setData] = useState<ProblemData[] | null>(null)

    const handleClick = async (language: string) => {
        try {
            const response = await axios(`http://localhost:8000/api/problem/?language=${language}`)
            const data = await response.data

            setData(data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            {Object.values(languageDict).map((language) => (
                <div className="card-green btn" onClick={() => handleClick('python')}>
                    {language}
                </div>
            ))}
            <div className="card"></div>
            {data && (
                <div>
                    {data.map((item, index) => (
                        <Link to={'/game'} state={item} key={index} className="link">
                            <div className="card-blue">Problem: {item.problem_name}</div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Select
