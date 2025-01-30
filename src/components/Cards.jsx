export default function Cards({ img, pokemonName, sufflePokemonRender, keepScore, pokeNumber }) {
    return (
        <div className="cards" >
            {pokemonName.length > 9 && (
                <>
                    <div onClick={(e) => {
                        keepScore(pokeNumber[0])
                        sufflePokemonRender(e);
                    }}  className="card0">
                        <img src={img[0]} />
                        <p id={pokeNumber[0]} className="pokemon-name">{pokemonName[0]}</p>
                    </div>
                    <div onClick={sufflePokemonRender} className="card1">
                        <img src={img[1]} />
                        <p id={pokeNumber[1]} className="pokemon-name">{pokemonName[1]}</p>
                    </div>
                    <div onClick={sufflePokemonRender} className="card2">
                        <img src={img[2]} />
                        <p id={pokeNumber[2]} className="pokemon-name">{pokemonName[2]}</p>
                    </div>
                    <div onClick={sufflePokemonRender} className="card3">
                        <img src={img[3]} />
                        <p id={pokeNumber[3]} className="pokemon-name">{pokemonName[3]}</p>
                    </div>
                    <div onClick={sufflePokemonRender} className="card4">
                        <img src={img[4]} />
                        <p id={pokeNumber[4]} className="pokemon-name">{pokemonName[4]}</p>
                    </div>
                    <div onClick={sufflePokemonRender} className="card5">
                        <img src={img[5]} />
                        <p id={pokeNumber[5]} className="pokemon-name">{pokemonName[5]}</p>
                    </div>
                    <div onClick={sufflePokemonRender} className="card6">
                        <img src={img[6]} />
                        <p id={pokeNumber[6]} className="pokemon-name">{pokemonName[6]}</p>
                    </div>
                    <div onClick={sufflePokemonRender} className="card7">
                        <img src={img[7]} />
                        <p id={pokeNumber[7]} className="pokemon-name">{pokemonName[7]}</p>
                    </div>
                    <div onClick={sufflePokemonRender} className="card8">
                        <img src={img[8]} />
                        <p id={pokeNumber[8]} className="pokemon-name">{pokemonName[8]}</p>
                    </div>
                    <div onClick={sufflePokemonRender} className="card9">
                        <img src={img[9]} />
                        <p id={pokeNumber[9]} className="pokemon-name">{pokemonName[9]}</p>
                    </div>
                </>)}
        </div >)
}