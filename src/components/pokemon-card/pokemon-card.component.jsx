import './pokemon-card.styles.css';
import { useState, useEffect } from 'react';

const PokemonCard = ({pokemon}) => {
    const { name, url } = pokemon
    const [pokemonIndex, setPokemonIndex] = useState('');

    useEffect(() => {
        const fetchImage = async () => {
            const imageIndex = url.split('/')[url.split('/').length - 2];
            setPokemonIndex(imageIndex);
        }
        fetchImage();
    },[url]) 

    return(
        <div className="pokemonCard">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`} alt="pokemon" />
            <h2>{name}</h2>
        </div>
    )
}

export default PokemonCard;