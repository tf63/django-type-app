import React, { useEffect, useState } from 'react'

function setCaret(sentence: string, index: number, index_line: number) {
    let pressed = sentence.substring(0, index)
    pressed = pressed.replace(/ /g, '&nbsp;')

    document.getElementById(`target_pressed${index_line}`)?.innerHTML = pressed
    document.getElementById(`target_text${index_line}`)?.innerHTML = `<span class='caret'></span>${sentence.substring(
        index
    )}`
}

function setTimer(timeLeft: number) {
    const [timer, setTimer] = useState(timeLeft)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer((prevTime) => {
                const newTime = prevTime - 1
                if (newTime === 0) {
                    clearInterval(intervalId)
                }
                return newTime
            })
        }, 1000)

        return () => clearInterval(intervalId)
    }, [timeLeft])

    return timer
}

const System: React.FC = () => {
    const [word, setWord] = useState('')
    const [words, setWords] = useState<string[]>([])
    const [numLines, setNumLines] = useState(0)
    const [tabCounts, setTabCounts] = useState<number[]>([])
    const [timeLeft, setTimeLeft] = useState(0)
    const [index, setIndex] = useState(0)
    const [indexLine, setIndexLine] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [incorrect, setIncorrect] = useState(0)
    const [sentence, setSentence] = useState('')
    const [result, setResult] = useState('')

    useEffect(() => {
        // HTMLがロードされたら
        async function fetchData() {
            // api
            const response = await fetch('/api/code/')
            const data = await response.json()

            // inputs
            setWord(data.word)
            setWords(data.words)
            setNumLines(data.words.length)
            setTabCounts(data.tab_counts)
            setTimeLeft(data.time_limit)
        }

        fetchData()
    }, [])

    const targetItems = words.map((word, i) => {
        const space = '&nbsp;'.repeat(4).repeat(tabCounts[i])
        const spacePrefix = `<span>${space}</span>`
        const pressedPrefix = `<span id='target_pressed${i}' class='pressed'></span>`
        return (
            <li key={i} className="target_item">
                {spacePrefix}
                {pressedPrefix}
                <span id={`target_text${i}`}>{word}</span>
            </li>
        )
    })
    useEffect(() => {
        // set indent
        for (let i = 0; i < numLines; i++) {
            const space = '&nbsp;'.repeat(4).repeat(tabCounts[i])
            const spacePrefix = `<span>${space}</span>`
            const pressedPrefix = `<span id='target_pressed${i}' class='pressed'></span>`
            const new_item = document.createElement('li')
            new_item.className = 'target_item'
            new_item.innerHTML = `${spacePrefix}${pressedPrefix}<span id='target_text${i}'>${words[i]}</span>`
            document.getElementById('target_list')?.appendChild(new_item)
        }

        setSentence(words[indexLine])
        setCaret(sentence, index, indexLine)
    }, [numLines, tabCounts])

    function handleKeyDown(event: React.KeyboardEvent) {
        const key = event.key

        // ブラウザの動作があるキーを無効化する
        if (key === 'Tab' || key === ' ') {
            event.preventDefault()
        }

        // 一部のキーはエスケープする
        if (key === 'Shift' || key === 'Control' || key === 'CapsLock' || key === 'Meta' || key === 'Alt') {
            return false
        }

        // shiftキーが押されている場合、文字列を大文字に変換する
        if (event.shiftKey) {
            event.key = event.key.toUpperCase()
        }

        // 正誤判定
        if (index !== sentence.length) {
            // まだ行末に達していなかったら
            if (key === sentence.charAt(index)) {
                // 入力が合っていたら
                setIndex((prevIndex) => prevIndex + 1)
                setCaret(sentence, index + 1, indexLine)

                setResult('Correct!')
                setCorrect((prevCorrect) => prevCorrect + 1)
            } else {
                // 入力が間違っていたら
                setIncorrect((prevIncorrect) => prevIncorrect + 1)
                setResult('Incorrect...')
                setIncorrect((prevIncorrect) => prevIncorrect + 1)
            }

            if (index + 1 === sentence.length && indexLine === numLines - 1) {
                console.log('complete !')
                window.location.href = '/result/'
            }
        } else {
            // 行末に達していたら
            if (key === 'Enter') {
                // Enterが押されたら次の行へ移動

                document.getElementById(`target_text${indexLine}`)?.innerHTML = ''

                setIndexLine((prevIndexLine) => prevIndexLine + 1)

                setResult('complete line')
                // sentenceを初期化
                setSentence(words[indexLine + 1])
                setIndex(0)
                setCaret(sentence, 0, indexLine + 1)
            } else {
                // Enter以外のキーが押されたらミスとする
                setResult('Incorrect...')
                setIncorrect((prevIncorrect) => prevIncorrect + 1)
            }
        }
    }

    return (
        <div>
            <div id="time_left">{setTimer(timeLeft)}</div>
            <ul id="target_list">{targetItems}</ul>
            <div id="result"></div>
            <div id="correct"></div>
            <div id="incorrect"></div>
            <textarea onKeyDown={handleKeyDown}></textarea>
        </div>
    )
}

export default System
