import './pokemon-card.styles.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({pokemon, onClick}) => {
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
        <Link style={{textDecoration: "none"}}  to={`/${name}`}>
        <div className="pokemonCard" onClick={onClick}>
            {pokemonIndex &&
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`} alt="pokemon" />
            }
            <h2>{name}</h2>
        </div>
        </Link>
    )
}

export default PokemonCard;
