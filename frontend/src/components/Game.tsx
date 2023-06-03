import React from 'react'
import { useEffect, useState } from 'react'
import Card from './Card'

const Caret: React.FC = () => <span className="caret"></span>

type TargetItemState = {
    index: number
    item: string
}

type TargetItemProps = {
    index: number
    item: string
}

const TargetItem: React.FC<TargetItemProps> = ({ index, item }) => {
    const [state, setState] = useState<TargetItemState>({
        index: index,
        item: item
    })

    useEffect(() => {
        console.log('index: ', index)
        setState((prev) => ({
            ...prev,
            index: index
        }))
    }, [index])

    return (
        <li className="target_item">
            <span className="typed">{item.substring(0, state.index).replace(/ /g, '\u00A0')}</span>
            <Caret />
            <span className="untyped">{item.substring(state.index).replace(/ /g, '\u00A0')}</span>
        </li>
    )
}

const TargetBlock: React.FC = () => {
    const [inputText, setInputText] = useState('')
    const [index, setIndex] = useState(0)

    const handleKeyDown = (event: React.KeyboardEvent) => {
        const key = event.key
        if (key == 'y') {
            setIndex(index + 1)
        } else if (key == 'n') {
            if (index > 0) {
                setIndex(index - 1)
            }
        }
        console.log(key, index)
        setInputText((prev) => prev + key)
    }

    // useEffect(() => {
    //     setInputText((prev) => prev + key)
    // }, [key])

    return (
        <div className="card target_block" tabIndex={0} onKeyDown={handleKeyDown}>
            <ul>
                {inputText}
                <TargetItem item="aiueo kakikukeko sasisuseso" index={index} />
                {/* <TargetItem item="tatituteto naninuneno mamimumemo" /> */}
            </ul>
        </div>
    )
}

function Game() {
    return (
        <div>
            <Card content="Game" />
            <TargetBlock />
        </div>
    )
}

export default Game
