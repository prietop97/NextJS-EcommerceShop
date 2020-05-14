import React from 'react'

export default function SmallTitle({text}) {
    return (
        <div className="small-title-container">
            <h3>{text}</h3>
            <div className="line-below-text"></div>
        </div>
    )
}
