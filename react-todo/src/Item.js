import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';

import DeleteIcon from '@material-ui/icons/Delete';

class Item extends React.Component {
    render() {
        return (
            <ListItem>
                {
                    this.props.task.status === 1 ?
                        <Checkbox checked={1} disableRipple onChange={() => {
                            this.props.undo(this.props.task.id)
                        }} />
                    :
                        <Checkbox checked={0} disableRipple onChange={() => {
                            this.props.done(this.props.task.id)
                        }} />
                }

                <ListItemText primary={this.props.task.subject} />

                <ListItemSecondaryAction>
                    <IconButton onClick={() => {
                        this.props.remove(this.props.task.id);
                    }}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default Item;
