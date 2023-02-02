import React from 'react';

class PokePic extends React.Component {
    render(){
        return(
        <>
            <img alt='' src={this.props.image}></img>
        </>
        )
    }
}

class PokemonCard extends React.Component {
    constructor(){
        super();
        this.state = {
            isTogglePicture: false,
            pokemon:''
        };
        
        this.togglePicture=this.togglePicture.bind(this);
    }

    togglePicture(){
            this.setState(
                {isTogglePicture:!this.state.isTogglePicture}
            )
            fetch(this.props.pokemon.url)
            .then(response => response.json())
            .then(result => this.setState({pokemon: result.sprites.other['official-artwork'].front_default}));
    }


    showImage(){
        return this.state.isTogglePicture ? <PokePic image={this.state.pokemon}/> : ''
    }

    render(){
        return(
                
                    <div className="card cell small-6 medium-4 large-2">
                        <div className="card-divider grid-x grid-margin-x align-center">
                            <p className='small-12 large-12 text-center'>{this.props.pokemon.name}</p>
                            <p className='small-12 large-12 button' 
                                onClick={this.togglePicture}>{this.state.isTogglePicture ? 'Hide Pokemon' : 'Show Pokemon'}
                            </p>
                        </div>
                    <div className="card-section">
                            {this.showImage()}
                    </div>
                    </div>
        )
    }
}

export default PokemonCard