import React from 'react'
import LinkCard from './LinkCard'

function Tutorial() {
    return (
        <div>
            <LinkCard link={'/input'} content={'Input'} />
            <LinkCard link={'/tictactoe'} content={'TicTacToe'} />
            <LinkCard link={'/greeting'} content={'Greeting'} />
        </div>
    )
}

export default Tutorial
