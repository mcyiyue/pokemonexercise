import React from 'react';

class SearchBar extends React.Component {
    render(){
        return <input className='cell large-2' type='search' placeholder='Search Pokemon' onChange={this.props.onSearchBarChange} />
    }
}

export default SearchBar