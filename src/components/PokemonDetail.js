import React from 'react';

const PokemonDetail = ({pokemon}) => {
    if (pokemon === null){
        return(
            <p>Pick a Pokemon!</p>
        );
    }

    return (
        <>
            <img alt="sprite" src={pokemon.sprites.front_default}/>
            <h3>Name: {pokemon.name}</h3>
            <p>Height: {pokemon.height}</p>
            <p>Ability: {pokemon.abilities[0].ability.name}</p>
        </>
    )
}

export default PokemonDetail;