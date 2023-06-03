import React from 'react'
import Card from './Card'
import LinkCard from './LinkCard'

function Home() {
    return (
        <div>
            <LinkCard content="About" link="/about" color="Green" />
            <LinkCard content="Select" link="/select" color="Green" />
            <LinkCard content="Game" link="/game" color="Green" />
            <Card content="Card" />
            <Card content="Card" />
            <Card content="Card" />
            <Card content="Card" />
        </div>
    )
}

export default Home
