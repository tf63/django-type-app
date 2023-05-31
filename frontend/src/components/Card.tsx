import React from 'react'

type CardProps = {
    content: string
}

const Card: React.FC<CardProps> = ({ content }) => {
    return <div className="card">{content}</div>
}

export default Card
