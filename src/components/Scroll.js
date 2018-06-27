import React from 'react';

const Scroll = (props) => {
    // double curly brackets: javascript expression returning an object with css styles
    return ( 
        <div style={{ overflowY: 'scroll', border: '1px solid black', height: '500px' }}>
           { props.children }
        </div>
    )

}

export default Scroll;