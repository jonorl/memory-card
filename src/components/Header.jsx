export default function Header({ currentScore, highScore }) {

    return (
        <div className="header">
            <h1 className="title">Pokemon Memory Game</h1>
            <h2 className="subtitle">Don&apos;t press the same Pokemon twice</h2>
            <p className="current-score">Current score: {currentScore}</p>
            <p className="high-score">High score: {highScore}</p>
        </div>
    )
}