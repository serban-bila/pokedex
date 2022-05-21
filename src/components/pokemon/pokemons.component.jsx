import PokemonCard from "../pokemon-card/pokemon-card.component.jsx";
import './pokemons.styles.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Pokemons = ({pokemons}) => {
    // const [currentPokemon, setCurrentPokemon] = useState('');

    // useEffect(() => {

    // },)


    return(
        <div className="pokemonList">
            {pokemons.map(pokemon => {
                return <PokemonCard pokemon={pokemon} />
            })}
        </div>
    )
}

export default Pokemons;