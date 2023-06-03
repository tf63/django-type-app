import React from 'react'
import Card from './Card'
import LinkCard from './LinkCard'

function Select() {
    return (
        <div>
            <LinkCard content="Game" link="/game" color="Green" />
            <Card content="Card" />
            <Card content="Card" />
            <Card content="Card" />
            <Card content="Card" />
        </div>
    )
}

export default Select
