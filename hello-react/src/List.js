import React from 'react';
import Item from './Item';

class List extends React.Component {
    render() {
        return (
            <ul>
                {this.props.data.map(item => {
                    return <Item name={item} remove={this.props.remove} />
                })}
            </ul>
        );
    }
}

export default List;
