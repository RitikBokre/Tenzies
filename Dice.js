import React from 'react'

export default function Dice({ hold, id, handleClick,num }) {
    const holdClasses = hold ? 'hold' : ''
    return <div className={`dice ${holdClasses}`} onClick={handleClick}>{num}</div>
}