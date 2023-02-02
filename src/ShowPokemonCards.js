import React from 'react';
import PokemonCard from './PokemonCard';
import Section from './Section.js';

class ShowPokemonCards extends React.Component {
    constructor(){
        super()
        this.state = {
            pokemons: []
        }
    }

    componentDidMount(){
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
          .then(response => response.json())
          .then(result => this.setState({pokemons: result}));
      }
      
      showList(){
        if(this.state.pokemons?.results){
          const list=this.filteredPokemon().map((element, i) => {
             return <PokemonCard pokemon={element} key={i} />
            }
          )
        return list;
        }
      }
      
      filteredPokemon(){
        return (this.state.pokemons.results.filter(data => {
          return data.name.toLowerCase().includes(this.props.search.toString().toLowerCase())
        }))
      }

    render(){
        return(
            <Section>
                {this.showList()}
            </Section>
            
        )
    }
}

export default ShowPokemonCards;