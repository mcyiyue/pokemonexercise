import React from 'react';
import './App.css';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import Login from './Login';
import ShowPokemonCards from './ShowPokemonCards';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      searchText:'',
      route:'login'
    }
  }

  onSearchChange = (event) => {
      this.setState(
        {
          searchText: event.target.value
        }
      )
  }

  changeRoute = (route) => {
    this.setState(
      {
        route: route
      }
    )
  }

  render(){      
    return(
    <>
    <header><h1 className='text-left'>POKEMON DATABASE VIEWER</h1></header>
      {this.state.route ==='login' ?  
       <Login onClick={this.changeRoute}/>
        :
      <>
        <div className='grid-x grid-padding-x'>
          <div className='cell large-1'>
            <Navigation onClick={this.changeRoute} route={this.state.route} />
          </div>
          <div className='cell large-11'>
            <SearchBar onSearchBarChange={this.onSearchChange} />
            <ShowPokemonCards search={this.state.searchText} />
          </div>
        </div>
      </>
      }         
    </>
    )     
  }  
}

export default App;