import React from 'react'
import LinkCard from './LinkCard'

function Tutorial() {
    return (
        <div>
            <LinkCard link={'/input'} content={'Input'} color="Green" />
            <LinkCard link={'/tictactoe'} content={'TicTacToe'} color="Green" />
            <LinkCard link={'/greeting'} content={'Greeting'} color="Green" />
            <LinkCard link={'/counter'} content={'Counter'} color="Green" />
            <LinkCard link={'/timer'} content={'Timer'} color="Green" />
        </div>
    )
}

export default Tutorial
