import React from 'react';
import List from './List';
import Add from './Add';

import { connect } from 'react-redux';

const App = props => {
    return (
        <div>
            <List data={props.data} remove={props.remove} />
            <Add add={props.add} />
        </div>
    )
}

const ReduxApp = connect((state) => {
    return { data: state }
}, (dispatch) => {
    return {
        add: (name) => {
            dispatch({ type: 'add', value: name })
        },
        remove: (name) => {
            dispatch({ type: 'remove', value: name })
        }
    }
})(App);

export default ReduxApp;
