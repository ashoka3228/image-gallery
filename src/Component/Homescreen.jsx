import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

function Homescreen() {
  const [pokemonData, setPokemonData] = useState([]);
//   const [fetchPokemanData, setfetchPokemanData] = useState();

  useEffect(() => {
    const fetchData = async () => {
     
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        const results = response.data.results;

        // Update the state with the fetched data
        setPokemonData(results);
        // fetchPokemanData(results);
      };

    fetchData(); // Call the function to fetch data when the component mounts
  }, []); // Empty dependency array ensures the effect runs only once
  console.log(pokemonData)

  return (
    <div>
      <h1>Pokémon List</h1>
      <ul>
        {pokemonData.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
      <Button variant="contained">Click me</Button>

    </div>
  );
}




export default Homescreen