import React from 'react'
import { Link } from 'react-router-dom'

type LinkCardProps = {
    link: string
    content: string
}

const LinkCard: React.FC<LinkCardProps> = ({ link, content }) => {
    return (
        <div>
            <Link to={link} className="link">
                <div className="card-color btn">{content}</div>
            </Link>
        </div>
    )
}

export default LinkCard
