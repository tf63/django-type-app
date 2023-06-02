import React from 'react'
import Card from './Card'
import LinkCard from './LinkCard'

function Material() {
    return (
        <div>
            <Card content="Card" />
            <LinkCard content="LinkCard" link="/material" />
        </div>
    )
}

export default Material
