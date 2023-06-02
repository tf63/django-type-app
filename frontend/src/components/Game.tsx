import React from 'react'
import { useEffect, useState } from 'react'
import Card from './Card'

const Caret: React.FC = () => <span className="caret"></span>

type TargetItemState = {
    index: number
    readonly item: string
}
const TargetItem: React.FC = () => {
    const [state, setState] = useState<TargetItemState>({
        index: 0,
        item: ''
    })

    return (
        <li className="target_item">
            <span className="typed">ddddddddddddddddd</span>
            <Caret />
            <span className="untyped">uuuuuuuuuuuuuuu</span>
        </li>
    )
}

const TargetBlock: React.FC = () => {
    return (
        <div className="card target_block">
            <ul>
                <TargetItem />
                <TargetItem />
                <TargetItem />
                <TargetItem />
                <TargetItem />
                <TargetItem />
                <TargetItem />
                <TargetItem />
                <TargetItem />
                <TargetItem />
                <TargetItem />
                <TargetItem />
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
