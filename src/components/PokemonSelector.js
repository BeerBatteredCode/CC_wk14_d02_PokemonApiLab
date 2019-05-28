import React from 'react';

const PokemonSelector = (props) => {
    const options = props.pokemon.map((pokemon, index) => {
        return (<option value={index} key={index}>{pokemon.name}</option>);
    });

    function handleSelectChange(evt) {
        const selectedIndex = evt.target.value;
        props.onPokemonSelected(selectedIndex);
    }

    return (
        <select
        onChange={ handleSelectChange }
        >
            <option disabled value="default">Choose a Pokemon....</option>
            { options }
        </select>
    )
}

export default PokemonSelector;