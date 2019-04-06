import React from 'react';
import Header from './Header';
import Todo from './Todo';
import Done from './Done';
import Add from './Add';

import Divider from '@material-ui/core/Divider';

import { connect } from 'react-redux';

const App = props => {
    return (
        <div>
            <Header count={props.count} clear={props.clear} />
            <div style={{margin: 10}}>

                <Add add={props.add} />
                <Todo
                    done={props.done}
                    remove={props.remove}
                    tasks={props.tasks}
                />
                <Divider />
                <Done
                    undo={props.undo}
                    remove={props.remove}
                    tasks={props.doneTasks}
                />
            </div>
        </div>
    );
}

const ReduxApp = connect(state => {
    return {
        count: state.filter(item => item.status === 0).length,
        tasks: state.filter(item => item.status === 0),
        doneTasks: state.filter(item => item.status === 1)
    }
}, dispatch => {
    return {
        add: subject => dispatch({ type: 'ADD', subject }),
        remove: id => dispatch({ type: 'DEL', id }),
        done: id => dispatch({ type: 'DONE', id }),
        undo: id => dispatch({ type: 'UNDO', id }),
        clear: () => dispatch({ type: 'CLEAR' })
    }
})(App);

export default ReduxApp;
