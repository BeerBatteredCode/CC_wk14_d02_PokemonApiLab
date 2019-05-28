import React, {Component} from 'react';
import PokemonSelector from '../components/PokemonSelector';
import PokemonDetail from '../components/PokemonDetail';

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
        const url = 'http://pokeapi.co/api/v2/pokemon/?limit=151';
        fetch(url)
            .then(res => res.json())
            .then((pokemon) => {
                this.setState({ pokemon: pokemon.results });
            });
    }

    selectPokemon(selectedIndex){
        const selectedPokemon = this.state.pokemon[selectedIndex];
        const url2 = selectedPokemon.url
        fetch(url2)
            .then(res => res.json())
            .then((selectedPokemon) => {
                this.setState({ selectedPokemon: selectedPokemon });
                console.log(selectedPokemon);
            });
    }

    render(){
        return(
            <>
                <h3>Pokemon</h3>
                <PokemonSelector
                    pokemon ={ this.state.pokemon }
                    onPokemonSelected={ this.selectPokemon }/>
                    <br></br>
                <PokemonDetail
                    pokemon={ this.state.selectedPokemon }/>
            </>
        )
    }
}

export default PokemonContainer;