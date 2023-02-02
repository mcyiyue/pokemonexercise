import React from 'react';

const Section = (props) => {
    return (
        <div className='grid-x grid-margin-x align-center'>
            {props.children}
        </div>
    )
}

export default Section;