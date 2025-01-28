import { useState } from "react"
import Header from "./Header"
import Cards from "./Cards"

function App() {

  const pokemonArray = [1, 4, 7, 16, 25, 39, 54, 79, 129, 132]
  

  function shuffleArray(array) {
    const newArray = [...array]; // Create a copy of the original array
  
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); 
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
    }
    return newArray;
  }

  let newArray = shuffleArray(pokemonArray)
  let img

  fetch(`https://pokeapi.co/api/v2/pokemon/${newArray[0]}`)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data.name) 
  })

  fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${newArray[0]}.png`)
  .then(response => {
    return img = response;
  })

  // Render and passing props to components

  return (
    <>
      <Header/>
      <Cards img={img}/>
    </>
  )
}

export default App
