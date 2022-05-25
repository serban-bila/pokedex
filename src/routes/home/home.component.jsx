import { useEffect, useState } from 'react';
import Pokemons from '../../components/pokemon/pokemons.component'
import PokemonDetails from '../pokemon-details/pokemon-details.component';
import { useParams } from 'react-router-dom';
import './home.styles.scss';


const Home = () => {

    const [pokemons, setPokemons] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [filteredPokemon, setFilteredPokemon] = useState(pokemons);
    const {pokemon} = useParams();
  

    useEffect(() => {
      const fetchData = async() => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
        const poke = await response.json();
        setPokemons(poke.results);
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
        <div className='container'>
            <input className='searchBox' placeholder='search pokemon' onChange={handleSearch}/>
             <Pokemons pokemons={filteredPokemon}/>
             {pokemon &&
             <PokemonDetails />}
        </div>
    );
};

export default Home;