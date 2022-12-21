import React from 'react';
import './App.css';
import PokemonCard from './PokemonCard';

class App extends React.Component {
  constructor(){
    super();
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
    const list=this.state.pokemons.results.map((element, i) => {
       return <PokemonCard pokemon={element} key={i} />
      }
    )
  return list;
  }
}
  render(){
    
    return(
      <> 
        <header><h1>POKEMON</h1></header>
        <div>
          { this.showList()}
        </div>
        
      </>
    )
    
    
  }  
}

export default App;
