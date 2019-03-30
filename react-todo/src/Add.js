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

class Add extends React.Component {
    input = React.createRef();

    render() {
        return (
            <div>
                <Paper elevation={1} style={styles.container}>
                    <InputBase
                        placeholder="New Task"
                        style={styles.input}
                        inputRef={this.input} />

                    <IconButton onClick={() => {
                        let subject = this.input.current.value;
                        this.props.add(subject);
                    }}>
                        <PlaylistAddIcon />
                    </IconButton>
                </Paper>
            </div>
        );
    }
}

export default Add;
