import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';

import DeleteIcon from '@material-ui/icons/Delete';

const Item = props => {
    return (
        <ListItem>
            {
                props.task.status === 1 ?
                    <Checkbox checked={1} disableRipple onChange={() => {
                        props.undo(props.task.id)
                    }} />
                :
                    <Checkbox checked={0} disableRipple onChange={() => {
                        props.done(props.task.id)
                    }} />
            }

            <ListItemText primary={props.task.subject} />

            <ListItemSecondaryAction>
                <IconButton onClick={() => {
                    props.remove(props.task.id);
                }}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default Item;
