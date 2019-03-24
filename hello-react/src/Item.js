import React from 'react';

const Item = props => {
    return (
        <li>
            {props.name}
            <button onClick={() => {
                props.remove( props.name )
            }}>&times;</button>
        </li>
    )
}

export default Item;
