import React from 'react';
import Item from './Item';

import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

const Done = props => {
    let doneTitle = <ListSubheader>Done ({props.tasks.length})</ListSubheader>;

    return (
        <List subheader={doneTitle}>
            {props.tasks.map(task => {
                return (
                    <Item
                        key={task.id}
                        task={task}
                        undo={props.undo}
                        remove={props.remove}
                    />
                )
            })}
        </List>
    )
}

export default Done;
