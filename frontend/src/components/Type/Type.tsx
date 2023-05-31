import React, { useState, useEffect } from 'react'

const InputComponent: React.FC = () => {
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            setInputValue((prevValue) => prevValue + event.key)
        }

        window.addEventListener('keydown', handleKeyPress)

        return () => {
            window.removeEventListener('keydown', handleKeyPress)
        }
    }, [])

    return (
        <div>
            <h2>Input</h2>
            <p>This is the Input page.</p>
            <p>
                Input: <span>{inputValue}</span>
            </p>
        </div>
    )
}

export default InputComponent
