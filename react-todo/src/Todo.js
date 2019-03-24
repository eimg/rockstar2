import React from 'react';
import Item from './Item';

class Todo extends React.Component {
    render() {
        return (
            <ul>
                {this.props.tasks.map(task => {
                    return (
                        <Item
                            key={task.id}
                            task={task}
                            done={this.props.done}
                            remove={this.props.remove}
                        />
                    )
                })}
            </ul>
        )
    }
}

export default Todo;
