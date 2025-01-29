export default function Cards({ img, pokemonName }) {
    console.log("image array: ")
    console.log(img)
    console.log("name array: ")
    console.log(pokemonName)
    console.log(Array.isArray(pokemonName))
    console.log(pokemonName.length)
    return (
        <div className="cards" >
            {pokemonName.length > 9 && (
                <>
                    <div className="card0">
                        <img src={img[0]} />
                        <p className="pokemon-name">{pokemonName[0]}</p>
                    </div>
                    <div className="card1">
                        <img src={img[1]} />
                        <p className="pokemon-name">{pokemonName[1]}</p>
                    </div>
                    <div className="card2">
                        <img src={img[2]} />
                        <p className="pokemon-name">{pokemonName[2]}</p>
                    </div>
                    <div className="card3">
                        <img src={img[3]} />
                        <p className="pokemon-name">{pokemonName[3]}</p>
                    </div>
                    <div className="card4">
                        <img src={img[4]} />
                        <p className="pokemon-name">{pokemonName[4]}</p>
                    </div>
                    <div className="card5">
                    <img src={img[5]} />
                    <p className="pokemon-name">{pokemonName[5]}</p>
                    </div>
                    <div className="card6">
                    <img src={img[6]} />
                    <p className="pokemon-name">{pokemonName[6]}</p>
                    </div>
                    <div className="card7">
                    <img src={img[7]} />
                    <p className="pokemon-name">{pokemonName[7]}</p>
                    </div>
                    <div className="card8">
                    <img src={img[8]} />
                    <p className="pokemon-name">{pokemonName[8]}</p>
                    </div>
                    <div className="card9">
                    <img src={img[9]} />
                    <p className="pokemon-name">{pokemonName[9]}</p>
                    </div>
                </>)}
        </div >)
}