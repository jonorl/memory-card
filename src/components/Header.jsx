import { useState } from 'react'

export default function Header() {
    const [currentScore, setcurrentScore] = useState(0)
    const [highScore, sethighScore] = useState(0)


    return (
        <div className="header">
            <h1 className="title">Pokemon Memory Game</h1>
            <h2 className="subtitle">Don&apos;t press the same Pokemon twice</h2>
            <p className="current-score">Current score: { }</p>
            <p className="high-score">High score: { }</p>
        </div>
    )
}