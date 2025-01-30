import { useState, useEffect } from "react"
import Header from "./Header"
import Cards from "./Cards"

// THIS ARRAY NEEDED TO BE OUTSIDE OF THE COMPONENT - It threw all sort of weird errors in the linter when inside.

const pokemonArray = [1, 4, 7, 16, 25, 39, 54, 79, 129, 132] // Selected 10 specific pokemons (ids)

function App() {

  // Props

  const [selectedPokemonArray, setSelectedPokemonArray] = useState([]) // Array to keep track of scoring
  const [currentScore, setCurrentScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pokemonName, setPokemonName] = useState([])
  const [pokeNumber, setPokeNumber] = useState(null)
  const [triggerShuffle, setTriggerShuffle] = useState(false);

  // Function to keep track of current and high score

  function keepScore(num) {

    // If pokemon exists in array, reset the game and the array.

    if (selectedPokemonArray.includes(num)) {
      setCurrentScore(0);
      setSelectedPokemonArray([])
    }

    // Otherwise add the pokemon id into the array and add a score

    else {
      setSelectedPokemonArray([...selectedPokemonArray, num]) // Apparently it's best practice to do this than a push
      setCurrentScore(currentScore + 1);
      if (highScore <= currentScore) {
        setHighScore(currentScore + 1)
      }
    }
    return (
      currentScore,
      highScore
    )
  }

  useEffect(() => {

    // Render the shuffle

    function shufflePokemonRender() {
      const newArray = shuffleArray(pokemonArray)

      // Function to get the API image, name and id data to pass it as props.

      const fetchData = async () => {

        try {
          setLoading(true);

          // callback function to fetch all the data from APIs (two different API sources)

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

          // Trigger the data fetching function

          const results = await Promise.all(fetchPromises);

          // Assign API data to props.

          setImg(results.map((result) => result.imageUrl));
          setPokemonName(results.map((result) => result.name));
          setPokeNumber(results.map((result) => result.number));
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }

    shufflePokemonRender();

    // Set dependency - the rendering stops as soon as triggerShuffle (bool) changes
  }, [triggerShuffle]);

  // function to pass to child to run onClick, it changes the triggerShuffle starting/stopping shufflePokemonRender

  const handleShuffle = () => {
    setTriggerShuffle(!triggerShuffle);
  };

  // Function to shuffle the pokemon array to make it random upon every click/render this is triggered at the
  // moment of passing the prop to the child

  const shuffleArray = function shuffleArray(array) {
    const newArray = [...array]; // Create a copy of the original array

    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
    }
    return newArray;
  }

  // Helper to display loading of API elements.

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  // Render

  return (
    <>
      <Header currentScore={currentScore} highScore={highScore} />
      <Cards img={img} pokemonName={pokemonName} keepScore={keepScore} pokeNumber={pokeNumber} handleShuffle={handleShuffle} />
    </>
  )
}

export default App
