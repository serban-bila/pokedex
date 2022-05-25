import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import './pokemon-details.styles.scss'
import { Link } from "react-router-dom";


const PokemonDetails = () => {
    // const currentPokemon = useSelector((state) => state.pokemon.name);
    const [ pokemonDetails, setPokemonDetails ] = useState({});
    const [ pokemonImage, setPokemonImage ] = useState('');
    const {pokemon} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        console.log(pokemon);
        const fetchDetails = async() => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            const poke = await response.json();
            setPokemonDetails(poke);
        }
        fetchDetails();
    },[pokemon])

    useEffect(() => {
        if (Object.keys(pokemonDetails).length) {
            console.log(pokemonDetails)
        }
    }, [pokemonDetails])

    const redirect = () => {
        navigate('/');
    }

    useEffect(() => {
        if (Object.keys(pokemonDetails).length) {
            setPokemonImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDetails.id}.png`);
        }
    },[pokemon, pokemonDetails])

    return (
        Object.keys(pokemonDetails).length &&
        <div className="details-wrapper" >
            <div className="details-wrapper-close" onClick={redirect}></div>
            <Link to="/" style={{textDecoration: 'none'}}>
                <span className="exit-menu">&#10006;</span>
            </Link>
            <div className="details-container">
                    <img src={pokemonImage} alt={pokemonDetails.name}/>
                    <span className="name">{pokemonDetails.name}</span>
                <div className="text-container">
                    <div className="types">
                        {pokemonDetails.types.map((el) => {
                            return <div key={el.type.name}><span className={`type${el.index}`}>{el?.type?.name}</span></div>
                        })}
                    </div>
                    <div className="abilities">ABILITIES:
                        <span>
                            {pokemonDetails.abilities.map((el) => {
                            return <div key={el.ability.name}><span className={`ability${el.index}`}>{el?.ability.name}</span></div>
                        })}
                        </span>
                    </div>
                    <span className="experience">{`BASE EXP: ${pokemonDetails.base_experience}`}</span>
                    <div className="stats">
                        {pokemonDetails.stats.map((el) => {
                            return <div key={el.stat.name}><div className={`stat${el.index}-name`}>{el.stat.name}</div>
                            <div className={`stat${el.index}`}>{el.base_stat}</div></div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetails;