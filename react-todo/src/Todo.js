import React from 'react';
import Item from './Item';

import List from '@material-ui/core/List';

const Todo = props => {
    return (
        <List>
            {props.tasks.map(task => {
                return (
                    <Item
                        key={task.id}
                        task={task}
                        done={props.done}
                        remove={props.remove}
                    />
                )
            })}
        </List>
    );
}

export default Todo;
