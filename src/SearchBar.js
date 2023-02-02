import React from 'react';
import Section from './Section.js';

class SearchBar extends React.Component {
    render(){
        return(
            <Section>
                <input className='cell large-2' type='search' placeholder='Search Pokemon' onChange={this.props.onSearchBarChange} />
            </Section>
        )
    }
}

export default SearchBar