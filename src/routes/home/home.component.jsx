import { useEffect, useState } from 'react';
import Pokemons from '../../components/pokemon/pokemons.component'


const Home = () => {

    const [pokemons, setPokemons] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [filteredPokemon, setFilteredPokemon] = useState(pokemons);
  
    console.log(filteredPokemon);
  
    useEffect(() => {
      const fetchData = async() => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
        const users = await response.json();
        setPokemons(users.results);
      }
      fetchData();
    },[])
  
    useEffect(() => {
      const newPokemons = pokemons.filter((pokemon) => {
        return pokemon.name.toLocaleLowerCase().includes(searchField);
      })
  
      setFilteredPokemon(newPokemons);
    },[pokemons, searchField])
  
  
    const handleSearch = (event) => {
      const searchedString = event.target.value.toLocaleLowerCase();
      setSearchField(searchedString);
    }

    return (
        <div>
            <input className='searchBox' placeholder='search pokemon' onChange={handleSearch}/>
             <Pokemons pokemons={filteredPokemon}/>
        </div>
    );
};

export default Home;