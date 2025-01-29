import { useState, useEffect } from "react"
import Header from "./Header"
import Cards from "./Cards"

function App() {

  const pokemonArray = [1, 4, 7, 16, 25, 39, 54, 79, 129, 132]
  let pokemonImgArray = [];
  let pokemonNameArray = [];


  const [pokemon, setPokemon] = useState(pokemonArray)
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pokemonName, setPokemonName] = useState([])

  function sufflePokemonRender() {
    setPokemon(pokemonArray);
    console.log("placeholder")
    const fetchData = async () => {

      try {
        setLoading(true);

        const fetchPromises = pokemonArray.map(async (pokemon, index) => {
          const [imageResponse, pokemonResponse] = await Promise.all([
            fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${newArray[index]}.png`),
            fetch(`https://pokeapi.co/api/v2/pokemon/${newArray[index]}`, { mode: "cors" })
          ]);

          const pokeImg = imageResponse
          const pokeName = await pokemonResponse.json()

          return {
            imageUrl: pokeImg.url,
            name: pokeName.name
          };
        });

        const results = await Promise.all(fetchPromises);
        setImg(results.map(result => result.imageUrl));
        setPokemonName(results.map(result => result.name));
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


  // testing map function


  // Create a new array by mapping through existing entries
  useEffect(() => {

    const fetchData = async () => {

      try {
        setLoading(true);

        const fetchPromises = pokemonArray.map(async (pokemon, index) => {
          const [imageResponse, pokemonResponse] = await Promise.all([
            fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${newArray[index]}.png`),
            fetch(`https://pokeapi.co/api/v2/pokemon/${newArray[index]}`, { mode: "cors" })
          ]);

          const pokeImg = imageResponse
          const pokeName = await pokemonResponse.json()

          return {
            imageUrl: pokeImg.url,
            name: pokeName.name
          };
        });

        const results = await Promise.all(fetchPromises);
        setImg(results.map(result => result.imageUrl));
        setPokemonName(results.map(result => result.name));
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
      <Header />
      <Cards img={img} pokemonName={pokemonName} shuffleArray={shuffleArray(pokemonArray)} sufflePokemonRender={sufflePokemonRender} />
    </>
  )
}

export default App
