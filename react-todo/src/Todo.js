import React from 'react';
import Item from './Item';

import List from '@material-ui/core/List';

class Todo extends React.Component {
    render() {
        return (
            <List>
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
            </List>
        )
    }
}

export default Todo;
