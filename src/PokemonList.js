import React from 'react';

class PokePic extends React.Component {
    render(){
        return(
            <p>{this.props.image}</p>
        )
    }
}

class PokemonList extends React.Component {
    constructor(){
        super();
        this.state = {
            isTogglePicture: false
        };
        
        this.togglePicture=this.togglePicture.bind(this);
    }

    togglePicture(){
        this.setState(
            {isTogglePicture:!this.state.isTogglePicture}
        )
    }

    showImage(){
        return this.state.isTogglePicture ? <PokePic image={this.props.pokemon.url}/> : ''
    }

    render(){
        return(
            <>
              <div>
               <p onClick={this.togglePicture}>{this.props.pokemon.name}</p>
               {this.showImage()}
              </div>
            </>
        )
    }
}

export default PokemonList