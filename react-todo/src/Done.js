import React from 'react';
import Item from './Item';

class Done extends React.Component {
    render() {
        return (
            <ul>
                {this.props.tasks.map(task => {
                    return (
                        <Item
                            key={task.id}
                            task={task}
                            undo={this.props.undo}
                            remove={this.props.remove}
                        />
                    )
                })}
            </ul>
        )
    }
}

export default Done;
