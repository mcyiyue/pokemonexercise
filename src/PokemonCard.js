import React from 'react';

class PokePic extends React.Component {
    render(){
        return(
            <p>{this.props.image}</p>
        )
    }
}

class PokemonCard extends React.Component {
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
        const dividerStyle={
            width:"300px"
        }
        return(
            <>
              <div className="card"  style={dividerStyle}>
                <div className="card-divider">
                    <p onClick={this.togglePicture}>{this.props.pokemon.name}</p>
                </div>
               <div className="card-section">
                    {this.showImage()}
               </div>
              </div>
            </>
        )
    }
}

export default PokemonCard