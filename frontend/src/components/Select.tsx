import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import LinkCard from './LinkCard'
import axios from 'axios'

type Language = 'python' | 'go' | 'typescript'
// | 'java'
// | 'javascript'
// | 'c'
// | 'cpp'
// | 'csharp'
// | 'php'
// | 'ruby'
// | 'swift'
// | 'kotlin'
// | 'rust'
// | 'html'
// | 'css'
// | 'sql'
// | 'bash'

const languageDict: { [key in Language]: string } = {
    python: 'Python',
    go: 'Go',
    typescript: 'TypeScript'
    // java: 'Java',
    // javascript: 'JavaScript',
    // c: 'C',
    // cpp: 'C++',
    // csharp: 'C#',
    // php: 'PHP',
    // ruby: 'Ruby',
    // swift: 'Swift',
    // kotlin: 'Kotlin',
    // rust: 'Rust',
    // html: 'HTML',
    // css: 'CSS',
    // sql: 'SQL',
    // bash: 'Bash'
}

interface Data {
    // データの型を定義する
    // 例: id: number;
    id: number
    problem_name: string
    language: Language
    length: ['short' | 'medium' | 'long']
    words: string[]
    tab_counts: number[]
}

function Select() {
    const [data, setData] = useState<Data[] | null>(null)

    const handleClick = async (language: string) => {
        try {
            const response = await fetch(`http://localhost:8000/api/problem/?language=${language}`)
            const data = await response.json()

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
                        <Link
                            to={'/game'}
                            state={{ words: item.words, tab_counts: item.tab_counts }}
                            key={index}
                            className="link"
                        >
                            <div className="card-blue">Problem: {item.problem_name}</div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Select
