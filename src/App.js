import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import PokemonCard from './PokemonCard';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      pokemons: [],
      searchText:''
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
    return data.name.toLowerCase().includes(this.state.searchText.toString().toLowerCase())
  }))
}

onSearchChange = (event) => {
  this.setState(
    {
      searchText: event.target.value
    }
  )
}

render(){
    
    return(
      <> 
        <header><h1 className='text-center'>POKEMON DATABASE VIEWER</h1></header>
        <div className='grid-x grid-margin-x align-center'>
          <SearchBar onSearchBarChange={this.onSearchChange}/>
        </div>
        <div className='grid-x grid-margin-x'>
          { this.showList()}
        </div>
      </>
    )
    
    
  }  
}

export default App;