import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';

import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

const styles = {
    container: {
        display: 'flex'
    },
    input: {
        flexGrow: 1,
        padding: 10
    }
}

const Add = props => {
    let input = React.createRef();
    return (
        <div>
            <Paper elevation={1} style={styles.container}>
                <InputBase
                    placeholder="New Task"
                    style={styles.input}
                    inputRef={input} />

                <IconButton onClick={() => {
                    let subject = input.current.value;
                    props.add(subject);
                }}>
                    <PlaylistAddIcon />
                </IconButton>
            </Paper>
        </div>
    );
}

export default Add;
