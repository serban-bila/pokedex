import PokemonCard from "../pokemon-card/pokemon-card.component.jsx";
import './pokemons.styles.scss';

const Pokemons = ({pokemons}) => {

    return(
        <div className="pokemonList">
            {pokemons.map(pokemon => {
                return <PokemonCard pokemon={pokemon} key={pokemon.name} />
            })}
        </div>
    )
}

export default Pokemons;