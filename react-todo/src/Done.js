import React from 'react';
import Item from './Item';

import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

class Done extends React.Component {
    doneTitle = <ListSubheader>Done</ListSubheader>;

    render() {
        return (
            <List subheader={this.doneTitle}>
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
            </List>
        )
    }
}

export default Done;
