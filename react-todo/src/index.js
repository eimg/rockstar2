import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

var store = createStore((state = [], action) => {
    switch(action.type) {
        case 'SET':
            return action.tasks;
            break;
        case 'ADD': return [
                action.task,
                ...state
            ];
            break;
        case 'DEL':
            return state.filter(item => item._id !== action._id);
            break;
        case 'DONE':
            return state.map(item => {
                if(item._id === action._id) item.status = 1;
                return item;
            });
            break;
        case 'UNDO':
            return state.map(item => {
                if(item._id === action._id) item.status = 0;
                return item;
            });
            break;
        case 'CLEAR':
            return state.filter(item => item.status === 0);
            break;
        default:
            return state;
    }
});

fetch('http://localhost:8000/tasks').then(res => {
    return res.json();
}).then( json => {
    store.dispatch({ 'type': 'SET', 'tasks': json });
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
