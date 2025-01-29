export default function Cards({img, pokemonName}) {
    return (
        <div className="cards">
            <div className="card0">
                <img src={img} />
                <p>{pokemonName}</p>
            </div>
            <div className="card1">{ }</div>
            <div className="card2">{ }</div>
            <div className="card3">{ }</div>
            <div className="card4">{ }</div>
            <div className="card5">{ }</div>
            <div className="card6">{ }</div>
            <div className="card7">{ }</div>
            <div className="card8">{ }</div>
            <div className="card9">{ }</div>
        </div>
    )
}