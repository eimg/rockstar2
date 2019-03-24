import React from 'react';
import Item from './Item';

const List = props => {
    return (
        <ul>
            {props.data.map(item => {
                return <Item name={item} remove={props.remove} />
            })}
        </ul>
    );
}

export default List;
