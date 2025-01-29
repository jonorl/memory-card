import { useState, useEffect } from "react"
import Header from "./Header"
import Cards from "./Cards"

function App() {

  const pokemonArray = [1, 4, 7, 16, 25, 39, 54, 79, 129, 132]

  const [pokemon, setPokemon] = useState(pokemonArray)
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pokemonName, setPokemonName] = useState(null)


  function shuffleArray(array) {
    const newArray = [...array]; // Create a copy of the original array

    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
    }
    return newArray;
  }

  let newArray = shuffleArray(pokemonArray)
  console.log(newArray)

  useEffect(() => {
    const fetchData = async () => {

      try {
        const [imageResponse, pokemonResponse] = await Promise.all([
          fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${newArray[0]}.png`),
          fetch(`https://pokeapi.co/api/v2/pokemon/${newArray[0]}`, {mode: "cors"})
        ]);

        const pokeImg = await imageResponse
        const pokeName = await pokemonResponse.json()
        setImg(pokeImg.url)
        setPokemonName(pokeName.name)
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(pokemonName)

  if (loading) {
    return <div>Loading...</div>;
  }

  // fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${newArray[0]}.png`)
  //   .then(response => {
  //     return img = response;
  //   })
  // fetch(`https://pokeapi.co/api/v2/pokemon/${newArray[0]}`)

  // Render and passing props to components

  return (
    <>
      <Header />
      <Cards img={img} pokemonName={pokemonName} />
    </>
  )
}

export default App
