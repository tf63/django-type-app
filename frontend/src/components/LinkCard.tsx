import React from 'react'
import { Link } from 'react-router-dom'

type LinkCardProps = {
    link: string
    content: string
    color: 'Blue' | 'Green'
}

const LinkCard: React.FC<LinkCardProps> = ({ link, content, color }) => {
    let colorName
    switch (color) {
        case 'Blue':
            colorName = 'card-blue'
            break
        case 'Green':
            colorName = 'card-green'
            break
    }
    return (
        <div>
            <Link to={link} className="link">
                <div className={`${colorName} btn`}>{content}</div>
            </Link>
        </div>
    )
}

export default LinkCard
