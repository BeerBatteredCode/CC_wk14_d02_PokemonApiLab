import React, {Component} from 'react';

class PokemonContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            pokemon: [],
            selectedPokemon: null
        };

        this.selectPokemon = this.selectPokemon.bind(this);
    }

    componentDidMount(){
        const url = 'http://pokeapi.co/api/v2/pokemon/?limit=50';
        fetch(url)
            .then(res = res.json())
            .then((pokemon) => {
                this.setState({ pokemon: pokemon });
            });
    }

    selectPokemon(selectedIndex){
        const selectedPokemon = this.state.pokemon[selectedIndex];
        this.setState({ selectPokemon: selectedPokemon })
    }

    render(){
        return(
            <>
                <h3>Pokemon</h3>
                <PokemonSelector
                    pokemon ={ this.state.pokemon }
                    onPokemonSelected={ this.selectPokemon }/>
                <PokemonDetail
                    pokemon={ this.state.selectedPokemon }/>
            </>
        )
    }
}

export default PokemonContainer;