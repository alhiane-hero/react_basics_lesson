import React from 'react';

// stateless component:
const Child = props => {
    return (
        <div className='info'>
            <p>Name: {props.name}</p>
            <p>Name: {props.age}</p>
        </div>
    );  
}

export default Child;