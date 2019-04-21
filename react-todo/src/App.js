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
        add: subject => {
            fetch('http://localhost:8000/tasks', {
                method: 'POST',
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify({ subject })
            }).then(res => res.json()).then(json => {
                dispatch({ type: 'ADD', task: json });
            });
        },
        remove: _id => {
            dispatch({ type: 'DEL', _id });

            fetch(`http://localhost:8000/tasks/${_id}`, {
                method: 'DELETE'
            });
        },
        done: _id => {
            dispatch({ type: 'DONE', _id });

            fetch(`http://localhost:8000/tasks/${_id}`, {
                method: 'PATCH',
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify({ status: 1 })
            });
        },
        undo: _id => {
            dispatch({ type: 'UNDO', _id });

            fetch(`http://localhost:8000/tasks/${_id}`, {
                method: 'PATCH',
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify({ status: 0 })
            });
        },
        clear: () => {
            dispatch({ type: 'CLEAR' });

            fetch('http://localhost:8000/tasks', {
                method: 'DELETE'
            });
        }
    }
})(App);

export default ReduxApp;
