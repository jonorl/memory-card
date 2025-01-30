import { useState, useEffect } from "react"
import Header from "./Header"
import Cards from "./Cards"

function App() {

  const pokemonArray = [1, 4, 7, 16, 25, 39, 54, 79, 129, 132]
  const [selectedPokemonArray, setSelectedPokemonArray] = useState([])

  const [pokemon, setPokemon] = useState(pokemonArray)
  const [currentScore, setCurrentScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pokemonName, setPokemonName] = useState([])
  const [pokeNumber, setPokeNumber] = useState(null)

  function keepScore(num) {
    console.log(selectedPokemonArray)
    if (selectedPokemonArray.includes(num)) {
      setCurrentScore(0);
      console.log("game over, reset")
    }
    else {
      selectedPokemonArray.push(num);
      setCurrentScore(currentScore + 1);
      if (highScore < currentScore) {
        setHighScore(currentScore)
      }
      console.log(selectedPokemonArray)
      console.log(currentScore)
      console.log(highScore)
    }
    return (
      currentScore,
      highScore
    )
  }

  function sufflePokemonRender(event) {
    console.log(event)
    setPokemon(pokemonArray);
    console.log("placeholder")
    const fetchData = async () => {

      try {
        setLoading(true);

        const fetchPromises = pokemonArray.map(async (pokemon, index) => {
          const [imageResponse, pokemonData] = await Promise.all([
            fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${newArray[index]}.png`),
            fetch(`https://pokeapi.co/api/v2/pokemon/${newArray[index]}`, { mode: "cors" })
          ]);

          const pokeImg = imageResponse
          const pokeData = await pokemonData.json()

          return {
            imageUrl: pokeImg.url,
            name: pokeData.name,
            number: pokeData.id
          };
        });

        const results = await Promise.all(fetchPromises);
        setImg(results.map(result => result.imageUrl));
        setPokemonName(results.map(result => result.name));
        setPokeNumber(results.map(result => result.number));
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }


  const shuffleArray = function shuffleArray(array) {
    const newArray = [...array]; // Create a copy of the original array

    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
    }
    return newArray;
  }

  let newArray = shuffleArray(pokemonArray)

  // Create a new array by mapping through existing entries
  useEffect(() => {

    const fetchData = async () => {

      try {
        setLoading(true);

        const fetchPromises = newArray.map(async (pokemon, index) => {
          const [imageResponse, pokemonData] = await Promise.all([
            fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${newArray[index]}.png`),
            fetch(`https://pokeapi.co/api/v2/pokemon/${newArray[index]}`, { mode: "cors" }),
          ]);

          const pokeImg = imageResponse
          const pokeData = await pokemonData.json()

          return {
            imageUrl: pokeImg.url,
            name: pokeData.name,
            number: pokeData.id
          };
        });

        const results = await Promise.all(fetchPromises);
        setImg(results.map(result => result.imageUrl));
        setPokemonName(results.map(result => result.name));
        setPokeNumber(results.map(result => result.number));
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      <Header currentScore={currentScore} highScore={highScore}/>
      <Cards img={img} pokemonName={pokemonName} shuffleArray={shuffleArray(pokemonArray)} keepScore={keepScore} pokeNumber={pokeNumber} sufflePokemonRender={sufflePokemonRender} />
    </>
  )
}

export default App
