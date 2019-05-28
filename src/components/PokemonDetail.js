import React from 'react';

const PokemonDetail = ({pokemon}) => {
    if (pokemon === null){
        return(
            <p>Pick a Pokemon!</p>
        );
    }

    return (
        <>
            <h3>{pokemon.name}</h3>
        </>
    )
}

export default PokemonDetail;